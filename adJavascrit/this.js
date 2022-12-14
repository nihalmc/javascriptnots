//not Raspondinding
//function sayMyName(name){
  //  console.log('my name is ${name}');
//} 

//sayMyName('Nihal mc')
//sayMyName('Walter white')

//lmiplict binding
const Person = { 
    name: 'Nihal',
   sayMyName: function(){
        console.log(`My name is ${this.name} `);
    },
} 

//Person.sayMyName();

//Explicit Binding


 function sayMyName (){
    console.log(`My Name is ${this.name}`);
 }


//sayMyName.call(Person)

//New banding

function Person(name){
    //this = {}
    this.name = name
}

const p1 = new Person('arguments')
const p2 = new Person('Nihal')

//console.log(p1.name, p2.name);

//default function

globalThis.name='superman'
sayMyName()



//This

/* The javasript the keword which is used in a funtion, refers to the object it belog to 
>it makes functon is call reusable by letting you decide the object value this value this 
value determined enterly by how a function is called 

how to  determine'this?
>new banding 
>Explicit binding 
>implicit binding
>Default binding */