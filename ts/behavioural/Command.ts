class Receiever {
    doTask1 (...params ) {
        console.log(...params);
    }
    doTask2 (...params ) {
        console.log(...params);
    }
}

interface Command {
    receiever: Receiever;
    execute(): void;
}

class BaseCommand implements Command {
    receiever: Receiever;
    execute(): void {
        throw new Error("Method not implemented.");
    }

    constructor ( receiever: Receiever ) {
        this.receiever = receiever;
    }
}

class ConcreteCommand1 extends BaseCommand {
    receiever: Receiever;
    execute(): void {
        this.receiever.doTask1("param1", "param2");
    }
}

class ConcreteCommand2 extends BaseCommand {
    receiever: Receiever;
    execute(): void {
        this.receiever.doTask2("param1", "param2");
    }
}

class ConcreteCommand3 extends BaseCommand {
    receiever: Receiever;
    execute(): void {
        this.receiever.doTask1("param1", "param2");
        this.receiever.doTask2("param1", "param2");
    }
}

function client () {
    const receiever = new Receiever();

    const command1 = new ConcreteCommand1(receiever);
    const command2 = new ConcreteCommand2(receiever);
    const command3 = new ConcreteCommand3(receiever);

    command1.execute();

    command2.execute();

    command3.execute();
}