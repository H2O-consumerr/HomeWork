function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name );// will output an error: 'TypeError: Cannot read properties of undefined (reading 'name')'