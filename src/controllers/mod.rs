//! This module contains the game logic
//!
//! There are three main controllers: collisions, input and time

mod collisions;
mod input;

pub use self::collisions::CollisionsController;
pub use self::input::Actions;
