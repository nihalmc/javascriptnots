function greet(username){
    console.log('Good mornig '+username)
}
//return type
function add(a,b){
    return a+b
}

const arrowSum=(a,b)=>a+b
const addFive =(num)=> num+5

const sum =arrowSum(10,20)
addFive()
console.log(sum)
