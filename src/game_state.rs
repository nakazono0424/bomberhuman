use crate::models::World;

pub struct GameState {
    pub world: World,
}

impl GameState {
    pub fn new(width: f64, height: f64) -> GameState {
        GameState {
            world: World::new(width, height),
        }
    }

    pub fn update(&mut self, time: f64) {
        self.world
            .player1
            .update(time, self.world.width, self.world.height);
        self.world
            .player2
            .update(time, self.world.width, self.world.height);
        self.collisions();
    }

    pub fn collisions(&mut self) {
        let x_distance: f64 = self.world.player1.x() - self.world.player2.x();
        let y_distance: f64 = self.world.player1.y() - self.world.player2.y();
        if (x_distance * x_distance + y_distance * y_distance) < 40.0 * 40.0 {
            self.reset();
        }
    }

    pub fn reset(&mut self) {
        // Reset player position
        *self.world.player1.x_mut() = self.world.width - 20.0;
        *self.world.player1.y_mut() = self.world.height - 20.0;

        *self.world.player2.x_mut() = 20.0;
        *self.world.player2.y_mut() = 20.0;
    }
}
