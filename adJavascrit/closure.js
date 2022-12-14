function outer(){
    let counter =0
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
    
}
 const fn = outer()
fn()
fn()
//output 1 2

/*->A cosure is the combition of a function buudled together with referenses to its surrouding state.
colures are created every time a function is created functon creation time 
->in javasript,when were return a functoin from another function comination of the function definiton 
along with the function defition have an associated aersistent memory which could hold on to live data 
between execution .the funtion and its scope chain is what is called a closure in javasript*/