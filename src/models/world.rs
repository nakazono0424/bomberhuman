use crate::models::Player;

pub struct World {
    pub player1: Player,
    pub player2: Player,
    pub width: f64,
    pub height: f64,
}

impl World {
    pub fn new(width: f64, height: f64) -> World {
        World {
            player1: Player::new(width - 20.0, height - 20.0),
            player2: Player::new(20.0, 20.0),
            width: width,
            height: height,
        }
    }
}
