use crate::controllers::Actions;
use crate::geometry::Point;
use std::f64;

const ADVANCE_SPEED: f64 = 400.0;
const PLAYER_RADIUS: f64 = 20.0;

#[derive(Default)]
pub struct Player {
    pub position: Point,
}

impl Player {
    // 特定の座標に Player
    pub fn new(width: f64, height: f64) -> Player {
        Player {
            position: Point::new(width, height),
        }
    }

    // キー入力があった場合移動
    pub fn update(&mut self, dt: f64, actions: &Actions, width: f64, height: f64) {
        let speed = ADVANCE_SPEED;

        // 外枠と衝突したら停止
        fn wrap(k: &mut f64, bound: f64) {
            if *k - PLAYER_RADIUS < 0.0 {
                *k = PLAYER_RADIUS;
            } else if *k + PLAYER_RADIUS > bound {
                *k = bound - PLAYER_RADIUS;
            }
        }

        // y座標に -dt*speed
        if actions.move_up {
            *self.y_mut() -= dt * speed;
            wrap(self.y_mut(), height);
        }

        // y座標に +dt*speed
        if actions.move_down {
            *self.y_mut() += dt * speed;
            wrap(self.y_mut(), height);
        }

        // x座標に +dt*speed
        if actions.move_right {
            *self.x_mut() += dt * speed;
            wrap(self.x_mut(), width);
        }

        // x座標に -dt*speed
        if actions.move_left {
            *self.x_mut() -= dt * speed;
            wrap(self.x_mut(), width);
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
