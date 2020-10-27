//! This module contains the game logic
//!
//! There are three main controllers: collisions, input and time

mod collisions;
mod input;
mod updater;

pub use self::collisions::CollisionsController;
pub use self::input::Actions;
pub use self::updater::Updater;
