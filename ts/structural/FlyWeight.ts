// Client
class Forest {

    private trees: Tree[];
    private canvas;

    public createForest (): void {
        const treeList = [{
            x: 1, y: 1, name: "abc", texture: "xyz", color: "red"
        }, {
            x: 5, y: 5, name: "abcd", texture: "xyzx", color: "green"
        }, {
            x: 10, y: 10, name: "abc", texture: "xyz", color: "red"
        }, {
            x: 15, y: 15, name: "abcd", texture: "xyzx", color: "green"
        }];

        for ( const tree of treeList ) {
            const newTree = new Tree(tree.x, tree.y, tree.name, tree.texture, tree.color);
            this.trees.push(newTree);
        }
    }

    public draw () {
        for ( const tree of this.trees ) {
            tree.draw(this.canvas);
        } 
    }
}

class Tree {

    private x: number;
    private y: number;
    private type: TreeType;

    constructor ( x: number, y: number, name: string, texture: string, color: string ) {
        this.x = x;
        this.y = y;
        this.type = TreeFactory.getTreeType(name, texture, color);
    }

    public draw ( canvas: any ) {
        this.type.draw(this.x, this.y, canvas);
    }
}

class TreeType {
    private name: string;
    private texture: string;
    private color: string;

    constructor ( name: string, texture: string, color: string ) {
        this.name = name;
        this.texture = texture;
        this.color = color;
    }

    public draw ( x: number, y: number, canvas: any ): void {
        // Unique states x and y
        // Shared states name, texture and color
    }
}

class TreeFactory {
    private static treeTypes: {[key: string]: TreeType} = {};

    public static getTreeType ( name: string, texture: string, color: string ) {
        const key = name + "_" + texture + "_" + color;
        if ( !( key in this.treeTypes ) ) {
            this.treeTypes[key] = new TreeType(name, texture, color);
            console.log("Creating new Flyweight");
        } else {
            console.log("Reusing Flyweight");
        }
        return this.treeTypes[key];
    }
}

function main5 () {
    const forest = new Forest();
    forest.createForest();
    forest.draw();
}

main5();