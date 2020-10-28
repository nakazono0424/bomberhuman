use crate::geometry::Point;

pub struct SoftBlock {
    position: Point,
}

impl SoftBlock {
    pub fn new(x: f64, y: f64) -> SoftBlock {
        SoftBlock {
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
