class Paths {
  constructor() {
    this.models = "source/ai/models/";
    this.data = "source/ai/data/";
    this.weights = "source/ai/weights/";
  }

  getModelPath(name) {
    return `${this.models}${name}.json`;
  }

  getDataPath(name) {
    return `${this.data}${name}.json`;
  }
}

export default Paths;
