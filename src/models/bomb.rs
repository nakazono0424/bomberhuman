use crate::geometry::Point;
use crate::models::Fire;
use crate::models::Wall;
use std::f64;

#[derive(Default)]
pub struct Bomb {
    pub player_id: i32,
    pub position: Point,
    pub ttl: f64,
    pub fire_num: i32,
    pub on_player: bool,
}

impl Bomb {
    // Player の座標に bomb
    pub fn new(pid: i32, player_x: f64, player_y: f64) -> Bomb {
        Bomb {
            player_id: pid,
            position: Point::new(player_x, player_y),
            ttl: 3.0,
            on_player: true,
            fire_num: 3,
        }
    }

    pub fn update(&mut self, dt: f64, fires: &mut Vec<Fire>, walls: &Vec<Wall>) {
        self.ttl -= dt;
        if self.ttl < 0.0 {
            self.fire_generate(fires, walls);
        }
    }

    fn fire_generate(&mut self, fires: &mut Vec<Fire>, walls: &Vec<Wall>) {
        let mut counter: i32 = 0;
        let mut x = self.x();
        let mut y = self.y();
        loop {
            fires.push(Fire::new(x, y));
            x += 40.0;
            counter += 1;
            if counter == self.fire_num || !self.check_putable(walls, x, y) {
                counter = 0;
                x = self.x();
                y = self.y();
                break;
            }
        }
        loop {
            fires.push(Fire::new(x, y));
            x -= 40.0;
            counter += 1;
            if counter == self.fire_num || !self.check_putable(walls, x, y) {
                counter = 0;
                x = self.x();
                y = self.y();
                break;
            }
        }
        loop {
            fires.push(Fire::new(x, y));
            y += 40.0;
            counter += 1;
            if counter == self.fire_num || !self.check_putable(walls, x, y) {
                counter = 0;
                x = self.x();
                y = self.y();
                break;
            }
        }
        loop {
            fires.push(Fire::new(x, y));
            y -= 40.0;
            counter += 1;
            if counter == self.fire_num || !self.check_putable(walls, x, y) {
                break;
            }
        }
    }

    pub fn check_putable(&mut self, walls: &Vec<Wall>, x: f64, y: f64) -> bool {
        if walls.iter().any(|wall| wall.x() == x && wall.y() == y) {
            false
        } else {
            true
        }
    }

    pub fn x(&self) -> f64 {
        self.position.x
    }

    pub fn y(&self) -> f64 {
        self.position.y
    }
}
