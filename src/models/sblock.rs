use crate::geometry::Point;

pub struct SoftBlock {
    pub position: Point,
    pub item_id: i32,
}

impl SoftBlock {
    pub fn new(x: f64, y: f64, item_id: i32) -> SoftBlock {
        SoftBlock {
            position: Point::new(x, y),
            item_id: item_id,
        }
    }

    pub fn x(&self) -> f64 {
        self.position.x
    }

    pub fn y(&self) -> f64 {
        self.position.y
    }
}
