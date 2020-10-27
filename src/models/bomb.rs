use crate::geometry::Point;
use crate::models::Fire;
use std::f64;

#[derive(Default)]
pub struct Bomb {
    pub player_id: i32,
    pub position: Point,
    pub ttl: f64,
    pub fire_num: i32,
}

impl Bomb {
    // Player の座標に bomb
    pub fn new(pid: i32, player_x: f64, player_y: f64) -> Bomb {
        Bomb {
            player_id: pid,
            position: Point::new(player_x, player_y),
            ttl: 3.0,
            fire_num: 1,
        }
    }

    pub fn update(&mut self, dt: f64, fires: &mut Vec<Fire>) {
        self.ttl -= dt;
        if self.ttl < 0.0 {
            fires.push(Fire::new(self.x(), self.y(), self.fire_num));
        }
    }

    pub fn x(&self) -> f64 {
        self.position.x
    }

    pub fn y(&self) -> f64 {
        self.position.y
    }
}
