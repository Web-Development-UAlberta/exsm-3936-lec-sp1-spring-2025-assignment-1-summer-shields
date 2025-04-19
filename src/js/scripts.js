async function main() {
  //Car class, parameters (make, model, and year), properties (make, model, year, odometer, and engine)
  class Car {
    constructor(make, model, year) {
      this.make = make || "Generic";
      this.model = model || "Generic";
      this.year = year || "Unknown";
      this.odometer = 0;
      this.engine = false;
    }

    //getters and setters
    get make() {
      return this._make;
    }
    
    get model() {
      return this._model;
    }

    get year() {
      return this._year;
    }

    get odometer() {
      return this._odometer;
    }
    
    set make(value) {
      if (!value || typeof value !== "string") {
        output("Invalid make provided. Defaulting to 'Generic'.");
        this._make = "Generic";
      }
      else {
        this._make = value;
      }
    }

    set model(value) {
      if (!value || typeof value !== "string") {
        output("Invalid model provided. Defaulting to 'Generic'.");
        this._model = "Generic";
      }
      else {
        this._model = value;
      }
    }

    set year(value) {
      if (!value || typeof value !== "number" || value < 1900 || value > 2026) {
        output("Invalid year provided. Defaulting to 'Unknown'.");
      }
      else {
        this._year = value;
      }
    }

    set odometer(value) {
      if (!value || typeof value !== "number") {
        output("Invalid odometer value provided.");
      }
      else {
        this._odometer = value;
      }
    }

    //method 1 
    startEngine() {
      engine = true;
    }

    //method 2
    stopEngine() {
      engine = false;
    }

    //method 3
    drive(int) {

    }
  }

  class Engine {
    constructor() {
      this.cylinderCount = 0;
      this.isRunning = false;
    }
  }
  

  //Instantiate
  let myEngine = new Engine()

  //JSON
}
