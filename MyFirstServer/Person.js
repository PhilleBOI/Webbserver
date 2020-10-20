const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });

  const Person = mongoose.model('Person', personSchema);

  exports.storePerson = (name, email, age) => {
    var person = new Person({
        name: name, 
        email: email, 
        age: age 
       })
   
     person.save(()=>{
       console.log("Successfully saved person in database!")
      })

      return person
    }