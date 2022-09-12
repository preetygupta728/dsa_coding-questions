// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
let sum = 6
let arr = [1, 5, 7, 1]
let arr1 = []
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {

        if (i != j && j > i) {
            let a = arr[i] + arr[j]
            if (a == sum) {
                arr1.push([arr[i], arr[j]])

            }
        }
    }
}
console.log(arr1.length)
