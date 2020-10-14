mod controllers;
mod game_state;
mod geometry;
mod models;

use std::os::raw::{c_double, c_int};

use wasm_bindgen::prelude::*;

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
    pub fn new(width: f64, height: f64) -> GameData {
        GameData {
            state: GameState::new(width, height),
        }
    }

    pub fn update(&mut self, time: c_double) {
        self.state.update(time);
    }

    pub fn toggle_move_up1(&mut self, b: c_int) {
        self.state.world.player1.actions.move_up = int_to_bool(b);
    }

    pub fn toggle_move_down1(&mut self, b: c_int) {
        self.state.world.player1.actions.move_down = int_to_bool(b);
    }

    pub fn toggle_move_right1(&mut self, b: c_int) {
        self.state.world.player1.actions.move_right = int_to_bool(b);
    }

    pub fn toggle_move_left1(&mut self, b: c_int) {
        self.state.world.player1.actions.move_left = int_to_bool(b);
    }

    pub fn toggle_move_up2(&mut self, b: c_int) {
        self.state.world.player2.actions.move_up = int_to_bool(b);
    }

    pub fn toggle_move_down2(&mut self, b: c_int) {
        self.state.world.player2.actions.move_down = int_to_bool(b);
    }

    pub fn toggle_move_right2(&mut self, b: c_int) {
        self.state.world.player2.actions.move_right = int_to_bool(b);
    }

    pub fn toggle_move_left2(&mut self, b: c_int) {
        self.state.world.player2.actions.move_left = int_to_bool(b);
    }

    pub fn player1_x(&mut self) -> f64 {
        self.state.world.player1.x()
    }

    pub fn player1_y(&mut self) -> f64 {
        self.state.world.player1.y()
    }

    pub fn player2_x(&mut self) -> f64 {
        self.state.world.player2.x()
    }

    pub fn player2_y(&mut self) -> f64 {
        self.state.world.player2.y()
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
