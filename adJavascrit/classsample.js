//how create in class
class Person{
    // how initialize proratis
    constructor(fName,lName){
        this.firstName = fName
        this.lastName = lName
    }

    //how to add motheds

    sayMayName(){
        return this.firstName + ' ' +this.lastName
    }
}
//how to create instance
const classp1 =new Person('muhammed','Nihal')
console.log(classp1.sayMayName());

//how to useing extends  inheritiance use super keword
class superHero extends Person{
    constructor(fName,lName){
        super(fName,lName)
    }
    fightCrime() {
        console.log('Fighting crime');
}


}
 
const batman = new superHero('Bruce','Wayne')
console.log(batman.sayMayName());