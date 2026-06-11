function min (a, b){
    (a >= b) ? alert(a) : alert(b)
}

let a = +prompt('Chose a number','');
let b = +prompt('Chose another number','');

min(a, b)

//------>

function min(a, b) {
  return a < b ? a : b;
}