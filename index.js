class ZooGame {
  constructor() {
    this.animals = [];
  }

  addAnimal(animalType, name) {
    if (animalType === "lion") {
      this.animals.push({ type: "lion", name: name, fed: false });
    } else if (animalType === "elephant") {
      this.animals.push({ type: "elephant", name: name, fed: false });
    }
  }

  feedAnimal(name) {
    this.animals.forEach((animal) => {
      if (animal.name === name) {
        animal.fed = true;
        console.log(`${animal.name} the ${animal.type} has been fed.`);
      }
    });
  }
}

// Utilisation
const myZoo = new ZooGame();
myZoo.addAnimal("lion", "Leo");
myZoo.feedAnimal("Leo");
