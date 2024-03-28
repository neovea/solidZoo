import IFeedable from "./interfaces/IFeedable";
import IPlayable from "./interfaces/IPlayable";
import Animal from "./Animal";

class Lion extends Animal implements IFeedable, IPlayable {
  constructor(name: string) {
    super(name);
  }

  feed() {
    super.feed();
    console.log(`${this.name} the lion has been fed.`);
  }

  play() {
    console.log(`${this.name} the lion is playing.`);
  }
}

export default Lion;
