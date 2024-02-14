let str="Hello World"
let reverseStringBeforesSpace=str.split(' ')
let reversed='';

for(let i=0; i<reverseStringBeforesSpace.length; i++){
    let str=reverseStringBeforesSpace[i].split('').reverse().join('')
    reversed=reversed+ ' '+str
}


console.log(reversed)
