mod controllers;
mod game_state;
mod geometry;
mod models;

use std::os::raw::{c_double, c_int};

use wasm_bindgen::prelude::*;

use self::controllers::CollisionsController;
use self::game_state::GameState;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct GameData {
    state: GameState,
}

#[wasm_bindgen]
impl GameData {
    pub fn new() -> GameData {
        let draw = Draw::new();
        let width: f64 = draw.width();
        let height: f64 = draw.height();
        GameData {
            state: GameState::new(width, height),
        }
    }

    pub fn update(&mut self, time: c_double) {
        self.state.update(time);
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

    pub fn player_x(&mut self, i: c_int) -> f64 {
        self.state.world.players[i as usize].x()
    }

    pub fn player_y(&mut self, i: c_int) -> f64 {
        self.state.world.players[i as usize].y()
    }

    pub fn draw(&mut self) {
        //        use geometry::{Advance, Position};

        let draw = Draw::new();

        draw.clear_screen();

        for wall in &self.state.world.walls {
            draw.draw_wall(wall.x(), wall.y());
        }

        for player in &self.state.world.players {
            draw.draw_player(player.id, player.x(), player.y());
        }
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
    pub fn draw_player(this: &Draw, _: c_int, _: c_double, _: c_double);

    #[wasm_bindgen(method)]
    pub fn draw_player2(this: &Draw, _: c_double, _: c_double);

    #[wasm_bindgen(method)]
    pub fn draw_wall(this: &Draw, _: c_double, _: c_double);
}
