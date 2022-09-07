// 9 Given an array, rotate the array by one position in clock-wise direction.
    let arr= [9, 8, 7, 6, 4, 2, 1, 3]
// Output:
// 3 9 8 7 6 4 2 1

let temp=arr[arr.length-1]
for(let i=arr.length-1;i>0;i--){
    arr[i]=arr[i-1]
}
arr[0]=temp
console.log(arr)