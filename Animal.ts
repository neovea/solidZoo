class Animal extends IAnimal {
  constructor(name) {
    super();
    this.name = name;
    this.fed = false;
  }

  feed() {
    this.fed = true;
    console.log(`${this.name} has been fed.`);
  }
}

export default Animal;
