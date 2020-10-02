use crate::controllers::Actions;
use crate::models::{Player, World};

use pcg_rand::Pcg32Basic;
use rand::SeedableRng;

pub struct GameState {
    pub world: World,
}

impl GameState {
    pub fn new(width: f64, height: f64) -> GameState {
        let mut rng = Pcg32Basic::from_seed([2, 42]);
        GameState {
            world: World::new(&mut rng, width, height),
        }
    }

    pub fn update(&mut self, time: f64, actions: &Actions) {
        self.world
            .player
            .update(time, actions, self.world.width, self.world.height);
    }
}
