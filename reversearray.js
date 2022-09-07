// 3 Reverse the array
// approach 1: using reverse method
let arr=[1,2,3,3,2]

arr=arr.reverse()
console.log(arr)

// approach 2: using loop
let arr1=[1,2,3,3,2]
let arr2=[]
for(let i=arr1.length;i>0;i--){
    arr2.push(arr1[i-1])
}

console.log(arr2)
