use crate::controllers::Actions;
use crate::geometry::Point;
use std::f64;

#[derive(Default)]
pub struct Player {
    pub id: i32,
    pub position: Point,
    pub actions: Actions,
    pub speed: f64,
}

impl Player {
    // 特定の座標に Player
    pub fn new(id: i32, x: f64, y: f64, init_speed: f64) -> Player {
        Player {
            id: id,
            position: Point::new(x, y),
            actions: Actions::default(),
            speed: init_speed,
        }
    }

    // キー入力があった場合移動
    pub fn update(&mut self, dt: f64) {
        // y座標に -dt*speed
        if self.actions.move_up {
            *self.y_mut() -= dt * self.speed;
        }

        // y座標に +dt*speed
        if self.actions.move_down {
            *self.y_mut() += dt * self.speed;
        }

        // x座標に +dt*speed
        if self.actions.move_right {
            *self.x_mut() += dt * self.speed;
        }

        // x座標に -dt*speed
        if self.actions.move_left {
            *self.x_mut() -= dt * self.speed;
        }
    }

    pub fn x(&self) -> f64 {
        self.position.x
    }

    pub fn x_mut(&mut self) -> &mut f64 {
        &mut self.position.x
    }

    pub fn y(&self) -> f64 {
        self.position.y
    }

    pub fn y_mut(&mut self) -> &mut f64 {
        &mut self.position.y
    }
}
