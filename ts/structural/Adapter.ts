// Client class 
interface Client {
    request (): any
}

class Target implements Client {
    public request (): any {

    }
}

// Third party or some legacy code with incompatible interface
class Adaptee {

    specificRequest() {
        console.log("")
    }

}