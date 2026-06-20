let num = [1, 4, 37, 59, 60, 58];

function findOddNumber(number){
    for (let i = 0; i<6; i++){
        if (number[i] % 2 !== 0){
            console.log(`The number ${number[i]} is odd`)
        }
    }
};

findOddNumber(num);