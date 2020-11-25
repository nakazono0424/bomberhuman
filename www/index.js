import { GameData } from "bomber-human-test";

const debug = true

let gamedata = GameData.new();

//function processKey(key, b) {
//    switch (key) {
//    case "ArrowUp":
//	gamedata.toggle_move_up(0, b);
//	break;
//    case "ArrowDown":
//	gamedata.toggle_move_down(0, b);
//	break;
//    case "ArrowRight":
//	gamedata.toggle_move_right(0, b);
//	break;
//    case "ArrowLeft":
//	gamedata.toggle_move_left(0, b);
//	break;
//    case " ":
//	gamedata.toggle_put_bomb(0, b);
//	break;
//    case "w":
//	gamedata.toggle_move_up(1, b);
//	break;
//    case "s":
//	gamedata.toggle_move_down(1, b);
//	break;
//    case "d":
//	gamedata.toggle_move_right(1, b);
//	break;
//    case "a":
//	gamedata.toggle_move_left(1, b);
//	break;
//    case "x":
//	gamedata.toggle_put_bomb(1, b);
//	break;
//    case "t":
//	gamedata.toggle_move_up(2, b);
//	break;
//    case "g":
//	gamedata.toggle_move_down(2, b);
//	break;
//    case "h":
//	gamedata.toggle_move_right(2, b);
//	break;
//    case "f":
//	gamedata.toggle_move_left(2, b);
//	break;
//    case "b":
//	gamedata.toggle_put_bomb(2, b);
//	break;
//    case "i":
//	gamedata.toggle_move_up(3, b);
//	break;
//    case "k":
//	gamedata.toggle_move_down(3, b);
//	break;
//    case "l":
//	gamedata.toggle_move_right(3, b);
//	break;
//    case "j":
//	gamedata.toggle_move_left(3, b);
//	break;
//    case ",":
//	gamedata.toggle_put_bomb(3, b);
//	break;
//    case "0":
//    gamedata.delete_wall(debug);
//    break;
//    case "9":
//    gamedata.delete_sblock(debug);
//    break;
//    }
//}

class Key {
    constructor(key1, key2, key3, key4, key5, num) {
        var up = key1;
        var left = key2;
        var down = key3;
        var right = key4;
        var put_bomb = key5;
        var player_num = num;
    }
    scan(){
        for (key of put_keys){
            if (key == up){
                gamedata.toggle_move_up(player_num, true);
            }else{
                gamedata.toggle_move_up(player_num, false);
            }
            if (key == left){
                gamedata.toggle_move_left(player_num, true);
            }else{
                gamedata.toggle_move_left(player_num, false);
            }
            if (key == down){
                gamedata.toggle_move_down(player_num, true);
            }else{
                gamedata.toggle_move_down(player_num, false);
            }
            if (key == right){
                gamedata.toggle_move_right(player_num, true);
            }else{
                gamedata.toggle_move_right(player_num, false);
            }
            if (key == put_bomb){
                gamedata.toggle_put_bomb(player_num, true);
            }else{
                gamedata.toggle_put_bomb(player_num, false);
            }
        }
    }
}

function pushKey(keys, key){
    keys.push(key);
}
function popKey(keys, key){
    keys[keys.indexOf(key)] = keys[keys.length];
    keys.pop;
}

var put_keys = [];
var key_bind = [];
key_bind[0] = new Key("ArrowUp","ArrowLeft","ArrowDown","ArrowRight"," ",0);
key_bind[1] = new Key("w","a","s","d","x",1);
key_bind[2] = new Key("t","f","g","h","b",2);
key_bind[3] = new Key("i","j","k","l",",",3);

document.addEventListener('keydown', e => pushKey(put_keys, e.key));
document.addEventListener('keyup', e => popKey(put_keys, e.key));
if (debug){
    document.addEventListener("gamepadconnected", e => init_gamepads(e.gamepad));
}

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

	var i;
    for (i = 0; i < 4; i++) {
        key_bind[i].scan;
    }
    if(navigator.getGamepads) {
	    var gamepad_list = navigator.getGamepads();
	    var num = gamepad_list.length;
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
