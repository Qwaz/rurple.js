import MapDrawer from './map/MapDrawer';
import MapData from './map/MapData';

export default class Player {
    constructor(mapData, rendererConfig) {
        this.mapData = new MapData(mapData);
        this.mapDrawer = new MapDrawer(rendererConfig, this.mapData);
    }

    attachAt(element) {
        element.appendChild(this.mapDrawer.renderer.view);
        this.startAnimate();
    }

    startAnimate() {
        let animate = () => {
            requestAnimationFrame(animate);
            this.mapDrawer.render();
        };
        animate();
    }
}