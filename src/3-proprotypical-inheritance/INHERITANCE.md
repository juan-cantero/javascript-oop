# prototypical inheritance

```javascript
function Shape(color) {
    this.color = color;
}

function Circle(color) {
    //The call() method calls a function with a given this value and arguments provided individually.
    Shape.call(this,color)
}
Cicle.prototye.draw = function(){console.log('draw shape')}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

// we can create our extends function

function extends(child, parent)
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

```

## Mixins 

Mixins is a way to use composition, we now inheritance have many problems, so we should choose composition over inheritance.

example of mixins :

```javascript
const canEat = {
    eat: function() {console.log('eating')}
}

const canWalk = {
    walk: function() {console.log('walking')}
}

const canSwim = {
    swim: function() {console.log('swimming')}
}

const Person = {

}

const Fish = {

}

Object.assign(Person.prototype,canWalk,canEat);
Object.assign(Fish.prototype,canEat,canSwim);


```

### Custom mixim function

we use the rest operator ... to pass multiple arguments and the spread operator also ... to spread our array.

```javascript

function mixim(target, ...sources) {
    Object.assign(target.prototype,...sources)
}
```


