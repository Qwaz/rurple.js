import MapDrawer from './map/MapDrawer';
import MapData from './map/MapData';
import RobotControl from './robot/RobotControl';

export default class Player {
    constructor(mapData, rendererConfig) {
        this.mapData = new MapData(mapData);
        this.mapDrawer = new MapDrawer(rendererConfig, this.mapData);
        this.robotControl = new RobotControl(this.mapDrawer, this.mapData);
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