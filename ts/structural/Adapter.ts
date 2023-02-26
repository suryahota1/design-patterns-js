// Client class 
interface Client {
    request (): any
}

class Target implements Client {
    public request (): any {
        console.log("Target request");
    }
}

// Third party or some legacy code with incompatible interface
class Adaptee {

    specificRequest() {
        console.log("Adaptee specificRequest");
    }
}

class Adapter implements Client {

    private adaptee: Adaptee;

    constructor ( adaptee: Adaptee ) {
        this.adaptee = adaptee;
    }

    request() {
        this.adaptee.specificRequest();
    }
}

function main9 () {
    const tgt = new Target();
    tgt.request();

    const adpt = new Adaptee();
    const adptr = new Adapter(adpt);

    adptr.request();
}

main9();
