interface Implementation {
    operationImplementation(): any;
}

class ConcreteImplementationA implements Implementation {
    operationImplementation() {
        console.log("ConcreteImplementationA operationImplementation");
    }
}

class ConcreteImplementationB implements Implementation {
    operationImplementation() {
        console.log("ConcreteImplementationB operationImplementation");
    }
}

class Abstraction {

    protected implementation: Implementation;

    constructor ( implementation: Implementation ) {
        this.implementation = implementation;
    }

    public operation () {
        this.implementation.operationImplementation();
    }
}

class ExtendedAbstraction extends Abstraction {
    
    public operation(): void {
        console.log("Extended behaviour for abstraction layer");
        this.implementation.operationImplementation();
    }
}

function main8 () {
    const cia = new ConcreteImplementationA();
    const cib = new ConcreteImplementationB();

    const abs1 = new Abstraction(cia);
    const abs2 = new ExtendedAbstraction(cib);

    abs1.operation();
    abs2.operation();
}

main8();
