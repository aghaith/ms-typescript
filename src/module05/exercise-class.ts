interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

class Car implements Vehicle {
    // Properties

    private static numberOfCars: number = 0; // New static property
    private _make: string;
    _color: string;
    private _doors: number;

    // Constructor

    constructor(make: string, color: string, doors = 4) {
        Car.numberOfCars++; // Increments the value of the static property
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    // Accessors

    get make() {
        return this._make;
    }

    set make(make) {
        this._make = make;
    }

    get color() {
        return 'The color of the car is ' + this._color;
    }

    set color(color) {
        this._color = color;
    }

    get doors() {
        return this._doors;
    }

    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }

    // Methods

    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }

    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }

    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }

    // This function performs work for the other method functions
    protected worker(): string {
        return this._make;
    }
}

// Instantiates the Car object with all parameters
let myCar1 = new Car('Cool Car Company', 'blue', 2);
let myCar2 = new Car('Galaxy Motors', 'red', 2);
let myCar3 = new Car('Galaxy Motors', 'gray');

console.log(myCar1.color); // The color of the car is blue
console.log(myCar1._color); // blue
console.log(myCar3.doors);  // returns 4, the default value
console.log(myCar1.accelerate(35)); // Cool Car Company is accelerating to 35 MPH.
console.log(myCar1.brake()); // Cool Car Company is braking with the standard braking system.
console.log(myCar1.turn('right')); // Cool Car Company is turning right
console.log(Car.getNumberOfCars()); // Returns 3

class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range!: number;
    // Constructor
    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors

    get range() {
        return this._range;
    }

    set range(range) {
        this._range = range;
    }

    // Methods
    charge() {
        console.log(this.worker() + " is charging.") // returns "Spark Motors is charging.""
    }

    // Overrides the brake method of the Car class
    brake(): string {
        return `${this.worker()}  is braking with the regenerative braking system.`
    }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"
