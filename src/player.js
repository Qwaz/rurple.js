import MapContainer from './map/map_container';
import MapData from './map/map_data';

export default class Player {
    constructor(mapData, rendererConfig) {
        this.mapData = new MapData(mapData);
        this.map = new MapContainer(rendererConfig, this.mapData);
    }

    attachAt(element) {
        element.appendChild(this.map.renderer.view);
        this.startAnimate();
    }

    startAnimate() {
        let animate = () => {
            requestAnimationFrame(animate);
            this.map.render();
        };
        animate();
    }
}