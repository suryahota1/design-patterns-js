interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    request(): void {
        console.log("Im RealSubject sarrying out the task");
    }
}

class ProxySubject implements Subject {

    serviceRef: Subject;

    constructor ( serviceRef: Subject ) {
        this.serviceRef = serviceRef;
    }

    request(): void {
        console.log("Im ProxySubject carrying out tasks");
        if ( this.checkPermission() ) {
            this.serviceRef.request();
        }
    }

    checkPermission () {
        return true;
    }
}

class SubjectClient {

    doTask ( service: Subject ) {
        service.request();
    }    
}

class Application {

    constructor () {

    }

    main () {
        const sRef = new RealSubject();
        const sbClient = new SubjectClient();
        sbClient.doTask(sRef);
        const prRef = new ProxySubject(sRef);
        sbClient.doTask(prRef);
    }
}