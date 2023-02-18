interface Button {
    print(): void;
}

class WindowsButton implements Button {
    print(): void {
        console.log("Im Windows button"); 
    }
}

class MacButton implements Button {
    print(): void {
        console.log("Im Mac button"); 
    }
}

interface Checkbox {
    print(): void;
}

class WindowsCheckbox implements Checkbox {
    print(): void {
        console.log("Im Windows Checkbox"); 
    }
}

class MacCheckbox implements Checkbox {
    print(): void {
        console.log("Im Mac Checkbox"); 
    }
}

abstract class GUIFactory {
    public abstract createButton(): Button;
    public abstract createCheckbox(): Checkbox;
}

class WindowsFactory extends GUIFactory {
    public createButton(): Button {
        return new WindowsButton();
    }
    public createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
    
}

class MacFactory extends GUIFactory {
    public createButton(): Button {
        return new MacButton();
    }
    public createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
    
}

function main4 ( config: string ) {
    let factory: GUIFactory;
    if ( config === "Windows" ) {
        factory = new WindowsFactory();
    } else if ( config === "Mac" ) {
        factory = new MacFactory();
    } else {
        throw new Error("Invalid config");
    }
    
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    button.print();
    checkbox.print();
}

main4("Windows");
