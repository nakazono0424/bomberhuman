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
    case "b":
	gamedata.toggle_put_bomb(1, b);
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

    //Update and draw
    let progress = (timestamp - prevTimestamp) / 1000;
    gamedata.update(progress);

    gamedata.draw();

    //Some bookkeeping
    prevTimestamp = timestamp;
    requestAnimationFrame(drawAndUpdate);
};

drawAndUpdate();
