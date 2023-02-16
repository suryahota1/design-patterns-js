interface Builder {
    reset(): void;
    createFrame(): void;
    mountBody(): void;
    mountWheels(): void;
    putSteering(): void;
    getProduct(): Car;
}

class Car {
    wheels: boolean;
    body: boolean;
    frame: boolean;
    steering: boolean;
}

class Manual {
    wheels: boolean;
    body: boolean;
    frame: boolean;
    steering: boolean;
}

class CarBuilder implements Builder {

    car: Car;

    constructor () {
        this.reset();
    }

    reset(): void {
        this.car = new Car();
    }
    createFrame(): void {
        this.car.frame = true;
    }
    mountBody(): void {
        this.car.body = true;
    }
    mountWheels(): void {
        this.car.wheels = true;
    }
    putSteering(): void {
        this.car.steering = true;
    }
    getProduct(): Car {
        return this.car;
    }
}

class CarManualBuilder implements Builder {

    manual: Manual;

    constructor () {
        this.reset();
    }

    reset(): void {
        this.manual = new Manual();
    }
    createFrame(): void {
        this.manual.frame = true;
    }
    mountBody(): void {
        this.manual.body = true;
    }
    mountWheels(): void {
        this.manual.wheels = true;
    }
    putSteering(): void {
        this.manual.steering = true;
    }
    getProduct(): Manual {
        return this.manual;
    }
}

class Director {

    builder: Builder;

    constructor ( builder: Builder ) {
        this.builder = builder;
    }

    constructCar ( type: string ) {
        if ( type === "sports" ) {
            this.builder.createFrame();
            this.builder.mountBody();
        } else if ( type === "normal" ) {
            this.builder.createFrame();
            this.builder.mountBody();
            this.builder.mountWheels();
        }
    }

    constructManual ( type: string ) {
        if ( type === "sports" ) {
            this.builder.createFrame();
            this.builder.mountBody();
        } else if ( type === "normal" ) {
            this.builder.createFrame();
            this.builder.mountBody();
            this.builder.mountWheels();
        }
    }
}

function main () {
    const b1 = new CarBuilder();
    const d1 = new Director(b1);
    d1.constructCar("sports");
    const b2 = new CarManualBuilder();
    const d2 = new Director(b2);
    d2.constructManual("sports");
    console.log(b1.getProduct());
    console.log(b2.getProduct());
}