// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. 
// These methods must be the only available means of interacting with the object.

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
      var arr = firstAndLast.split(' ');
      var firstName = arr[0];
      var lastName = arr[1];
  
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;
    };
    
    this.getFullName = function() {
      return firstName + ' ' + lastName;
    };
  
    this.setFirstName = function(first) {
        if (typeof first === 'string') {
            firstName = first;
        } else {
            return first + 'is not a string!'
        }
      
    };
  
    this.setLastName = function(last) {
        if (typeof last === 'string') {
            lastName = last;
        } else {
            return last + 'is not a string!'
        }
    };
    
    this.setFullName = function(firstAndLast) {
      var arr = firstAndLast.split(' ');
      firstName = arr[0];
      lastName = arr[1];
    };
  
    return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
  bob.setFullName("Haskell Curry");
 