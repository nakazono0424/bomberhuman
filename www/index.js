import { GameData } from "bomber-human-test";

const canvas = document.getElementById("bomberhuman");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gamedata = GameData.new(canvas.width, canvas.height);

function resources() {
    let res = {
	player: document.createElement('canvas')
    }

    //Player
    res.player.width = 40;
    res.player.height = 40;
    let plCtx = res.player.getContext('2d');
    plCtx.fillStyle = "red";
    plCtx.beginPath();
    plCtx.arc(20, 20, 20, 0, 2 * Math.PI);
    plCtx.fill();

    return res;
}

const res = resources();
var ctx = canvas.getContext("2d");

function clear_screen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw_player(x, y) {
    ctx.translate(x, y);
    ctx.translate(-20, -20);
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

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gamedata = GameData.new(canvas.width, canvas.height);
}

window.addEventListener('resize', () => {
    resize();
});


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
    let x = gamedata.player_x();
    let y = gamedata.player_y();
    draw_player(x, y);
    // gamedata.draw();

    //Some bookkeeping
    prevTimestamp = timestamp;
    requestAnimationFrame(drawAndUpdate);
};

resize();
drawAndUpdate();
