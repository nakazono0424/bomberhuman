use crate::geometry::Point;
use std::f64;

pub struct Fire {
    pub player_id: i32,
    pub position: Point,
    pub ttl: f64,
    pub condition: i32,
}

impl Fire {
    pub fn new(pid: i32, x: f64, y: f64) -> Fire {
        Fire {
            player_id: pid,
            position: Point::new(x, y),
            ttl: 0.5,
            condition: 0,
        }
    }

    pub fn update(&mut self, dt: f64) {
        self.ttl -= dt;
        if self.ttl < 0.4 {
            self.condition = 1;
        }
        if self.ttl < 0.3 {
            self.condition = 2;
        }
        if self.ttl < 0.2 {
            self.condition = 3;
        }
        if self.ttl < 0.1 {
            self.condition = 4;
        }
    }

    pub fn x(&self) -> f64 {
        self.position.x
    }

    pub fn y(&self) -> f64 {
        self.position.y
    }
}
