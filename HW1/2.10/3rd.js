/* 
Using if..else, write the code which gets a number via prompt and then shows in alert:
1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero. 
*/

let num = prompt('Write a number or smth', '')

if (num > 0){
    alert('1')
} else if (num == 0){
    alert('0!')
} else {
    alert('-1')
}

// or


(num > 0) ? 
alert('1') : (num == 0) ? 
alert('0!') : alert('-1')