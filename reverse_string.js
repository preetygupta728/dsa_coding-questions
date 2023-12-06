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
