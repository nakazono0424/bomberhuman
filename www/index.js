import { GameData } from "bomber-human-test";

const canvas = document.getElementById("bomberhuman");
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

const gamedata = GameData.new(canvas.width, canvas.height);

function resources() {
    let res = {
	player: document.createElement('canvas')
    }

    //Player
    res.player.width = 20;
    res.player.height = 20;
    let plCtx = res.player.getContext('2d');
    plCtx.fillStyle = "red";
    plCtx.beginPath();
    plCtx.arc(10, 10, 10, 0, 2 * Math.PI);
    plCtx.fill();

    return res;
}

const res = resources();
var ctx = canvas.getContext("2d");

export function clear_screen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function draw_player(x, y) {
    ctx.translate(x, y);
    ctx.translate(0, -8);
    ctx.drawImage(res.player, 0, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.fillStyle = "black";
}

function processKey(key, b) {
    switch (key) {
    case "ArrowUp":
	gamedata.toggle_move_up(b);
	break;
    case "ArrowDown":
	gamedata.toggle_move_down(b);
	break;
    case "ArrowRight":
	gamedata.toggle_move_right(b);
	break;
    case "ArrowLeft":
	gamedata.toggle_move_left(b);
	break;
    }
}

document.addEventListener('keydown', e => processKey(e.key, true));
document.addEventListener('keyup', e => processKey(e.key, false));

// resize の方法が不明のため一旦保留
/*
function resize() {
    canvas.width = Window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    gamedata.resize(canvas.width, canvas.height);
}

window.addEventListener('resize', () => {
    resize();
});
*/

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

    // RustでJavaScriptの関数を使用する方法が不明のためとりあえずJS側で処理
    clear_screen();
    let x = gamedata.x();
    let y = gamedata.y();
    draw_player(x, y);
    // gamedata.draw();

    //Some bookkeeping
    prevTimestamp = timestamp;
    requestAnimationFrame(drawAndUpdate);
};

//resize();
drawAndUpdate();
