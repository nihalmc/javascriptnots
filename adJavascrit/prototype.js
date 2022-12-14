function Person(fName,lName){
    this.firstName =fName
    this.lastName =lName
}

const Person1 = new Person('Bruce','Wayne')
const Person2 = new Person('clark','kent')
//prototupe

Person.prototype.getFullName = function(){
    return this.firstName + ' ' +this.lastName
}
console.log(Person1.getFullName())
console.log(Person2.getFullName())