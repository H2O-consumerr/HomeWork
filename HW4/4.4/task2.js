let calculator = {
  read(){
    this.a = prompt('Choose number a',);
    this.b = prompt('Choose number b',);
  },
  sum(){
    return(this.a + this.b)
  },
  mul(){
    return(this.a * this.b)
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );



// solution: 
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );