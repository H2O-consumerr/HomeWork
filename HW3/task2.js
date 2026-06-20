let numbers = [8, 37, 2, 4, 59, 14];

function greaterThan(num){
    for(let i = 0; i<6; i ++){
        if (num[i] > 10){
            console.log(`The number ${num[i]} is greater than 10`);
        }
    }
};

greaterThan(numbers);