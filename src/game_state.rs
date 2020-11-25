use crate::models::World;

pub struct GameState {
    pub world: World,
    pub status: bool,
}

impl GameState {
    pub fn new(width: f64, height: f64, num_of_player: i32) -> GameState {
        GameState {
            world: World::new(width, height, num_of_player),
            status: true,
        }
    }
}
