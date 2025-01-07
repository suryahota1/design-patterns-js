interface Strategy {
    execute(): void;
}

class ConcreteStrategy1 implements Strategy {
    execute(): void {
        console.log("Peforming task 1 using algorithm 1");
    }
}

class ConcreteStrategy2 implements Strategy {
    execute(): void {
        console.log("Peforming task 2 using algorithm 2");
    }
}

class Context1 {

    private strategy: Strategy;

    setStrategy ( strategy: Strategy ) {
        this.strategy = strategy;
    }

    performTask () {
        this.strategy.execute();
    }
}