import * as PIXI from 'pixi';

class RobotSprite extends PIXI.Container {
    constructor(radius) {
        super();

        let graphics = new PIXI.Graphics();
        graphics.beginFill(0x222222);
        graphics.drawCircle(0, 0, radius);
        this.addChild(graphics);
    }
}

export default class RobotControl {
    constructor(mapDrawer, mapData) {
        this.mapDrawer = mapDrawer;
        this.mapData = mapData;

        this.robot = new RobotSprite(this.mapDrawer.gridSize/2 - 5);
        this.mapDrawer.addChild(this.robot);
        this.moveRobot(this.mapData.robotX, this.mapData.robotY);
    }

    moveRobot(x, y) {
        let baseX = this.mapDrawer.graphics.x - this.mapDrawer.gridSize/2;
        let baseY = this.mapDrawer.graphics.y - this.mapDrawer.gridSize/2;

        this.robot.x = baseX + x * this.mapDrawer.gridSize;
        this.robot.y = baseY + y * this.mapDrawer.gridSize;
    }
}