class IAnimal {
  constructor() {
    if (new.target === IAnimal) {
      throw new TypeError(
        "Cannot construct instances of abstract class IAnimal directly.",
      );
    }
  }

  feed() {
    throw new Error("Method 'feed()' must be implemented.");
  }
}

export default IAnimal;
