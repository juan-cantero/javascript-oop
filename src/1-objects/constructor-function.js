// constructor function 

export default function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    };
}


// then to create a new circle we use
// const circle = new Circle(1)
// unser the hood new is going to create an empty object {}
// then will set this to point to that empty object
// and finally it will return the object from that function


//every object has a property called constructor that points to the constructor function 
//that created that object