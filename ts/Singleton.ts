class Singleton {

    static instance: Singleton | null = null;

    private constructor () {

    }

    static createInstance () {
        if ( Singleton.instance === null ) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

function main () {
    const inst1 = Singleton.createInstance();
    const inst2 = Singleton.createInstance();

    console.log(inst1 === inst2);
}

main();
