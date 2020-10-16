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

    pub fn update(&mut self, time: f64) {
        for player in &mut self.world.players {
            player.update(time);
        }
    }
}
