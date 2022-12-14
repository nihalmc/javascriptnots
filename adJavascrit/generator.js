
/*
function normalFuncton(){
    console.log('hello');
    console.log('world');
}

//normalFuncton() */

function* genetarFuncton(){
    yield 'hello'
    yield 'world'
}

const genetarObject=genetarFuncton()
for(const word of genetarObject){
    console.log(word);
}
