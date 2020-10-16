use crate::models::Player;
use crate::models::Wall;

const SPEED: f64 = 200.0;

pub struct World {
    pub players: Vec<Player>,
    pub walls: Vec<Wall>,
    pub width: f64,
    pub height: f64,
}

impl World {
    pub fn new(width: f64, height: f64) -> World {
        let mut wall = vec![];
        for i in 1..14 {
            if i == 1 || i == 13 {
                for j in 1..16 {
                    wall.push(Wall::new(j as f64 * 40.0 - 20.0, i as f64 * 40.0 - 20.0));
                }
            } else if i % 2 == 0 {
                wall.push(Wall::new(20.0, i as f64 * 40.0 - 20.0));
                wall.push(Wall::new(width - 20.0, i as f64 * 40.0 - 20.0));
            } else if i % 2 != 0 {
                for j in 1..9 {
                    wall.push(Wall::new(j as f64 * 80.0 - 60.0, i as f64 * 40.0 - 20.0));
                }
            }
        }
        World {
            players: vec![
                Player::new(0, width - 60.0, height - 60.0, SPEED),
                Player::new(1, 60.0, 60.0, SPEED),
            ],
            walls: wall,
            width: width,
            height: height,
        }
    }
}
