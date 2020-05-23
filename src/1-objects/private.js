// @ts-nocheck
export default function Circle(radius) {
    
    let color = "blue"; // now let is private because it is only in the scope of this function 
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    };

    // we can use define property to define getter and setters
    Object.defineProperty(this,"color",{
        get: function() {return color}
    })
}

const c = new Circle(1);
console.log(c.color); // now we can acces to a private property 

