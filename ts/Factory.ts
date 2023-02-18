interface Product {
    getMyName(): string;
}

class ConcreteProduct1 implements Product {
    getMyName(): string {
        return "I'm Product1";
    }
}

class ConcreteProduct2 implements Product {
    getMyName(): string {
        return "I'm Product2";
    }
}

abstract class Creator {

    public abstract createProduct() : Product;

    public performTask() : void {
        const pdt = this.createProduct();
        console.log(pdt.getMyName());
    }
}

class ConcreteCreator1 extends Creator {
    public createProduct(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public createProduct(): Product {
        return new ConcreteProduct2();
    }
}

function main3 () {
    const icc1 = new ConcreteCreator1();
    const icc2 = new ConcreteCreator2();
    console.log(icc1.performTask());
    console.log(icc2.performTask());
}

main3();
