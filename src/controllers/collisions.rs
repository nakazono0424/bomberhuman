use crate::game_state::GameState;

const GRID: f64 = 40.0;

pub struct CollisionsController;

impl CollisionsController {
    pub fn collisions(state: &mut GameState) {
        let players = &mut state.world.players;
        let walls = &state.world.walls;

        for player in players {
            for wall in walls {
                let x_distance = player.x() - wall.x();
                let y_distance = player.y() - wall.y();
                if x_distance < GRID && x_distance >= 0.0 {
                    if y_distance < GRID && y_distance >= 0.0 {
                        if x_distance.abs() > y_distance.abs() {
                            *player.x_mut() = wall.x() + GRID;
                        } else {
                            *player.y_mut() = wall.y() + GRID;
                        }
                    } else if y_distance < 0.0 && y_distance > -GRID {
                        if x_distance.abs() > y_distance.abs() {
                            *player.x_mut() = wall.x() + GRID;
                        } else {
                            *player.y_mut() = wall.y() - GRID;
                        }
                    }
                } else if x_distance < 0.0 && x_distance > -GRID {
                    if y_distance < GRID && y_distance >= 0.0 {
                        if x_distance.abs() > y_distance.abs() {
                            *player.x_mut() = wall.x() - GRID;
                        } else {
                            *player.y_mut() = wall.y() + GRID;
                        }
                    } else if y_distance < 0.0 && y_distance > -GRID {
                        if x_distance.abs() > y_distance.abs() {
                            *player.x_mut() = wall.x() - GRID;
                        } else {
                            *player.y_mut() = wall.y() - GRID;
                        }
                    }
                }
            }
        }
    }
}
