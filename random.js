// 1. Write a JavaScript function to check whether an 'input' is a string or not.
let check=[1, 2, 4, 0]
console.log(Object.prototype.toString.call(check) === '[object String]')

// 2. Write a JavaScript function to check whether a string is blank or not.
console.log(check.length === 0)

// 3. Write a JavaScript function to split a string and convert it into an array of words.
let str="Robin Singh"
console.log(str.split(' '))

// 4. Write a JavaScript function to extract a specified number of characters from a string.
console.log(str.slice(0,4))

// 5. Write a JavaScript function to convert a string into abbreviated form.
abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
   return split_names[0].charAt(0)+' '+split_names[1].charAt(0)+'.'
};
console.log(abbrev_name("Robin Singh"),"55");

// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
let email="robin_singh@gmail.com"
 let pemail=email.split('@');
  console.log(pemail[0].length/2)
let avg=pemail[0].length/2
let part1=pemail[0].substring(0,pemail[0].length-avg)

console.log(part1+'...@'+pemail[1]);
// 7. Write a JavaScript function that print parameterized string.

string_parameterize=function(str){
// console.log(str.trim().toLowerCase().replace(/\s/g, "-"))
return str.trim().toLowerCase().replace(/\s/g,'-')
}
console.log(string_parameterize("Robin Singh from USA."));

// 8. Write a JavaScript program to find the most frequent character in a given string.
// ("Madam") -> "a"
// ("civic") -> "c"
// ("HellloL223LLL") -> "L"
function frequent(){
let str= 'adsjfdsfsfjsdjfhacabcsbajda'
let obj={}
for(let x of str){
console.log(obj[x],"Zzzzzzz")

if(obj[x])
{obj[x]=obj[x]+1
}else{
obj[x]=1
}
}
console.log(obj,"hhhh")
}
frequent()
//-----------------------------------------------
const nonrepeatedcharacter = function(str) {

    var arr = []
    for (let i = 0; i < str.length; i++) {
    console.log(arr.includes(str[i]))
if(arr.includes(str[i])){
arr.splice(str[i],1)
}else{
arr.push(str[i])

}
    }
    return arr[0]

}
console.log(nonrepeatedcharacter('cbcbdde'))
//------------------------

function reversing(){
let Input="I evol uoy os !hcum"
Input=Input.split(' ')
let str=''
for(let i=0;i<Input.length;i++){
str+=Input[i].split('').reverse().join('')+' '
}
console.log(str)
}

reversing()

//--------------------------------

function permutation(){
let input='ABC'
for(let i=0;i<input.length-1;i++){
for(let j=1;j<input.length-1;j++){

let temp=input[j]
input[j]=input[j+1]
input[j+1]=temp
console.log(input)

}

}
}
permutation()
//---------------------------------------------

//  convert the characters of a string into the opposite case.

function islowerUpper(){
let str='inTerVieWbiT' //o/p: INtERvIEwBIt
let str1=''
for(let i=0;i<str.length;i++){
// console.log(str[i].toLowerCase===str[i],"Sdss")
if(str[i]===str[i].toLowerCase()){
str[i]=str[i].toUpperCase()
str1+=str[i].toUpperCase()
console.log(str,"Sdddd")

}else{
str1+=str[i].toLowerCase()
console.log(str1,"Sddddaaaa")

}
}
// console.log(str,"Sdddd")
}
islowerUpper()
// https://www.interviewbit.com/ibm-interview-questions/
// pangram check pangram
function panagram(){
let A = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

A=A.join('').split('')
console.log("Zz",A)

for(let i='65';i<'91';i++){
// console.log(String.fromCharCode( i).toLowerCase(),A.includes(String.fromCharCode( i).toLowerCase()),"Zz")
}
}
panagram()

function reverseNumber(num){

let num2=''
for(let i=0;i<4;i++){
if(num>0){
num2=num2+(num%10)
num=Math.round(num/10)
}
}
return num2
}
let num=4321
reverseNumber(num)

function countcharacter(str){
str=str.split('')
let countvar=[];
let count=1;

for(let i=0;i<str.length;i++){
console.log(str)

if(!countvar.includes(str[i])){
countvar.push(str[i])
}else{
if(str[i]==str[i+1]){
count+=1
}else{
count+=1

countvar.push(count)
count=1
}

}
}
countvar=countvar.join('')
console.log(countvar)
}
countcharacter('aaabbbccc')