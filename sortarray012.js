// 6 Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo
// arr[]= {0 2 1 2 0}
// approach without sorting
let arr = [0, 2, 1, 2, 0]
let temp = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] > arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr)


// approach with sorting
// arr.sort() for ascending  //desc b-a
let arr2 = [0, 2, 1, 2, 0]
arr2 = arr2.sort(function (a, b) {
    return a - b
})
console.log(arr2)
