import * as PIXI from 'pixi';

export default class MapContainer extends PIXI.Container {
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
    }

    draw() {
        this.graphics.clear();

        const GAP = 10;
        let gridSize = Math.min(
            (this.config.renderWidth - 2*GAP)/this.mapData.numColumns,
            (this.config.renderHeight - 2*GAP)/this.mapData.numRows
        );

        this.graphics.lineStyle(2, this.config.lineColor, 1);
        for (let i = 1; i < this.mapData.numColumns; i++) {
            this.graphics.moveTo(i * gridSize, 0);
            this.graphics.lineTo(i * gridSize, this.mapData.numRows * gridSize);
        }

        for (let i = 1; i < this.mapData.numColumns; i++) {
            this.graphics.moveTo(0, i * gridSize);
            this.graphics.lineTo(this.mapData.numColumns * gridSize, i * gridSize);
        }
        this.graphics.lineStyle(5, this.config.lineColor, 1);
        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(this.mapData.numColumns * gridSize, 0);
        this.graphics.lineTo(this.mapData.numColumns * gridSize, this.mapData.numRows * gridSize);
        this.graphics.lineTo(0, this.mapData.numRows * gridSize);
        this.graphics.lineTo(0, 0);

        this.graphics.x = (this.config.renderWidth - gridSize * this.mapData.numColumns) / 2;
        this.graphics.y = (this.config.renderHeight - gridSize * this.mapData.numRows) / 2;
    }

    render() {
        this.draw();
        this.renderer.render(this);
    }
}