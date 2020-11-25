import { GameData } from "bomber-human-test";

const debug = false

var num_of_player = window.prompt("プレイヤー数を入力してください．(2，3，4)", "");

console.log(num_of_player);
if(num_of_player != "2" && num_of_player != "3" && num_of_player != "4"){
    num_of_player = 4;
}

console.log(num_of_player);
let gamedata = GameData.new(num_of_player);

class Key {
    constructor(key1, key2, key3, key4, key5, num) {
        this.up = key1;
        this.left = key2;
        this.down = key3;
        this.right = key4;
        this.put_bomb = key5;
        this.player_num = num;
    }
    scan(keys){
        gamedata.toggle_move_up(this.player_num, keys.some(e => e === this.up));
        gamedata.toggle_move_left(this.player_num, keys.some(e => e === this.left));
        gamedata.toggle_move_down(this.player_num, keys.some(e => e === this.down));
	gamedata.toggle_move_right(this.player_num, keys.some(e => e === this.right));
        gamedata.toggle_put_bomb(this.player_num, keys.some(e => e === this.put_bomb));
    }
}

function pushKey(keys, key, repeat){
    if(!repeat) {
	keys.push(key);
    }
}
function popKey(keys, key){
    put_keys = keys.filter(e => e !== key);
}

var put_keys = [];
var key_bind = [];
key_bind[0] = new Key("ArrowUp","ArrowLeft","ArrowDown","ArrowRight"," ",0);
key_bind[1] = new Key("w","a","s","d","x",1);
key_bind[2] = new Key("t","f","g","h","b",2);
key_bind[3] = new Key("i","j","k","l",",",3);

document.addEventListener('keydown', e => pushKey(put_keys, e.key, e.repeat));
document.addEventListener('keyup', e => popKey(put_keys, e.key));

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
    for (i = 0; i < num_of_player; i++) {
        key_bind[i].scan(put_keys);
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

	        if(buttons.length <= 12) {
	            gamedata.toggle_move_up(i, axes[1] < -0.3);
	            gamedata.toggle_move_down(i, axes[1] > 0.3);
	            gamedata.toggle_move_left(i, axes[0] < -0.3);
	            gamedata.toggle_move_right(i, axes[0] > 0.3);
	            gamedata.toggle_put_bomb(i, buttons[1].pressed);
	        } else {
                gamedata.toggle_move_up(i, buttons[12].pressed || axes[1] < -0.3);
                gamedata.toggle_move_down(i, buttons[13].pressed || axes[1] > 0.3);
                gamedata.toggle_move_left(i, buttons[14].pressed || axes[0] < -0.3);
                gamedata.toggle_move_right(i, buttons[15].pressed || axes[0] > 0.3);
                gamedata.toggle_put_bomb(i, buttons[1].pressed);
            }
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
