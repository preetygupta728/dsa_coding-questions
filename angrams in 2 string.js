function anagram(){
    let str="listen"
    let str2="silent"
    let var1=str.split("").sort().join("")
    let var2=str2.split("").sort().join("")

    console.log(var1)
// let unique=[...new Set(arr)]
    console.log(typeof var2,str==str2)
    if(var1==var2){
        return "true"
    }}
console.log(anagram())
