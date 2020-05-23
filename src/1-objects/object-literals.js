
// Object Literals: in javascript objects are basically a collection of
// key value pais.

export const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw : function() {
        console.log('draw ' + this.location.x);
    }
}