class IFeedable {
  feed() {
    throw new Error("Method 'feed()' must be implemented.");
  }
}

export default IFeedable;
