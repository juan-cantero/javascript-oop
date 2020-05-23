# Objects

 Objects in javascript are dynamic that means you can add properties in the fly
```javascript
let dog = {
    name:"blue"
};

```

 for instance:
 ```javascript
  dog.bark = function() {console.log('woof')};
 also we can delete properties with delete dog.bark

//it is posible to access to properties with [] like this:
 dog['name']

```

## Object keys :

```javascript
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


 ```

 ## Ways to contruct Objects

 #### object literals:

  Object Literals: in javascript objects are basically a collection of
     key value pais.
```javascript
 const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw : function() {
        console.log('draw ' + this.location.x);
    }
}
```

#### factory functions:

 This is the way of defining how to create objects in javascript.

```javascript
function createCircle(radius) {
    return {
        radius,
   
         draw : function() {
            console.log('draw ');
         }

    }
}
```

#### constructor functions
```javascript
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    };
}
```

then to create a new circle we use
 const circle = new Circle(1)
 unser the hood new is going to create an empty object {}
 then will set this to point to that empty object
 and finally it will return the object from that function


every object has a property called constructor that points to the constructor function 
that created that object
