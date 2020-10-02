use crate::models::Player;
use rand::Rng;

pub struct World {
    pub player: Player,
    pub width: f64,
    pub height: f64,
}

impl World {
    pub fn new<R: Rng>(rng: &mut R, width: f64, height: f64) -> World {
        World {
            player: Player::random(rng, width, height),
            width: width,
            height: height,
        }
    }
}
