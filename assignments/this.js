/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When no other rules apply, "this" defaults to window binding
* 
* 2. happens when the method is being invoked. 'this' binds to the object to the left of the dot of the function being invoked
* 
* 3. Binding created using the 'new' keyword when creating new object.
* 
* 4. explicit binding is when .bind, .call, or .apply is used to explicitly bind a function to an object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    console.log(this);

// Principle 2

// code example for Implicit Binding
const miamiDolphins = {
    name: 'The Miami Dolphins will',
     SB: function(object) {
      console.log(`${this.name} win the ${object}`);
    }
  }
  
  miamiDolphins.SB('Superbowl');

// Principle 3

// code example for New Binding
function Car(model, make, year) {
    this.model = model;
    this.make = make;
    this.year = year;
  }
  
  const myCar = new Car('Subaru', 'Crosstrek', 2017);
  console.log(myCar);

// Principle 4

// code example for Explicit Binding
function displayCar(){
    console.log(`My car is a ${this.year} ${this.model} ${this.make}`);
}

displayCar.call(myCar);