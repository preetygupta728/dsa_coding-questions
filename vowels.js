let str="hello, world!"

function anagram(){
    let var1=["a","e","i","o","u"]
    let a=""
    let b=""
    let count=0
    str=str.split("")

    for(let i=0;i<str.length;i++)
    {

// if(  var1.indexOf(str[i])!==-1){
        if(  var1.includes(str[i])==false){

            count=   count+1

        }
        console.log(count,str.length)


    }}
console.log(anagram())
