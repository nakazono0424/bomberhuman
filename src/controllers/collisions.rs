use crate::game_state::GameState;

const GRID: f64 = 40.0;

pub struct CollisionsController;

impl CollisionsController {
    pub fn collisions(state: &mut GameState) {
        let players = &mut state.world.players;
        let walls = &state.world.walls;

        for player in players {
            for wall in walls {
                let px = player.x();
                let py = player.y();
                let pr = 20.0;
                let rx = wall.x();
                let ry = wall.y();
                let rr = 20.0;
                let mut test_x = px;
                let mut test_y = py;
                if px < rx - rr {
                    test_x = rx - rr;
                }else if px > rx + rr{
                    test_x =rx + rr;
                }
                if py < ry - rr{
                    test_y = ry - rr;
                }else if py > ry + rr{
                    test_y = ry + rr;
                }
                let dist_x = px - test_x;
                let dist_y = py - test_y;
                let dist = (dist_x*dist_x + dist_y*dist_y).sqrt();
                if dist <= pr{
                    let mv_dist_x = dist_x*(pr - dist) / dist;
                    let mv_dist_y = dist_y*(pr - dist) / dist;
                    *player.x_mut() = px + mv_dist_x;
                    *player.y_mut() = py + mv_dist_y;
                }
            }
        }
    }
}
