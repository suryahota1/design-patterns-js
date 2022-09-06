/* 
1. To intercept and control interactions with object
*/
const obj = {
    a: 3,
    b: 4
};

const proxyObj = new Proxy(obj, {
    get ( obj, prop ) {
        console.log("props asked for " + obj);
        return obj[prop];
    },
    set ( obj, prop, value ) {
        console.log("To set property for " + prop + " of " + obj);
        obj[prop] = value;
    }
});

console.log(proxyObj.a = 8);