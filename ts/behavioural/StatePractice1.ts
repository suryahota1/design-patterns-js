interface StateClone {
    task1();
    task2();
}

class ContextClone {

    currentState: StateClone;

    constructor ( state : StateClone ) {
        this.currentState = state;
    }

    public setState ( state ): void {
        this.currentState = state;
    }

    public task1 (): void {
        this.currentState.task1();
    }
    

    public task2 (): void {
        this.currentState.task1();
    }
}

class ConcreteState implements StateClone {

    context: ContextClone;

    constructor ( context: ContextClone ) {
        this.context = context;
    }

    task1() {
        throw new Error("Task 1 can not be performed in this state");
    }
    task2() {
        throw new Error("Task 2 can not be performed in this state");
    }
}

class State1 extends ConcreteState {
    task1() {
        console.log("State 1 performing task 1");
        this.context.setState(new State2(this.context));
    }
}

class State2 extends ConcreteState {
    task2() {
        console.log("State 2 performing task 2");
    }
}