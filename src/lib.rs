mod controllers;
mod game_state;
mod geometry;
mod models;

use std::os::raw::{c_double, c_int};

use wasm_bindgen::prelude::*;

use self::controllers::Actions;
use self::game_state::GameState;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct GameData {
    state: GameState,
    actions: Actions,
}

#[wasm_bindgen]
impl GameData {
    pub fn new(width: f64, height: f64) -> GameData {
        GameData {
            state: GameState::new(width, height),
            actions: Actions::default(),
        }
    }

    pub fn update(&mut self, time: c_double) {
        self.state.update(time, &self.actions);
    }

    pub fn toggle_move_up(&mut self, b: c_int) {
        self.actions.move_up = int_to_bool(b);
    }

    pub fn toggle_move_down(&mut self, b: c_int) {
        self.actions.move_down = int_to_bool(b);
    }

    pub fn toggle_move_right(&mut self, b: c_int) {
        self.actions.move_right = int_to_bool(b);
    }

    pub fn toggle_move_left(&mut self, b: c_int) {
        self.actions.move_left = int_to_bool(b);
    }

    pub fn player_x(&mut self) -> f64 {
        self.state.world.player.x()
    }

    pub fn player_y(&mut self) -> f64 {
        self.state.world.player.y()
    }

    /*
    pub fn draw(&mut self) {
        use geometry::{Advance, Position};

        clear_screen();
        draw_player(self.state.world.player.x(), self.state.world.player.y());
    }
     */
}

fn int_to_bool(i: c_int) -> bool {
    i != 0
}
