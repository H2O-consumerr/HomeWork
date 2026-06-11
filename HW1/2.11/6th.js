let age = prompt('What is your age?', '');
if (age >= 14 || age <= 90){
    alert('You fit into the 14-90 y/o category!')
} else {
    alert ('you dont fit into the age category!')
}
// ---->

if (age >= 14 && age <= 90) {
    alert('You fit into the 14-90 y/o category!')
} else {
    alert ('you dont fit into the age category!')
}