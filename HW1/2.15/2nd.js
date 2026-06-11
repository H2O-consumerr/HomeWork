function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
} // Rewrite the function using '?' or '||'

//1)
function checkAge(age){
    (age > 18) ? true : confirm('Did parents allow you?');
}


//2)
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}
