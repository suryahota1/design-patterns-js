interface State11 {
    task1( param1: number, param2: string ): void;
    task2( param1: number, param2: number ): boolean;
    task3(): void;
}

interface User {
    isAdmin: () => boolean;
}
class Context {
    state: State11;
    user: User;

    constructor ( initialState: State11 ) {
        this.state = initialState;
    }

    changeState( state: State11 ) {
        this.state = state;
    }

    task1 () {
        this.state.task1(2, "str");
    }

    task2 () {
        this.state.task1(2, "str");
    }
}

abstract class AbstractState1 implements State11 {
    context: Context;

    task1 ( param1: number, param2: string ): void {
        throw new Error("Task1 is not supported");
    }

    task2 ( param1: number, param2: number ): boolean {
        throw new Error("Task2 is not supported");
    }

    task3(): void {
        throw new Error("Method not implemented.");
    }

    setContext( context: Context ) {
        this.context = context;
    }
}

class ConcreateState1 extends AbstractState1 {
    task1(param1: number, param2: string): void {
        console.log("Performing task1 inside state1 using ", param1, param2);
        const nextState = new ConcreateState2();
        nextState.setContext(this.context);
        this.context.changeState(nextState);
    }
}

class ConcreateState2 extends AbstractState1 {
    task2 ( param1: number, param2: number ): boolean {
        if ( !this.context.user.isAdmin() ) {
            throw new Error("Can not perform task2 unless user is an admin");
        }
        console.log("Performing task2 inside state2 using ", param1, param2);
        const nextState = new ConcreateState3();
        nextState.setContext(this.context);
        this.context.changeState(nextState);
        return true;
    }
}

class ConcreateState3 extends AbstractState1 {
    task3(): void {
        console.log("Performing task3 inside state3");
    }
}