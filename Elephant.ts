import Animal from "./Animal";
import IFeedable from "./interfaces/IFeedable";
import IPerformer from "./interfaces/IPerformer";

class Elephant extends Animal implements IFeedable, IPerformer {
  constructor(name) {
    super(name);
  }

  feed() {
    super.feed();
    console.log(`${this.name} the elephant has been fed.`);
  }

  perform() {
    console.log(`${this.name} the elephant is performing.`);
  }
}

export default Elephant;
