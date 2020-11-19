use crate::geometry::Point;
use crate::models::{Fire, Item, SoftBlock, Wall};
use std::f64;

const GRID: f64 = 40.0;

#[derive(Default)]
pub struct Bomb {
    pub player_id: i32,
    pub position: Point,
    pub ttl: f64,
    pub condition: i32,
    pub on_player: bool,
    pub fire_num: i32,
}

impl Bomb {
    // Player の座標に bomb
    pub fn new(pid: i32, player_x: f64, player_y: f64, fire: i32) -> Bomb {
        Bomb {
            player_id: pid,
            position: Point::new(player_x, player_y),
            ttl: 3.0,
            condition: 0,
            on_player: true,
            fire_num: fire,
        }
    }

    pub fn update(
        &mut self,
        dt: f64,
        fires: &mut Vec<Fire>,
        walls: &Vec<Wall>,
        sblocks: &Vec<SoftBlock>,
        items: &mut Vec<Item>,
    ) {
        self.ttl -= dt;
        if self.ttl < 2.0 {
            self.condition = 1;
        }
        if self.ttl < 1.5 {
            self.condition = 2;
        }
        if self.ttl < 1.0 {
            self.condition = 3;
        }
        if self.ttl < 0.5 {
            self.condition = 4;
        }
        if self.ttl < 0.0 {
            self.fire_generate(fires, walls, sblocks, items);
        }
    }

    fn fire_generate(
        &mut self,
        fires: &mut Vec<Fire>,
        walls: &Vec<Wall>,
        sblocks: &Vec<SoftBlock>,
        items: &mut Vec<Item>,
    ) {
        let mut counter: i32 = 0;
        let mut x = self.x();
        let mut y = self.y();
        fires.push(Fire::new(self.player_id, x, y));
        for i in 0..4 {
            loop {
                if i == 0 {
                    x += GRID;
                } else if i == 1 {
                    x -= GRID;
                } else if i == 2 {
                    y += GRID;
                } else if i == 3 {
                    y -= GRID;
                }
                if self.check_walls(walls, x, y) {
                    counter = 0;
                    x = self.x();
                    y = self.y();
                    break;
                }
                fires.push(Fire::new(self.player_id, x, y));
                counter += 1;
                if self.check_sblocks(sblocks, x, y)
                    || self.check_items(items, x, y)
                    || counter == self.fire_num
                {
                    items.retain(|item| item.x() != x || item.y() != y);
                    counter = 0;
                    x = self.x();
                    y = self.y();
                    break;
                }
            }
        }
    }

    pub fn check_walls(&mut self, walls: &Vec<Wall>, x: f64, y: f64) -> bool {
        if walls.iter().any(|wall| wall.x() == x && wall.y() == y) {
            true
        } else {
            false
        }
    }

    pub fn check_items(&mut self, items: &Vec<Item>, x: f64, y: f64) -> bool {
        if items.iter().any(|item| item.x() == x && item.y() == y) {
            true
        } else {
            false
        }
    }

    pub fn check_sblocks(&mut self, sblocks: &Vec<SoftBlock>, x: f64, y: f64) -> bool {
        if sblocks
            .iter()
            .any(|sblock| sblock.x() == x && sblock.y() == y)
        {
            true
        } else {
            false
        }
    }

    pub fn x(&self) -> f64 {
        self.position.x
    }

    pub fn y(&self) -> f64 {
        self.position.y
    }
}
