use crate::controllers::Actions;
use crate::models::World;

pub struct GameState {
    pub world: World,
}

impl GameState {
    pub fn new(width: f64, height: f64) -> GameState {
        GameState {
            world: World::new(width, height),
        }
    }

    pub fn update(&mut self, time: f64, actions: &Actions) {
        self.world
            .player
            .update(time, actions, self.world.width, self.world.height);
    }
}
