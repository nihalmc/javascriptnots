//string
const str='Nihalmc'
for(const char of str){
    console.log(char);
}
console.log('');

//Array

const arr=['N','I','H','A','L']
for(const item of arr){
    console.log(item);
}

//lteratorProtocol

const obj={
    [Symbol.iterator]:function(){
        let setp =0
        const iterator ={
            next:function(){
            setp++
        if(setp==1){
            return { value:'Hello', done:false}
        }
        if(setp==2){
            return { value:'World', done:false}
        }
        return { value:undefined, done:true}
        }
        }
        return iterator
    }
}

for (const word of obj){
    console.log(word);
}