use crate::models::Player;

pub struct World {
    pub player: Player,
    pub width: f64,
    pub height: f64,
}

impl World {
    pub fn new(width: f64, height: f64) -> World {
        World {
            player: Player::new(20.0, 20.0),
            width: width,
            height: height,
        }
    }
}
