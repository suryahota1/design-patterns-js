class Context {

    private state: State;

    constructor () {
        this.state = new ConcreteStateA();
    }

    public transitionState ( state: State ) {
        this.state = state;
        this.state.setContext(this);
    }

    public doTaskA () {
        this.state.doTaskA();
    }

    public doTaskB () {
        this.state.doTaskB();
    }

    public doTaskC () {
        this.state.doTaskC();
    }
}

interface State {
    context: Context;
    setContext( context: Context ): void;
    doTaskA(): void;
    doTaskB(): void;
    doTaskC(): void;
}

class ConcreteStateA implements State {
    context: Context;
    setContext( context: Context ): void {
        this.context = context;
    }
    doTaskA(): void {
        console.log("Performing task A when in state A");
        this.context.transitionState(new ConcreteStateB());
    }
    doTaskB(): void {
        throw new Error("Can not perform task B when in state A");
    }
    doTaskC(): void {
        throw new Error("Can not perform task C when in state A");
    }
}

class ConcreteStateB implements State {
    context: Context;
    setContext( context: Context ): void {
        this.context = context;
    }
    doTaskA(): void {
        throw new Error("Can not perform task A when in state B");
    }
    doTaskB(): void {
        console.log("Performing task B when in state B");
        this.context.transitionState(new ConcreteStateC());
    }
    doTaskC(): void {
        throw new Error("Can not perform task C when in state B");
    }
}

class ConcreteStateC implements State {
    context: Context;
    setContext( context: Context ): void {
        this.context = context;
    }
    doTaskA(): void {
        throw new Error("Can not perform task A when in state C");
    }
    doTaskB(): void {
        throw new Error("Can not perform task B when in state C");
    }
    doTaskC(): void {
        console.log("Performing task C when in state C");
        this.context.transitionState(new ConcreteStateA());
    }
}

function main14 () {
    const context = new Context();

    context.doTaskA();
    context.doTaskB();
    context.doTaskC();
}

main14();
