function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const lydia = new Person('Lydia', 'Hallie');
  const sarah = Person('Sarah', 'Smith');
  
  console.log(lydia); //Person { firstName: 'Lydia', lastName: 'Hallie' }
  console.log(sarah); //undefined