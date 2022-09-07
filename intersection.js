// 2 find intersection of 2 arrays
// approach 1: using indexof in for

let arr = [1, 7, 3, 9]
let arr1 = [5, 7, 8, 9]
let arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (arr1.includes(arr[i])) {
        arr2.push(arr[i])
    }

}
console.log(arr2)