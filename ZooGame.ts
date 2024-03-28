import Animal from "./Animal";

class ZooGame {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  feedAnimal(name: string) {
    this.animals.forEach((animal) => {
      if (animal.name === name && animal.feed) {
        animal.feed();
      }
    });
  }

  playWithAnimal(name: string) {
    this.animals.forEach((animal) => {
      if (animal.name === name && animal.play) {
        animal.play();
      }
    });
  }

  makeAnimalPerform(name: string) {
    this.animals.forEach((animal) => {
      if (animal.name === name && animal.perform) {
        animal.perform();
      }
    });
  }
}

export default ZooGame;
