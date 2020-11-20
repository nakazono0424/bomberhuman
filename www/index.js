import { GameData } from "bomber-human-test";

const debug = true

let gamedata = GameData.new();

function processKey(key, b) {
    switch (key) {
    case "ArrowUp":
	gamedata.toggle_move_up(0, b);
	break;
    case "ArrowDown":
	gamedata.toggle_move_down(0, b);
	break;
    case "ArrowRight":
	gamedata.toggle_move_right(0, b);
	break;
    case "ArrowLeft":
	gamedata.toggle_move_left(0, b);
	break;
    case " ":
	gamedata.toggle_put_bomb(0, b);
	break;
    case "w":
	gamedata.toggle_move_up(1, b);
	break;
    case "s":
	gamedata.toggle_move_down(1, b);
	break;
    case "d":
	gamedata.toggle_move_right(1, b);
	break;
    case "a":
	gamedata.toggle_move_left(1, b);
	break;
    case "x":
	gamedata.toggle_put_bomb(1, b);
	break;
    case "t":
	gamedata.toggle_move_up(2, b);
	break;
    case "g":
	gamedata.toggle_move_down(2, b);
	break;
    case "h":
	gamedata.toggle_move_right(2, b);
	break;
    case "f":
	gamedata.toggle_move_left(2, b);
	break;
    case "b":
	gamedata.toggle_put_bomb(2, b);
	break;
    case "i":
	gamedata.toggle_move_up(3, b);
	break;
    case "k":
	gamedata.toggle_move_down(3, b);
	break;
    case "l":
	gamedata.toggle_move_right(3, b);
	break;
    case "j":
	gamedata.toggle_move_left(3, b);
	break;
    case ",":
	gamedata.toggle_put_bomb(3, b);
	break;
    case "0":
    gamedata.delete_wall(debug);
    break;
    case "9":
    gamedata.delete_sblock(debug);
    break;
    }
}

document.addEventListener('keydown', e => processKey(e.key, true));
document.addEventListener('keyup', e => processKey(e.key, false));

//Gameloop
let start = null;
let prevTimestamp = null;
let drawAndUpdate = (timestamp) => {
    //Initialization
    if (!prevTimestamp) {
	start = timestamp;
	prevTimestamp = timestamp;
	requestAnimationFrame(drawAndUpdate);
	return;
    }

    
    if(navigator.getGamepads) {
	var gamepad_list = navigator.getGamepads();

	var num = gamepad_list.length;

	var i;
	for(i=0; i<num; i++) {
	    var gamepad = gamepad_list[i];
	    if(!gamepad) continue;
	    console.log(gamepad);

	    var buttons = gamepad.buttons;
	    var axes = gamepad.axes;

	    gamedata.toggle_move_up(i, buttons[12].pressed || axes[1] < -0.3);
	    gamedata.toggle_move_down(i, buttons[13].pressed || axes[1] > 0.3);
	    gamedata.toggle_move_left(i, buttons[14].pressed || axes[0] < -0.3);
	    gamedata.toggle_move_right(i, buttons[15].pressed || axes[0] > 0.3);
	    gamedata.toggle_put_bomb(i, buttons[1].pressed);
	}
    }


    //Update and draw
    let progress = (timestamp - prevTimestamp) / 1000;
    gamedata.update(progress);

    gamedata.draw();

    //Some bookkeeping
    prevTimestamp = timestamp;
    requestAnimationFrame(drawAndUpdate);
};

drawAndUpdate();
