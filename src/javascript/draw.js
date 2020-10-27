const GLID_SIZE = 40; //px
const GAMEDATA_WIDTH = 15;
const GAMEDATA_HEIGHT = 13;

const canvas = document.getElementById("bomberhuman");
canvas.width = GAMEDATA_WIDTH * GLID_SIZE;
canvas.height = GAMEDATA_HEIGHT * GLID_SIZE;
canvas.style.position = "absolute";
canvas.style.left = "100px";
canvas.style.top = "100px";
var ctx = canvas.getContext("2d");

function resources() {
    let res = {
 	players: [document.createElement('canvas'), document.createElement('canvas')],
	wall: document.createElement('canvas'),
	bomb: document.createElement('canvas'),
	fire: document.createElement('canvas')
    }

    //Player1
    res.players[0].width = 40;
    res.players[0].height = 40;
    let pl1Ctx = res.players[0].getContext('2d');
    pl1Ctx.fillStyle = "red";
    pl1Ctx.beginPath();
    pl1Ctx.arc(20, 20, 20, 0, 2 * Math.PI);
    pl1Ctx.fill();

    //Player2
    res.players[1].width = 40;
    res.players[1].height = 40;
    let pl2Ctx = res.players[1].getContext('2d');
    pl2Ctx.fillStyle = "yellow";
    pl2Ctx.beginPath();
    pl2Ctx.arc(20, 20, 20, 0, 2 * Math.PI);
    pl2Ctx.fill();

    //Wall
    res.wall.width = 40;
    res.wall.height = 40;
    let wallCtx = res.wall.getContext('2d');
    wallCtx.beginPath;
    wallCtx.rect(0, 0, 40, 40);
    wallCtx.fillStyle = "white";
    wallCtx.fill();
    wallCtx.strokeStyle = "black";
    wallCtx.lineWidth = 2;
    wallCtx.stroke();

    //Bomb
    res.bomb.width = 40;
    res.bomb.height = 40;
    let bombCtx = res.bomb.getContext('2d');
    bombCtx.fillStyle = "blue";
    bombCtx.beginPath();
    bombCtx.arc(20, 20, 20, 0, 2 * Math.PI);
    bombCtx.fill();

    //Fire
    res.fire.width = 40;
    res.fire.height = 40;
    let fireCtx = res.fire.getContext('2d');
    fireCtx.beginPath();
    fireCtx.moveTo(20, 0);
    fireCtx.lineTo(0, 40);
    fireCtx.lineTo(40, 40);
    fireCtx.lineTo(20, 0);
    fireCtx.closePath();
    fireCtx.fillStyle = "red";
    fireCtx.fill();

    return res;
}

const res = resources();

export class Draw {
    width() {
	return canvas.width;
    }

    height() {
	return canvas.height;
    }
    
    clear_screen() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    draw_player(i, x, y) {
	ctx.translate(x, y);
	ctx.translate(-20, -20);
	ctx.drawImage(res.players[i], 0, 0);
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	
	ctx.fillStyle = "black";
    }

    draw_wall(x, y) {
	ctx.translate(x, y);
	ctx.drawImage(res.wall, -20, -20);
	ctx.setTransform(1, 0, 0, 1, 0, 0);

	ctx.fillStyle = "white";
    }

    draw_bomb(x, y) {
	ctx.translate(x, y);
	ctx.drawImage(res.bomb, -20, -20);
	ctx.setTransform(1, 0, 0, 1, 0, 0);

	ctx.fillStyle = "blue";
    }

    draw_fire(x, y) {
	ctx.translate(x, y);
	ctx.drawImage(res.fire, -20, -20);
	ctx.setTransform(1, 0, 0, 1, 0, 0);

	ctx.fillStyle = "red";
    }	
}
