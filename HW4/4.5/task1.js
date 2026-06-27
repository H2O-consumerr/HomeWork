let num = [];

function A() { return num; }
function B() { return num; }

console.log( new A() == new B() ); // true
//it is possible to create functions so that functionA == functionB