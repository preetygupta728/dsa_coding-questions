// 15. duplicate zeroes
// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

var duplicateZeroes = function(arr) {

    for (var i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i+=1
        }
    }
    return arr
};
console.log(duplicateZeroes( [1,0,2,3,0,4,5,0]))
// new array
let newarr=[]
var duplicateZeros = function(arr) {
    for(let i=0;i<arr.length;i++){
        if(newarr.length<arr.length){
            newarr.push(arr[i])
            if(arr[i]==0){
                newarr.push(arr[i])
            }
        }}
    return newarr
};

console.log(duplicateZeros( [1,0,2,3,0,4,5,0]))