use crate::geometry::Point;
use std::f64;

#[derive(Default)]
pub struct Item {
    pub item_id: i32,
    pub position: Point,
}

impl Item {
    // SoftBlock の座標に Item
    pub fn new(x: f64, y: f64, id: i32) -> Item {
        Item {
            position: Point::new(x, y),
            item_id: id,
        }
    }

    pub fn x(&self) -> f64 {
        self.position.x
    }

    pub fn y(&self) -> f64 {
        self.position.y
    }
}
