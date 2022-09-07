
// 8 find union of 2 arrays
// approach 1: using indexof in for

let arr=[1,7,3,9]
let arr1=[5,7,8,9]
let arr2=[]
let arr3=[...arr,...arr1]
for(let i=0;i<arr3.length;i++){
    if(arr2.indexOf(arr3[i])==-1){
        arr2.push(arr3[i])
    }
}
console.log(arr2)
