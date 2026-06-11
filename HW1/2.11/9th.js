alert('Please log in');
let user = prompt('Who is there?', '');

if (user !== 'Admin') {
    alert('Unknown user')
} else if (user == 'Admin') {
    password = prompt('Password:', '');
    if (password == 'TheMaster') {
        alert('Welcome!');
    } else if (password !== 'TheMaster'){
        alert('Wrong password');
    } else {
        alert('Canceled!');
    }
} else {
    alert('Cancelled!');
}

// the solution was:

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}