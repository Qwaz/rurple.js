import * as PIXI from 'pixi';

export default class MapDrawer extends PIXI.Container {
    constructor(config, mapData) {
        super();
        config = config || {};
        config.renderWidth = config.renderWidth || 800;
        config.renderHeight = config.renderHeight || 600;
        config.backgroundColor = config.hasOwnProperty('backgroundColor') ? config.backgroundColor : 0xABCDEF;
        config.lineColor = config.hasOwnProperty('lineColor') ? config.lineColor : 0x000000;
        this.config = config;
        this.mapData = mapData;

        this.graphics = new PIXI.Graphics();
        this.addChild(this.graphics);
        this.renderer = PIXI.autoDetectRenderer(this.config.renderWidth, this.config.renderHeight, {
            backgroundColor: this.config.backgroundColor
        });

        this.draw();
    }

    draw() {
        this.graphics.clear();

        const GAP = 10;
        let gridSize = Math.min(
            (this.config.renderWidth - 2*GAP)/this.mapData.numColumns,
            (this.config.renderHeight - 2*GAP)/this.mapData.numRows
        );

        const BOLD = 5, LIGHT = 1;

        //vertical lines
        for (let x = 1; x < this.mapData.numColumns; x++) {
            for (let y = 0; y < this.mapData.numRows; y++) {
                let index = (x - 1) * this.mapData.numRows + y;
                this.graphics.lineStyle(this.mapData.verticalWalls[index] ? BOLD : LIGHT, this.config.lineColor, 1);
                this.graphics.moveTo(x * gridSize, y * gridSize);
                this.graphics.lineTo(x * gridSize, (y+1) * gridSize);
            }
        }

        //horizontal lines
        for (let y = 1; y < this.mapData.numRows; y++) {
            for (let x = 0; x < this.mapData.numColumns; x++) {
                let index = (y - 1) * this.mapData.numColumns + x;
                this.graphics.lineStyle(this.mapData.horizontalWalls[index] ? BOLD : LIGHT, this.config.lineColor, 1);
                this.graphics.moveTo(x * gridSize, y * gridSize);
                this.graphics.lineTo((x+1) * gridSize, y * gridSize);
            }
        }

        //border
        this.graphics.lineStyle(BOLD, this.config.lineColor, 1);
        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(this.mapData.numColumns * gridSize, 0);
        this.graphics.lineTo(this.mapData.numColumns * gridSize, this.mapData.numRows * gridSize);
        this.graphics.lineTo(0, this.mapData.numRows * gridSize);
        this.graphics.lineTo(0, 0);

        this.graphics.x = (this.config.renderWidth - gridSize * this.mapData.numColumns) / 2;
        this.graphics.y = (this.config.renderHeight - gridSize * this.mapData.numRows) / 2;

        this.gridSize = gridSize;
    }

    render() {
        this.draw();
        this.renderer.render(this);
    }
}