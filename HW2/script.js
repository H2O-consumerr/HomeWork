let str = ['hello', 'what', '????'];
let num = [1, 4, 9, 28];

for (let i = 0;i % 2 == 0; i++){
    return true;
}

function makeUppercase(word) {
  console.log(word[1].toUpperCase());
  console.log(word[3].toUpperCase());
}

for (let i = 0; i < str.length; i++) {
  makeUppercase(str[i]);
}

function oddOrEven(number) {
  if (number % 2 === 0) {
    return number + ' is even';
  } else {
    return number + ' is odd';
  }
}

for (let i = 0; i < num.length; i++) {
  console.log(oddOrEven(num[i]));
}