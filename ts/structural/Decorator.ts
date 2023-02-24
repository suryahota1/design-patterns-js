interface Component {
    operation1(): any;
    operation2(): any;
}

class ConcreteComponent1 implements Component {
    operation1() {
        console.log("ConcreteComponent1 operation1 done");
    }
    operation2() {
        console.log("ConcreteComponent1 operation2 done");
    }
}

class ConcreteComponent2 implements Component {
    operation1() {
        console.log("ConcreteComponent2 operation1 done");
    }
    operation2() {
        console.log("ConcreteComponent2 operation2 done");
    }
}

class BaseDecorator implements Component {

    component: Component;

    constructor ( comp: Component ) {
        this.component = comp;
    }

    operation1() {
        this.component.operation1();
    }
    operation2() {
        this.component.operation2();
    }
}

class ConcreteDecorator1 extends BaseDecorator {

    operation1() {
        console.log("ConcreteDecorator1 operation1 done");
        super.operation1();
    }
    operation2() {
        console.log("ConcreteDecorator1 operation2 done");
        super.operation2();
    }
}

class ConcreteDecorator2 extends BaseDecorator {

    operation1() {
        console.log("ConcreteDecorator2 operation1 done");
        super.operation1();
    }
    operation2() {
        console.log("ConcreteDecorator2 operation2 done");
        super.operation2();
    }
}

function main7 () {
    const comp1 = new ConcreteComponent1();

    const bd1 = new BaseDecorator(comp1);
    const cd1 = new ConcreteDecorator1(bd1);
    const cd2 = new ConcreteDecorator2(cd1);

    const comp2 = new ConcreteComponent2();

    const bd11 = new BaseDecorator(comp2);
    const cd11 = new ConcreteDecorator1(bd11);
    const cd21 = new ConcreteDecorator2(cd11);

    cd2.operation1();
    cd2.operation2();

    cd21.operation1();
    cd21.operation2();
}

main7();
