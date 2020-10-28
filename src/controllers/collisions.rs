use crate::game_state::GameState;

pub struct CollisionsController;

impl CollisionsController {
    pub fn collisions(state: &mut GameState) {
        let players = &mut state.world.players;
        let fires = &state.world.fires;
        let walls = &state.world.walls;
        let bombs = &mut state.world.bombs;
        let sblocks = &state.world.sblocks;

        // Player の衝突判定
        for player in players {
            for fire in fires {
                let px = player.x();
                let py = player.y();
                let pr = 20.0;
                let fx = fire.x();
                let fy = fire.y();
                if (fx > px - 50.0) && (fx < px + 50.0) &&
                    (fy > py - 50.0) && (fy < py + 50.0){
                    let dist_x = px - fx;
                    let dist_y = py - fy;
                    let dist = (dist_x*dist_x + dist_y*dist_y).sqrt();
                    if dist < pr + 15.0{
                        *player.x_mut() = -20.0;
                        *player.y_mut() = -20.0;
                    }
                }
            }
            for bomb in &mut *bombs {
                let px = player.x();
                let py = player.y();
                let pr = 20.0;
                let bx = bomb.x();
                let by = bomb.y();
                if (bx > px - 50.0) && (bx < px + 50.0) &&
                    (by > py - 50.0) && (by < py + 50.0){
                    let dist_x = px - bx;
                    let dist_y = py - by;
                    let mut dist = (dist_x*dist_x + dist_y*dist_y).sqrt();
                    if dist < pr + 20.0{
                        if bomb.on_player && player.id == bomb.player_id{
                            bomb.on_player = true;
                        }else{
                            if dist == 0.0{
                                dist = 1.01;
                            }
                            let mv_x = dist_x * (pr + 20.0 - dist) / dist;
                            let mv_y = dist_y * (pr + 20.0 - dist) / dist;
                            *player.x_mut() = px + mv_x;
                            *player.y_mut() = py + mv_y;
                        }
                    }else{
                        if bomb.on_player {
                            if player.id == bomb.player_id{
                                bomb.on_player = false;
                            }
                        }
                    }
                }
            }
            // Wall との衝突判定
            for wall in walls {
                let px = player.x();
                let py = player.y();
                let pr = 20.0;
                let rx = wall.x();
                let ry = wall.y();
                let rr = 20.0;
                if (rx > px - 50.0) && (rx < px + 50.0) && (ry > py - 50.0) && (ry < py + 50.0) {
                    let mut test_x = px;
                    let mut test_y = py;
                    if px < rx - rr {
                        test_x = rx - rr;
                    } else if px > rx + rr {
                        test_x = rx + rr;
                    }
                    if py < ry - rr {
                        test_y = ry - rr;
                    } else if py > ry + rr {
                        test_y = ry + rr;
                    }
                    let dist_x = px - test_x;
                    let dist_y = py - test_y;
                    let mut dist = (dist_x*dist_x + dist_y*dist_y).sqrt();
                    if dist <= pr{
                        if dist == 0.0{
                            dist = 1.01;
                        }
                        let mv_dist_x = dist_x*(pr - dist) / dist;
                        let mv_dist_y = dist_y*(pr - dist) / dist;
                        *player.x_mut() = px + mv_dist_x;
                        *player.y_mut() = py + mv_dist_y;
                    }
                }
            }
            // Wall との衝突判定
            for sblock in sblocks {
                let px = player.x();
                let py = player.y();
                let pr = 20.0;
                let rx = sblock.x();
                let ry = sblock.y();
                let rr = 20.0;
                if (rx > px - 50.0) && (rx < px + 50.0) && (ry > py - 50.0) && (ry < py + 50.0) {
                    let mut test_x = px;
                    let mut test_y = py;
                    if px < rx - rr {
                        test_x = rx - rr;
                    } else if px > rx + rr {
                        test_x = rx + rr;
                    }
                    if py < ry - rr {
                        test_y = ry - rr;
                    } else if py > ry + rr {
                        test_y = ry + rr;
                    }
                    let dist_x = px - test_x;
                    let dist_y = py - test_y;
                    let dist = (dist_x * dist_x + dist_y * dist_y).sqrt();
                    if dist <= pr {
                        let mv_dist_x = dist_x * (pr - dist) / dist;
                        let mv_dist_y = dist_y * (pr - dist) / dist;
                        *player.x_mut() = px + mv_dist_x;
                        *player.y_mut() = py + mv_dist_y;
                    }
                }
            }
        }
        let sblocks = &mut state.world.sblocks;
        for fire in fires {
            for bomb in &mut *bombs {
                if fire.x() == bomb.x() && fire.y() == bomb.y() {
                    bomb.ttl = 0.0;
                }
            }

            if let Some((index, position_x, position_y)) = sblocks
                .iter()
                .enumerate()
                .find(|&(_, sblock)| sblock.x() == fire.x() && sblock.y() == fire.y())
                .map(|(index, sblock)| (index, sblock.x(), sblock.y()))
            {
                sblocks.remove(index);
            }
        }
    }
}
