
let object = {
    key:'key'
}

function getKeys(object) {
    for (let key in object) {
        console.log(key);
    }
}

function getKeyAndValue(object) {
    for (let key in object) {
        console.log(key, object[key]);
    }
}

// another way to get the keys is  using 
const keys = Object.keys(object)

// to check if a key is in an object we can use:

if ('key' in object) console.log(object['key']);