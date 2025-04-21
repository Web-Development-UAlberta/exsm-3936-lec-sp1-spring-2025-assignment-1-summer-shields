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
      if (typeof value !== "number") {
        output("Invalid cylinder count");
      }
      else {
        this._cylinderCount = value;
      }
    }

    set isRunning(value) {
      if (typeof value !== "boolean") {
        output("Invalid entry. Car status can be set to running (true) or not running (false)");
      }
      else {
        this._isRunning = value;    
      }
    }

    start() {
      this.isRunning = true;
    }

    stop() {
      this.isRunning = false;
    }
  }

  //Transmission class
  class Transmission {
    constructor(manualAutomatic, gearCount) {
      this.manualAutomatic = manualAutomatic || "Automatic";
      this.gearCount = gearCount || "Park";
    }

    setGear(newGear) {
      newGear = String(newGear);
      if (this.manualAutomatic == "Automatic") {
        const validGears = ["Park", "Neutral", "Reverse", "Drive"];
        if (!validGears.includes(newGear)) {
          output("Invalid gear entered.");
        }
      } 
      else if (this.manualAutomatic == "Manual") {
        const validGears = ["Park", "Neutral", "Reverse", "1", "2", "3", "4", "5", "6"];
        if (!validGears.includes(newGear)) {
          output("Invalid gear entered.");
        }
      }
      this.gearCount = newGear;
    } 
  }
  
  //Car class, parameters (make, model, and year), properties (make, model, year, odometer, and engine)
  class Car {
    constructor(make, model, year, odometer, engine, transmission) {
      this.make = make || "Generic";
      this.model = model || "Generic";
      this.year = year || "Unknown";
      this.odometer = odometer;
      this.engine = engine;
      this.transmission = transmission;
    }

    //Getters and setters
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
      if (typeof value !== "string") {
        output("Invalid make provided. Defaulting to 'Generic'.");
        this._make = "Generic";
      }
      else {
        this._make = value;
      }
    }

    set model(value) {
      if (typeof value !== "string") {
        output("Invalid model provided. Defaulting to 'Generic'.");
        this._model = "Generic";
      }
      else {
        this._model = value;
      }
    }

    set year(value) {
      if (typeof value !== "number" || value < 1900 || value > 2026) {
        output("Invalid year provided. Defaulting to 'Unknown'.");
      }
      else {
        this._year = value;
      }
    }

    set odometer(value) {
      if (typeof value !== "number" || value < 0) {
        output("Invalid odometer value provided.");
      }
      else {
        this._odometer = value;
      }
    }

    //Method 1 
    startEngine() {
      const gear = this.transmission.gearCount;
      const isManual = this.transmission.manualAutomatic == "Manual";
      if (this.engine.isRunning) {
        output("The car is already running.");
      }
      else if (isManual && !(gear == "Neutral")) {
        output("Cannot start. Gear needs to be in Neutral");
      }
      else if (!isManual && !["Neutral", "Park"].includes(gear)) {
        output("Cannot start. Gear needs to be in Neutral or Park.");
      }
      else {
        this.engine.start();
        output("Engine turned on.");
      }
    }

    //Method 2
    stopEngine() {
      if (!this.engine.isRunning) {
        output("The car is already tured off.");
      }
      else {
      this.engine.stop();
      output("Engine turned off.")
      }
    }

    //Method 3
    drive(int) {
      if (int < 0 || typeof int !== "number") {
        output("Invalid value for distance driven.");
      }
      else if (!this.engine.isRunning) {
        output("Engine is not running. Please turn on the engine to drive.");
      }
      else { //Transmissions added for the bonus marks section of the assignment
        const gear = this.transmission.gearCount;
        const isManual = this.transmission.manualAutomatic == "Manual";

        if (isManual && !["1", "2", "3", "4", "5", "6"].includes(gear)) {
          output("Cannot drive. Invalid gear while in Manual mode.");
        }
        else if (!isManual && gear !== "Drive") {
          output("Cannot drive. Invalid gear while in Automatic mode.");
        }
        else {
          this.odometer = this.odometer + int;
          output(`Drove ${int} km.`);
        }
      }
    }

    //Shift method
    shift(gear) {
      this.transmission.setGear(gear);
      output(`Gear set to ${gear}`);
    }
  }
  

  //Instantiate
  let myEngine = new Engine(4);

  let myTransmission = new Transmission("Automatic");
  
  let myCar = new Car("Ford", "Bronco", 2023, 0, myEngine, myTransmission);
  myCar.shift("Park");
  myCar.startEngine();
  myCar.shift("Drive");
  myCar.drive(100);
  myCar.shift("Park");
  myCar.stopEngine();
  myCar.startEngine();
  myCar.shift("Drive");
  myCar.drive(50);
  myCar.shift("Park");
  myCar.stopEngine();
  output(`Total distance driven: ${myCar.odometer}km`);

  //JSON
  JSONcar = JSON.stringify(myCar);
  output(JSONcar);
}

