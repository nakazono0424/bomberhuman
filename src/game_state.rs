use crate::models::World;

pub struct GameState {
    pub world: World,
    pub status: bool,
}

impl GameState {
    pub fn new(width: f64, height: f64) -> GameState {
        GameState {
            world: World::new(width, height),
            status: true,
        }
    }
}
