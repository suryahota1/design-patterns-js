interface RequestMap {
    data: any;
}

interface Handler {
    setNext( handler: Handler ): Handler;
    handle( request: RequestMap ): any;
}

abstract class BaseHandler implements Handler {

    private next: Handler | null = null;

    setNext(handler: Handler): Handler {
        return this.next = handler;
    }
    handle(request: RequestMap): any {
        if ( this.next ) {
            return this.next.handle(request);
        }
        return null;
    }
}

class Handler1 extends BaseHandler {

    handle ( request: RequestMap): any {
        // Do handler1 specific handling
        super.handle(request);
    }
}

class Handler2 extends BaseHandler {

    handle ( request: RequestMap): any {
        // Do handler2 specific handling
        super.handle(request);
    }
}

class Handler3 extends BaseHandler {

    handle ( request: RequestMap): any {
        // Do handler2 specific handling
        super.handle(request);
    }
}

function client ( handler: Handler ) {
    const request: RequestMap = { data: "" };
    handler.handle(request);
}

function main11 ( handler: Handler ) {
    const handler1 = new Handler1();
    const handler2 = new Handler2();
    const handler3 = new Handler3();

    handler1.setNext(handler2);
    handler2.setNext(handler3);

    client(handler1);
}
