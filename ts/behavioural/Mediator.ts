interface Mediator {
    notify( sender: object, event: string ): void;
}

interface Component {
    setMediator( mediator: Mediator ): void;
}

class ConcreteMediator implements Mediator {

    private component1: Component1;
    private component2: Component2;

    constructor ( comp1: Component1, comp2: Component2 ) {
        this.component1 = comp1;
        this.component2 = comp2;

        this.component1.setMediator(this);
        this.component2.setMediator(this);
    }

    notify ( sender: object, event: string): void {
        if ( sender === this.component1 && event === "eventA" ) {
            this.component2.doTaskC();
        } else if ( sender === this.component2 && event === "eventB" ) {
            this.component1.doTaskD();
        }
    }
}

abstract class AbstractComponent implements Component {

    public mediator: Mediator;

    constructor () {

    }

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class Component1 extends AbstractComponent {

    public doTaskA () {
        console.log("Component1 doing task A");
        this.mediator.notify(this, "eventA");
    }

    public doTaskD () {
        console.log("Component1 responded to task A");
    }
}

class Component2 extends AbstractComponent {
    public doTaskB () {
        console.log("Component2 doing task B");
        this.mediator.notify(this, "eventB");
    }
    public doTaskC () {
        console.log("Component2 responded to task C");
    }
}

function main13 () {
    const comp1 = new Component1();
    const comp2 = new Component2();

    const mediator = new ConcreteMediator(comp1, comp2);
    comp1.doTaskA();
    comp2.doTaskB();
}

main13();
