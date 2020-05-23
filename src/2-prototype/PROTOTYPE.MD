# Protoype

A prototype is an object in memory, every object we create have the same prototype object as 
their partent

```javascript

    var x = {}
    var y = {}

    Object.getPrototypeOf(x) === Object.getPrototypeOf(y) //true

```
Every object we create will have the prototype called Objet, and this Object is just loaded one time in memory.
Every object created for the same constructor will have the same prototype


## multilevel inheritance

```javascript
    var myArray = [1,2,3];

```
myArray ==> arrayBase ==> objetBase

## properties

Every object has properties such as writable, configurable and enumerable

configurable: if I can delete or not that property 
writable : I can  overwrite or define this method
enumerable : I can iterate
for instance:
```javascript
    var person {
        name:"juan"
    }
    Object.defineProperty(person,'name',{
        writable:false
    })
```

## potrotype and instance members

Age is a instance member and every member will have a new variable in memory,
while sayHi is a proptotype member and will be the same for every instance, 
so we don't have to use memory to copy that property en every instance.
```javascript
    function Person(age) {
        this.age = age;
    }
    Person.prototype.sayHi = function(){console.log("hi")};

 ```

