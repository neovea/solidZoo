class ZooGame {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  feedAnimal(name) {
    this.animals.forEach((animal) => {
      if (animal.name === name && animal.feed) {
        animal.feed();
      }
    });
  }

  playWithAnimal(name) {
    this.animals.forEach((animal) => {
      if (animal.name === name && animal.play) {
        animal.play();
      }
    });
  }

  makeAnimalPerform(name) {
    this.animals.forEach((animal) => {
      if (animal.name === name && animal.perform) {
        animal.perform();
      }
    });
  }
}

export default ZooGame;
