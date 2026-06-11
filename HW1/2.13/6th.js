while (true) {
    let val = +prompt('write a number greater than 100', 0);
    if (val <= 100) continue;
    if (!val || val >= 100) break;
}

//solution:
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);