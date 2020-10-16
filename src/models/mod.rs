// macro_use needs to go first so the macro is visible for the other modules
mod player;
mod wall;
mod world;

pub use self::player::Player;
pub use self::wall::Wall;
pub use self::world::World;
