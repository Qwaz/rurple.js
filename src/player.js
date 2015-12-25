import * as PIXI from 'pixi';

export default class Player {
    constructor(config) {
        config = config || {};
        config.width = config.width || 800;
        config.height = config.height || 600;
        this.config = config;
    }

    initRenderer(element) {
        this.renderer = PIXI.autoDetectRenderer(this.config.width, this.config.height, {backgroundColor: 0xABCDEF});
        element.appendChild(this.renderer.view);
    }
}