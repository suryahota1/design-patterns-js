interface Subject {
    request(): any;
}

class RealSuject implements Subject {
    request() {
        console.log("Real object request performed");
    }
}

class Proxy1 implements Subject {

    private service: Subject;

    constructor ( service: Subject ) {
        this.service = service;
    }

    request() {
        console.log("Before real subject work");
        this.service.request();
        console.log("After real subject work");
    }
}

function main10 () {
    const rs = new RealSuject();
    rs.request();

    const px = new Proxy1(rs);
    px.request();
}

main10();
