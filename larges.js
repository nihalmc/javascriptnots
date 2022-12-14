var read=require('readline-sync') //javascript a library

num1=read.question("Enter 2 numbers:")
num2=read.question()

if(num1>num2){
    console.log("larges is"+num1) 
}else{
    console.log("larges is"+num2)
}

