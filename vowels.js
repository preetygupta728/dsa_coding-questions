let str="hello, world!"

function countVowel(){
    let var1=["a","e","i","o","u"]
    let a=""
    let b=""
    let count=0
    str=str.split("")

    for(let i=0;i<str.length;i++)
    {

        if(  var1.includes(str[i])){

            count=   count+1

        }


    }
    console.log(count)
}

console.log(countVowel())


// let str="hello, world!"
// str=str.split('')
// console.log(str)
// let vowel="aeiou"
// vowel=vowel.split('')
// let count=0
// for(let i=0;i<str.length;i++){
//
//     console.log(vowel.includes(str[i]))
//     if(vowel.includes(str[i]))
//     {  count=count+1
//     }
//
// }