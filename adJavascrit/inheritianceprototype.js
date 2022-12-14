// prototype use inheritiance in functon
function Person(fName,lName){
    this.firstName =fName
    this.lastName =lName
}//adding  name all super heros
Person.prototype.getFullName = function(){
    return this.firstName + ' ' +this.lastName
} //add  object and proratis
function superHero(fName,lName){
    //this ={}
    Person.call(this,fName,lName)
    this.isSuperHero =true
}
// add fightcrime all super heros
superHero.prototype.fightCrime = function(){
    console.log('Fighting crime');
} // create object
superHero.prototype =Object.create(Person.prototype)
//calling
const batman = new superHero('Bruce','Wayne')
superHero.prototype.constructor=superHero
console.log(batman.getFullName())