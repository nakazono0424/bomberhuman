use crate::controllers::Actions;
use crate::geometry::Point;
use crate::models::Bomb;
use std::f64;

#[derive(Default)]
pub struct Player {
    pub id: i32,
    pub position: Point,
    pub actions: Actions,
    pub speed: f64,
    pub bombs_limit: i32,
}

impl Player {
    // 特定の座標に Player
    pub fn new(id: i32, x: f64, y: f64, init_speed: f64) -> Player {
        Player {
            id: id,
            position: Point::new(x, y),
            actions: Actions::default(),
            speed: init_speed,
            bombs_limit: 3,
        }
    }

    // キー入力があった場合移動
    pub fn update(&mut self, dt: f64, bombs: &mut Vec<Bomb>) {
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

        if self.actions.put_bomb {
            let sum: i32 = bombs.iter().fold(0, |acc, bomb| {
                if bomb.player_id == self.id {
                    acc + 1
                } else {
                    acc
                }
            });
            if sum < self.bombs_limit && self.check_putable(&bombs) {
                bombs.push(Bomb::new(self.id, self.grid_x(), self.grid_y()));
            }
        }
    }

    pub fn check_putable(&mut self, bombs: &Vec<Bomb>) -> bool {
        if bombs
            .iter()
            .any(|bomb| bomb.x() == self.grid_x() && bomb.y() == self.grid_y())
        {
            false
        } else {
            true
        }
    }

    pub fn x(&self) -> f64 {
        self.position.x
    }

    pub fn x_mut(&mut self) -> &mut f64 {
        &mut self.position.x
    }

    pub fn grid_x(&self) -> f64 {
        ((self.position.x as i32 / 40) * 40 + 20) as f64
    }

    pub fn y(&self) -> f64 {
        self.position.y
    }

    pub fn y_mut(&mut self) -> &mut f64 {
        &mut self.position.y
    }

    pub fn grid_y(&self) -> f64 {
        ((self.position.y as i32 / 40) * 40 + 20) as f64
    }
}
