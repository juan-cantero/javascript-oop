// This is the way of defining how to create objects in javascript.


export default function createCircle(radius) {
    return {
    radius,
   
    draw : function() {
        console.log('draw ');
    }

}
}