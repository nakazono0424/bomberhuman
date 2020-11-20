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

function scan_gamepad_input(){
    if (navigator.getGamepads()) {
        var gamepads = navigator.Gamepads
        var gp = gamepads[0]
        if (buttonPressed(gp.button[0])){
            gamedata.toggle_move_up(0, true);
        }else {
            gamedata.toggle_move_up(0, false);
        }
        if (buttonPressed(gp.button[1])){
            gamedata.toggle_move_right(0, true);
        }else {
            gamedata.toggle_move_right(0, false);
        }
        if (buttonPressed(gp.button[2])){
            gamedata.toggle_move_down(0, true);
        }else {
            gamedata.toggle_move_down(0, false);
        }
        if (buttonPressed(gp.button[3])){
            gamedata.toggle_move_left(0, true);
        }else {
            gamedata.toggle_move_left(0, false);
        }
        if (buttonPressed(gp.button[4])){
            gamedata.toggle_put_bomb(0, true);
        }else {
            gamedata.toggle_put_bomb(0, false);
        }
    }
}

document.addEventListener('keydown', e => processKey(e.key, true));
document.addEventListener('keyup', e => processKey(e.key, false));
//document.addEventListener("gamepadconnected", e => init_gamepads(e.gamepad));

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

    //Update and draw
    let progress = (timestamp - prevTimestamp) / 1000;
    scan_gamepad_input();
    gamedata.update(progress);

    gamedata.draw();

    //Some bookkeeping
    prevTimestamp = timestamp;
    requestAnimationFrame(drawAndUpdate);
};

drawAndUpdate();
