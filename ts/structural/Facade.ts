class ComplexFramework1 {

    public operation1 (): string {
        return "ComplexFramework1 operation1 done";
    }

    public operation2 (): string {
        return "ComplexFramework1 operation2 done";
    }

    public operationN (): string {
        return "ComplexFramework1 operationN done";
    }
}

class ComplexFramework2 {

    public operation1 (): string {
        return "ComplexFramework2 operation1 done";
    }

    public operation2 (): string {
        return "ComplexFramework2 operation2 done";
    }

    public operationN (): string {
        return "ComplexFramework2 operationN done";
    }
}

class Facade {
    public operation (): void {
        const cf1 = new ComplexFramework1();
        const cf2 = new ComplexFramework2();
        let result = "";
        result += cf1.operation2();
        result += "__" + cf1.operationN();
        result += "@" + cf2.operationN();
    }
}

function main6 () {
    const facade = new Facade();
    facade.operation();
}

main6();