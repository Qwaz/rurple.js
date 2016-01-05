import * as player from './Player';
export let view = {
    Player: player.default
};

import * as robotControl from './robot/RobotControl';
export let control = {
    SimpleControl: robotControl.SimpleControl,
    InteractiveControl: robotControl.InteractiveControl
};
