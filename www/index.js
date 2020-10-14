import { GameData } from "bomber-human-test";

const canvas = document.getElementById("bomberhuman");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gamedata = GameData.new(canvas.width, canvas.height);

function resources() {
    let res = {
 	player1: document.createElement('canvas'),
 	player2: document.createElement('canvas')
    }

    //Player1
    res.player1.width = 40;
    res.player1.height = 40;
    let pl1Ctx = res.player1.getContext('2d');
    pl1Ctx.fillStyle = "red";
    pl1Ctx.beginPath();
    pl1Ctx.arc(20, 20, 20, 0, 2 * Math.PI);
    pl1Ctx.fill();

    //Player2
    res.player2.width = 40;
    res.player2.height = 40;
    let pl2Ctx = res.player2.getContext('2d');
    pl2Ctx.fillStyle = "yellow";
    pl2Ctx.beginPath();
    pl2Ctx.arc(20, 20, 20, 0, 2 * Math.PI);
    pl2Ctx.fill();
    
    return res;
}

const res = resources();
var ctx = canvas.getContext("2d");

function clear_screen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw_player(player, x, y) {
    ctx.translate(x, y);
    ctx.translate(-20, -20);
    ctx.drawImage(player, 0, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.fillStyle = "black";
}

function processKey(key, b) {
    switch (key) {
    case "ArrowUp":
	gamedata.toggle_move_up1(b);
	break;
    case "ArrowDown":
	gamedata.toggle_move_down1(b);
	break;
    case "ArrowRight":
	gamedata.toggle_move_right1(b);
	break;
    case "ArrowLeft":
	gamedata.toggle_move_left1(b);
	break;
    case "w":
	gamedata.toggle_move_up2(b);
	break;
    case "s":
	gamedata.toggle_move_down2(b);
	break;
    case "d":
	gamedata.toggle_move_right2(b);
	break;
    case "a":
	gamedata.toggle_move_left2(b);
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
    let x1 = gamedata.player1_x();
    let y1 = gamedata.player1_y();
    draw_player(res.player1, x1, y1);
    
    let x2 = gamedata.player2_x();
    let y2 = gamedata.player2_y();
    draw_player(res.player2, x2, y2);
    // gamedata.draw();

    //Some bookkeeping
    prevTimestamp = timestamp;
    requestAnimationFrame(drawAndUpdate);
};

resize();
drawAndUpdate();
