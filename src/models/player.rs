use crate::controllers::Actions;
use crate::geometry::Point;
use rand::Rng;
use std::f64;

const ADVANCE_SPEED: f64 = 200.0;

pub struct Player {
    pub position: Point,
}

impl Player {
    /// Create a new `Player` with a random position and direction
    pub fn random<R: Rng>(rng: &mut R, width: f64, height: f64) -> Player {
        Player {
            position: Point::random(rng, width, height),
        }
    }

    // キー入力があった場合移動
    pub fn update(&mut self, dt: f64, actions: &Actions, width: f64, height: f64) {
        let speed = ADVANCE_SPEED;

        fn wrap(k: &mut f64, bound: f64) {
            if *k < 0.0 {
                *k += bound;
            } else if *k >= bound {
                *k -= bound;
            }
        }

        // y座標に dt*speed 追加
        if actions.move_up {
            *self.y_mut() -= dt * speed;
            wrap(self.y_mut(), height);
        }

        // y座標に -dt*speed 追加
        if actions.move_down {
            *self.y_mut() += dt * speed;
            wrap(self.y_mut(), height);
        }

        // x座標に dt*speed 追加
        if actions.move_right {
            *self.x_mut() += dt * speed;
            wrap(self.x_mut(), width);
        }

        // x座標に -dt*speed 追加
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
