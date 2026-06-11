let answer = prompt('What is the “official” name of JavaScript?', '');

if (answer == 'ECMAScript') {
    alert('Thats right!')
} else {
    alert('You don’t know? ECMAScript!')
}

// or

(answer == 'ECMAScript') ? 
alert('Thats right!') : alert('You don’t know? ECMAScript!')