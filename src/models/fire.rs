use crate::geometry::Point;
use std::f64;
use std::i32;

pub struct Fire {
    pub position: Point,
    pub ttl: f64,
}

impl Fire {
    pub fn new(x: f64, y: f64) -> Fire {
        Fire {
            position: Point::new(x, y),
            ttl: 2.0,
        }
    }

    pub fn update(&mut self, dt: f64) {
        self.ttl -= dt;
    }

    pub fn x(&self) -> f64 {
        self.position.x
    }

    pub fn y(&self) -> f64 {
        self.position.y
    }
}
