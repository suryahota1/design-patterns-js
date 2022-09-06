
class Observable {

    #observers = [];

    subscribe ( func ) {
        this.#observers.push(func);
    }

    notify ( data ) {
        this.#observers.forEach(( obs, idx ) => {
            obs(data);
        });
    }

    unsubscribe ( func ) {
        this.#observers.filter(( obs ) => {
            return obs != func;
        });
    }
}

function observer1 ( data ) {
    console.log("received data in obs1", data);
}

function observer2 ( data ) {
    console.log("received data in obs2", data);
}

const observableInst = new Observable();

observableInst.subscribe(observer1);
observableInst.subscribe(observer2);

setInterval(() => {
    observableInst.notify("hello");
}, 1000);