var str ="qwerty"
// let a=''
// console.log(str.reverse())
// for(let i=str.length-1;i>=0;i--){
//     a=a+str[i]
//     console.log(a,str[i])
//
// }
function reverse(str){
   let s= str.split("")
    s= s.reverse().join("")
    console.log(s)

}
reverse(str)
// ----------

let input = "geeks quiz practice code"
// Output: s = “code practice quiz geeks”
let inp=input.split(' ');
console.log(inp)
let strng=''
for(let i=0;i<inp.length;i++){
strng=inp[i]+' '+strng
}

console.log(strng,"hi")
// -----------

let revStr=''
for(let i=inp.length-1;i>=0;i--){
console.log(inp[i])
revStr=revStr+( revStr?' ':'')+inp[i]
// let reverseWord
}
console.log(revStr)

// -----------------------
let input1 = "hello World!"

// Output: s = “code practice quiz geeks”
let inp1=input1.split(' ');
// console.log(input1.split('').reverse().join('').split(' ').reverse().join(' '),">>>aaaa")
let strng1=''
for(let i=0;i<inp1.length;i++){
strng1+=inp1[i].split('').reverse().join('')+' '
}

console.log(strng1,">>>>>")