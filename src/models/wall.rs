use crate::geometry::Point;

pub struct Wall {
    position: Point,
}

impl Wall {
    pub fn new(x: f64, y: f64) -> Wall {
        Wall {
            position: Point::new(x, y),
        }
    }

    pub fn x(&self) -> f64 {
        self.position.x
    }

    pub fn y(&self) -> f64 {
        self.position.y
    }
}
