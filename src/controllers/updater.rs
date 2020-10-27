use std::f64;

use crate::game_state::GameState;
use crate::geometry::Point;
use crate::models::{Bomb, Player, Wall};

/// Timers to handle creation of bullets, enemies and particles
pub struct Updater {
    /// A random number generator
    current_time: f64,
}

impl Updater {
    pub fn new() -> Updater {
        Updater { current_time: 0.0 }
    }

    /// Updates the game
    ///
    /// `dt` is the amount of seconds that have passed since the last update
    pub fn update(&mut self, dt: f64, state: &mut GameState) {
        self.current_time += dt;

        for player in &mut state.world.players {
            player.update(dt, &mut state.world.bombs);
        }

        // Update bombs
        for bomb in &mut state.world.bombs {
            bomb.update(dt, &mut state.world.fires);
        }

        // Remove old bombs
        state.world.bombs.retain(|bomb| bomb.ttl > 0.0);
    }
}
