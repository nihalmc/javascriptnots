var read=require('readline-sync') //javascript a library

var value=read.question("Enter a number")

console.log(value)

if(value>0){
    console.log('number is positive')
}
else if( value < 0){
    console.log('Nummber is not positive')
}else{
    console.log('Number is zero')
}

const color ='10'

switch(color){
    case 'red' :
    console.log("color is red")
    break
    case 'blue' :
        console.log("color is blue")
        break
        case 'green' :
            console.log("color is green")
        break   
        default:
         console.log('Not a valid color')        
}