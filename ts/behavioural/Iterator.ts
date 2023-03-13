interface Iterator1<T> {
    hasNext(): boolean;
    getNext(): T;
}

class AlphabeticalIterator implements Iterator1<any> {

    private collection: WordsCollection;
    private currIdx = 0;

    constructor ( collection: WordsCollection ) {
        this.collection = collection;
    }

    hasNext(): boolean {
        // Some logic here
        // return this.collection
        return this.currIdx < this.collection.getCount();
    }
    getNext() {
        return this.collection.getItem(this.currIdx);
    }
}

interface Collection {
    getIterator(): Iterator1<any>;
}

class WordsCollection implements Collection {

    private list: string[];

    getIterator(): Iterator1<any> {
        return new AlphabeticalIterator(this);
    }
    addItem ( str: string ) {
        this.list.push(str);
    }
    getCount (): number {
        return this.list.length;
    }
    getItem ( idx: number ) {
        return this.list[idx];
    }
}

function main12 () {
    const wc = new WordsCollection();
    wc.addItem("Surya");
    wc.addItem("Sashi");

    const itr = wc.getIterator();

    while ( itr.hasNext() ) {
        console.log(itr.getNext());
    }
}
