use std::f64;

use crate::game_state::GameState;

pub struct Updater;

impl Updater {
    /// Updates the game
    ///
    /// `dt` is the amount of seconds that have passed since the last update
    pub fn update(dt: f64, state: &mut GameState) {
        if state.world.time < 0.0 || !state.status {
            state.status = false;
            return;
        }

        // Update time
        if state.world.time > 0.0 {
            state.world.time -= dt;
        }

        // Update players
        for player in &mut state.world.players {
            player.update(dt, &mut state.world.bombs);
        }

        // Update bombs
        for bomb in &mut state.world.bombs {
            bomb.update(
                dt,
                &mut state.world.fires,
                &state.world.walls,
                &state.world.sblocks,
                &mut state.world.items,
            );
        }

        //Update fire
        for fire in &mut state.world.fires {
            fire.update(dt);
        }

        // Remove old bombs
        state.world.bombs.retain(|bomb| bomb.ttl > 0.0);

        // Remove old fires
        state.world.fires.retain(|fire| fire.ttl > 0.0);
    }
}
