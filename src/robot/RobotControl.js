import * as PIXI from 'pixi';

class RobotSprite extends PIXI.Container {
    constructor(radius) {
        super();

        let graphics = new PIXI.Graphics();
        graphics.beginFill(0x222222);
        graphics.drawCircle(0, 0, radius);
        graphics.beginFill(0xFFFFFF);
        graphics.drawCircle(7, 0, 2);
        this.addChild(graphics);
    }
}

export class SimpleControl {
    constructor(view) {
        this.mapDrawer = view.mapDrawer;
        this.mapData = view.mapData;

        this.robot = new RobotSprite(this.mapDrawer.gridSize / 2 - 5);
        this.mapDrawer.addChild(this.robot);
        this.drawRobot();
    }

    drawRobot() {
        let baseX = this.mapDrawer.graphics.x - this.mapDrawer.gridSize / 2;
        let baseY = this.mapDrawer.graphics.y - this.mapDrawer.gridSize / 2;

        this.robot.rotation = Math.PI * 0.5 * this.mapData.robotDir;
        this.robot.x = baseX + this.mapData.robotX * this.mapDrawer.gridSize;
        this.robot.y = baseY + this.mapData.robotY * this.mapDrawer.gridSize;
    }

    turnLeft() {
        this.mapData.robotDir = (this.mapData.robotDir + 3) % 4;
        this.drawRobot();
    }

    turnRight() {
        this.mapData.robotDir = (this.mapData.robotDir + 1) % 4;
        this.drawRobot();
    }

    step(onError) {
        let delta = [
            [1, 0], //right
            [0, 1], //down
            [-1, 0], //left
            [0, -1] //up
        ];

        let getNextMove = (x, y, dir) => {
            let nextX = x + delta[dir][0];
            let nextY = y + delta[dir][1];

            if (1 <= nextX && nextX <= this.mapData.numColumns
                && 1 <= nextY && nextY <= this.mapData.numRows) {
                return [nextX, nextY];
            } else {
                return null;
            }
        };

        let next = getNextMove(this.mapData.robotX, this.mapData.robotY, this.mapData.robotDir);

        if (!next) {
            if (onError) onError();
        } else {
            this.mapData.robotX = next[0];
            this.mapData.robotY = next[1];
            this.drawRobot();
        }
    }
}

export class InteractiveControl extends SimpleControl {
    constructor(view) {
        super(view);

        document.addEventListener("keydown", (e) => {
            let left = 37, up = 38, right = 39;
            switch (e.keyCode) {
                case left:
                    this.turnLeft();
                    break;
                case right:
                    this.turnRight();
                    break;
                case up:
                    this.step(this.onError);
                    break;
            }
        });
    }
}
