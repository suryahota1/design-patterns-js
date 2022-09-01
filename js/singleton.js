/*
1. The goal is to manage global application state.
2. The class can be instantiated only once
3. The basic nature of this pattern is that it is immutable and non extendable
*/

// Using object literal

const data = [];
const UserSingleton = {
    put ( item ) {
        data.push(item);
    },
    get() {
        return data[data.length - 1];
    }
}

// export default Object.freeze(UserSingleton);

// Using class

class UserSingleton1 {
    static instance;
    constructor () {
        if ( !UserSingleton1.instance ) {
            UserSingleton1.instance = this; 
        }
        return UserSingleton1.instance;
    }
    static getInstance () {
        if ( !UserSingleton1.instance ) {
            UserSingleton1.instance = new UserSingleton1();
        }
        return UserSingleton1.instance;
    }
}

// const c = UserSingleton1.getInstance();
// const a = new UserSingleton1();
// const b = new UserSingleton1();

// console.log(a === c);
