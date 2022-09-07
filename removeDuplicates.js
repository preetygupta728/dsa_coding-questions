// 1. Remove duplicates from array
// approach 1: using indexof in for
let arr = [2, 4, 2, 5, 5, 7]
let arr1 = []

for (let i = 0; i < arr.length; i++) {

    if (arr1.indexOf(arr[i]) == -1) {
        arr1.push(arr[i])
    }

}
console.log(arr1, "approach1")
// ===================================
// approach 2: using includes in for
let arr2 = []

for (let i = 0; i < arr.length; i++) {

    if (!arr2.includes(arr[i])) {
        arr2.push(arr[i])
    }

}
console.log(arr2, "approach2")
// ===============================
//     approach 3: using includes in map
let arr3 = []


arr.map((val, i) => {

    if (!arr3.includes(val)) {
        arr3.push(val)
    }
})
console.log(arr3, "approach3")
// ======================================

// approach 4: using using indexof in map
let arr4 = []

arr.map((val, i) => {

    if (arr4.indexOf(val) == -1) {
        arr4.push(val)
    }
})
console.log(arr4, "approach4")
// =========================================