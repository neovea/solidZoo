# SOLID Improvements

Base on the source code, implement improvements toward SOLID Principles.
Basically make the code SOLID.

## Improvements Made

- SRP: Each class has a unique responsibility: Animal and its subclasses define
  animals and their feeding behavior, while ZooGame manages the game itself.
- OCP: It's now easy to add new animal types without changing ZooGame's existing
  logic. Just create a new class for the animal.
- LSP: Animal subclasses can be used interchangeably in the game.
- DIP: Although in this simple case the DIP principle is not fully exploited,
  the structure is in place to depend more on abstractions (for example, by
  introducing an interface or an abstract class for specific animal behaviors).

This release provides a solid foundation for cleaner code that is easy to extend
and maintain, while making the game more flexible for adding new features.
