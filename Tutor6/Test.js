var car1 = {
    brand: 'Toyota',
    model:'vios'
 }
 
 var car2 = {
    brand: 'toyota',
    model: 'Camry'
 }
 
 var bmx = {
    brand: 'BMX',
    model: 'x'
 }
 
 var Person = {
    FirstName: ' Jeremy',
    lastname: 'down',
    gender:'Male',
    age: 30,
    bloodtype: 'o',
    Siblings: ['alex','sally'],
    transport: [car1, car2, bmx] 
 }

 console.log(Person.firstname);
 console.log()
 var pCar1 = Person.transport[0];
 var pcar1Model = car1.model;
 console.log(Person,car1.Model);
 console.log(pcar1Model)
