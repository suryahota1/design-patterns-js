interface Prototype {
    clone(): Prototype;
}

class Shape implements Prototype {
    public x: number;
    public y: number;
    public color: string;

    constructor ( x?: number, y?: number, c?: string ) {
        
    }

    clone(): Prototype {
        const copy = new Shape();
        copy.x = this.x;
        copy.y = this.y;
        copy.color = this.color;
        return copy;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor ( w: number, h: number, x: number, y: number, c: string ) {
        super(x, y, c);
        this.width = w;
        this.height = h;
    }

    clone(): Prototype {
        const copy = new Rectangle(this.width, this.height, this.x, this.y, this.color);
        return copy;
    }
}

function main2 () {
    const r1 = new Rectangle(10, 20, 30, 40, "red");
    const rCopy = r1.clone();
}