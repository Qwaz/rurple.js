import * as PIXI from 'pixi';

export default class Player {
    constructor(config) {
        config = config || {};
        config.renderWidth = config.renderWidth || 800;
        config.renderHeight = config.renderHeight || 600;
        config.width = config.width || 15;
        config.height = config.height || 15;
        config.backgroundColor = config.hasOwnProperty('backgroundColor') ? config.backgroundColor : 0xABCDEF;
        config.lineColor = config.hasOwnProperty('lineColor') ? config.lineColor : 0x000000;
        this.config = config;

        const GAP = 10;
        let gridSize = Math.min(
            (this.config.renderWidth - 2*GAP)/this.config.width,
            (this.config.renderHeight - 2*GAP)/this.config.height
        );

        this.stage = new PIXI.Container();

        this.map = new PIXI.Graphics();
        this.map.lineStyle(2, 0x000000, 1);
        for (let i = 1; i < this.config.width; i++) {
            this.map.moveTo(i * gridSize, 0);
            this.map.lineTo(i * gridSize, this.config.height * gridSize);
        }

        for (let i = 1; i < this.config.width; i++) {
            this.map.moveTo(0, i * gridSize);
            this.map.lineTo(this.config.width * gridSize, i * gridSize);
        }
        this.map.lineStyle(5, 0x000000, 1);
        this.map.moveTo(0, 0);
        this.map.lineTo(this.config.width * gridSize, 0);
        this.map.lineTo(this.config.width * gridSize, this.config.height * gridSize);
        this.map.lineTo(0, this.config.height * gridSize);
        this.map.lineTo(0, 0);

        this.stage.addChild(this.map);
        this.map.x = this.config.renderWidth / 2 - this.map.width / 2;
        this.map.y = this.config.renderHeight / 2 - this.map.height / 2;
    }

    initRenderer(element) {
        console.log(this.config.backgroundColor);
        this.renderer = PIXI.autoDetectRenderer(this.config.renderWidth, this.config.renderHeight, {
            backgroundColor: this.config.backgroundColor
        });
        element.appendChild(this.renderer.view);
    }

    startAnimate() {
        let animate = () => {
            requestAnimationFrame(animate);
            this.renderer.render(this.stage);
        };
        animate();
    }
}