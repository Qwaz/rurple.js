import * as PIXI from 'pixi';

export default class Player {
    constructor(config) {
        config = config || {};
        config.width = config.width || 800;
        config.height = config.height || 600;
        config.backgroundColor = config.hasOwnProperty('backgroundColor') ? config.backgroundColor : 0xABCDEF;
        this.config = config;

        this.stage = new PIXI.Container();
    }

    initRenderer(element) {
        console.log(this.config.backgroundColor);
        this.renderer = PIXI.autoDetectRenderer(this.config.width, this.config.height, {
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