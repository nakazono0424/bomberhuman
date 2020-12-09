mod controllers;
mod game_state;
mod geometry;
mod models;

use self::controllers::{CollisionsController, Updater};
use self::game_state::GameState;
use std::os::raw::{c_double, c_int};
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct GameData {
    state: GameState,
}

#[wasm_bindgen]
impl GameData {
    pub fn new(num_of_player: i32) -> GameData {
        let draw = Draw::new();
        let width: f64 = draw.width();
        let height: f64 = draw.height();
        GameData {
            state: GameState::new(width, height, num_of_player),
        }
    }

    pub fn update(&mut self, time: c_double) {
        Updater::update(time, &mut self.state);
        CollisionsController::collisions(&mut self.state);
    }

    pub fn toggle_move_up(&mut self, i: c_int, b: c_int) {
        self.state.world.players[i as usize].actions.move_up = int_to_bool(b);
    }

    pub fn toggle_move_down(&mut self, i: c_int, b: c_int) {
        self.state.world.players[i as usize].actions.move_down = int_to_bool(b);
    }

    pub fn toggle_move_right(&mut self, i: c_int, b: c_int) {
        self.state.world.players[i as usize].actions.move_right = int_to_bool(b);
    }

    pub fn toggle_move_left(&mut self, i: c_int, b: c_int) {
        self.state.world.players[i as usize].actions.move_left = int_to_bool(b);
    }

    pub fn toggle_put_bomb(&mut self, i: c_int, b: c_int) {
        self.state.world.players[i as usize].actions.put_bomb = int_to_bool(b);
    }

    pub fn draw(&mut self) {
        //        use geometry::{Advance, Position};

        let draw = Draw::new();

        draw.clear_screen();

        for wall in &self.state.world.walls {
            draw.draw_wall(wall.x(), wall.y());
        }

        for sblock in &self.state.world.sblocks {
            draw.draw_sblock(sblock.x(), sblock.y());
        }

        for bomb in &self.state.world.bombs {
            draw.draw_bomb(bomb.player_id, bomb.x(), bomb.y(), bomb.condition);
        }

        for item in &self.state.world.items {
            draw.draw_item(item.item_id - 1, item.x(), item.y());
        }

        for fire in &self.state.world.fires {
            draw.draw_fire(fire.player_id, fire.x(), fire.y(), fire.condition);
        }

        for player in &self.state.world.players {
            draw.draw_player(
                player.id,
                player.x(),
                player.y(),
                player.rect_x,
                player.rect_y,
            );
            draw.draw_status(
                player.live,
                player.id,
                player.speed,
                player.bombs_limit,
                player.fire,
            );
        }

        draw.draw_time(
            self.state.world.time as i32 / 60,
            self.state.world.time as i32 % 60 / 10,
            self.state.world.time as i32 % 60 % 10,
        );

        if self
            .state
            .world
            .players
            .iter()
            .filter(|&player| player.live == true)
            .count()
            == 1
        {
            self.state.status = false;
            let winner = self.state.world.players.iter().find(|&player| player.live);
            draw.draw_end(winner.unwrap().id + 1);
        } else if !self.state.status
            || self
                .state
                .world
                .players
                .iter()
                .filter(|&player| player.live == true)
                .count()
                == 0
        {
            self.state.status = false;
            draw.draw_end(0);
        }
    }

    // for debug
    pub fn delete_wall(&mut self) {
        self.state.world.walls.clear();
    }

    pub fn delete_sblock(&mut self) {
        self.state.world.sblocks.clear();
    }

    pub fn kill_player(&mut self, num: i32) {
        self.state.world.players.retain(|player| player.id != num);
    }
}

fn int_to_bool(i: c_int) -> bool {
    i != 0
}

#[wasm_bindgen(module = "/src/javascript/draw.js")]
extern "C" {
    type Draw;

    #[wasm_bindgen(constructor)]
    pub fn new() -> Draw;

    #[wasm_bindgen(method)]
    pub fn width(this: &Draw) -> f64;

    #[wasm_bindgen(method)]
    pub fn height(this: &Draw) -> f64;

    #[wasm_bindgen(method)]
    pub fn clear_screen(this: &Draw);

    #[wasm_bindgen(method)]
    pub fn draw_player(this: &Draw, _: c_int, _: c_double, _: c_double, _: c_int, _: c_int);

    #[wasm_bindgen(method)]
    pub fn draw_bomb(this: &Draw, _: c_int, _: c_double, _: c_double, _: c_int);

    #[wasm_bindgen(method)]
    pub fn draw_item(this: &Draw, _: c_int, _: c_double, _: c_double);

    #[wasm_bindgen(method)]
    pub fn draw_wall(this: &Draw, _: c_double, _: c_double);

    #[wasm_bindgen(method)]
    pub fn draw_fire(this: &Draw, _: c_int, _: c_double, _: c_double, _: c_int);
    #[wasm_bindgen(method)]
    pub fn draw_sblock(this: &Draw, _: c_double, _: c_double);

    #[wasm_bindgen(method)]
    pub fn draw_time(this: &Draw, _: c_int, _: c_int, _: c_int);

    #[wasm_bindgen(method)]
    pub fn draw_status(this: &Draw, _: bool, _: c_int, _: c_double, _: c_int, _: c_int);
    #[wasm_bindgen(method)]
    pub fn draw_end(this: &Draw, _: c_int);
}
