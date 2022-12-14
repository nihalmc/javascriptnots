    function sum(a,b,c){
    return   a+b+c
}

//console.log(sum(2,3,5))
//sum(2,3,5) sum(2)(3)(5)

//currying function
function curry(fn){
return function(a){
    return function(b){
        return function(c){
            return fn(a,b,c)
        }
    }
}
}
const curriedsum = curry(sum)
console.log(curriedsum(2)(3)(5))


//anuthor mothed, not curryi
const add2 =curriedsum(2)
const add3 =add2(3)
const add5 =add3(5)
console.log(add5);


/*->currying is a process in functional progamming in which we transform a function with mutiple 
argumants into as squence of nesting funtion that take one argumant at time  */