interface Parcel {
    getPrice(): number;
}

class Box implements Parcel {

    content: Parcel[];

    getPrice(): number {
        let price = 0;
        for ( let i = 0; i < this.content.length; i++ ) {
            price += this.content[i].getPrice();
        }

        return price;
    }
    add( list: Parcel[] ): void {
        this.content = this.content.concat(list);
    }
}

class Product implements Parcel {
    getPrice(): number {
        return Math.ceil(Math.random() * 1000);
    }
}

function main8 () {
    const wrapper1 = new Box();
    const wrapper2 = new Box();
    const wrapper3 = new Box();
    const wrapper4 = new Box();
    const wrapper5 = new Box();

    wrapper5.add([new Product()]);

    wrapper4.add([wrapper5, new Product()]);
    wrapper3.add([new Product(), new Product()]);
    wrapper2.add([wrapper3, wrapper4]);

    wrapper1.add([wrapper2, new Product(), new Product()]);

    console.log(wrapper1.getPrice());
}

main8();
