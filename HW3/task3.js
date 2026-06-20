let numbers = [5, 18, 3, 22, 9];

function countEvenNumbers(num){
    let count = 0;
    for(let i = 0; i < 5; i ++){
        if (num[i] % 2 === 0){
            count++
        }
      }
    console.log(`There are ${count} even numbers`);
};

countEvenNumbers(numbers);