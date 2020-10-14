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
        self.world
            .player1
            .update(time, self.world.width, self.world.height);
        self.world
            .player2
            .update(time, self.world.width, self.world.height);
    }
}
