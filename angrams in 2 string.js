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
//

function anagram(){
    let str="listen"
    let str2="silent"
    let a=""
    let b=""

    let var1=str.split("").sort()
    let var2=str2.split("").sort()
    console.log(var1,var2)

    for(let i=0;i<var1.length;i++)
    {
        a=a+var1[i]
        b=b+var2[i]

    }
    console.log(a,b)

    if(a==b){
        return "true"
    }
}
console.log(anagram())
