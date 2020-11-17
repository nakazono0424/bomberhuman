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
 	players: [new Object(), new Object(), new Object(), new Object()],
	wall: document.createElement('canvas'),
	sblock: document.createElement('canvas'),
	bomb: new Object(),
	fire: new Object(),
	items: [new Object(), new Object(), new Object()]
    }

    //Player1
    res.players[0].img = new Image();
    res.players[0].img.src = 'figs/pipo-charachip001.png';

    //Player2
    res.players[1].img = new Image();
    res.players[1].img.src = 'figs/pipo-charachip002.png';

    //Player3
    res.players[2].img = new Image();
    res.players[2].img.src = 'figs/pipo-charachip003.png';

    //Player4
    res.players[3].img = new Image();
    res.players[3].img.src = 'figs/pipo-charachip004.png';
    
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

    // SoftBlock
    res.sblock.img = new Image();
    res.sblock.img.src = 'figs/maptips/mini/pipo-map001.png';

    //Bomb
    res.bomb.img = new Image();
    res.bomb.img.src = 'figs/bombs/bomb.png';

    //Fire
    res.fire.img = new Image();
    res.fire.img.src = 'figs/bombs/bomb.png';

    // Item0 bomb
    res.items[0].img = new Image();
    res.items[0].img.src = 'figs/items/bomb.png';

    // Item1 fire
    res.items[1].img = new Image();
    res.items[1].img.src = 'figs/items/fire.png';

    // Item2 speed
    res.items[2].img = new Image();
    res.items[2].img.src = 'figs/items/speed.png';

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
	ctx.fillStyle = "green";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    draw_player(i, x, y, rect_x, rect_y) {
	ctx.drawImage(res.players[i].img, rect_x, rect_y, 32, 32, x-20, y-20, 40, 40);
    }

    draw_wall(x, y) {
	ctx.translate(x, y);
	ctx.drawImage(res.wall, -20, -20);
	ctx.setTransform(1, 0, 0, 1, 0, 0);

	ctx.fillStyle = "white";
    }

    draw_sblock(x, y) {
	ctx.drawImage(res.sblock.img, 128, 32, 32, 32, x-20, y-20, 40, 40);
    }

    draw_bomb(i, x, y, condition) {
	ctx.drawImage(res.bomb.img, condition * 32, i * 32, 32, 32, x-20, y-20, 40, 40);
    }

    draw_fire(i, x, y, condition) {
	ctx.drawImage(res.fire.img, condition * 32, i * 32 + 160, 32, 32, x-20, y-20, 40, 40);
    }

    draw_item(i, x, y) {
	ctx.drawImage(res.items[i].img, x-20, y-20, 40, 40);
    }
}
