async function main() {
  //Engine class
  class Engine {
    constructor(cylinderCount) {
      this.cylinderCount = cylinderCount;
      this.isRunning = false;
    }

    get cylinderCount() {
      return this._cylinderCount;
    }

    get isRunning() {
      return this._isRunning;
    }

    set cylinderCount(value) {
      if (!value || typeof value !== "number") {
        output("Invalid cylinder count");
      }
      else {
        this._cylinderCount = value;
      }
    }

    set isRunning(value) {
      if (!value || typeof value !== "boolean") {
        output("Invalid entry");
      }
      else {
        this._isRunning = value;    
      }
    }

    start() {
      this.running = true;
    }

    stop() {
      this.running = false;
    }
  }
  
  //Car class, parameters (make, model, and year), properties (make, model, year, odometer, and engine)
  class Car {
    constructor(make, model, year, odometer, engine) {
      this.make = make || "Generic";
      this.model = model || "Generic";
      this.year = year || "Unknown";
      this.odometer = odometer;
      this.engine = engine;
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
      if (!value || typeof value !== "number" || value < 0) {
        output("Invalid odometer value provided.");
      }
      else {
        this._odometer = value;
      }
    }

    //method 1 
    startEngine() {
      this.engine.start();
      output("Engine turned on.");
    }

    //method 2
    stopEngine() {
      this.engine.stop();
      output("Engine turned off.")
    }

    //method 3
    drive(int) {
      //let distance = int;
      if (int < 0 || typeof int !== "number") {
        output("Invalid value for distance driven.");
      }
      else {
        this.odometer = this.odometer + int;
        output(`Drove ${int} km.`)
      }
    }
  }

  //Instantiate
  let myEngine = new Engine(4);
  

  //JSON
}
