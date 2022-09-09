//
// 13. Merge two sorted arrays with O(1) extra space.
//     Input: ar1[] = {10};
// ar2[] = {2, 3};
// Output: ar1[] = {2}
// ar2[] = {3, 10}



let arr1=[10]
let arr2=[2,3]
let arr4=[]

let arr3=[...arr1,...arr2];
arr3.sort(function(a,b){
    return a-b
})
for (var i = 0; i < arr3.length; i++) {

    if(arr1.length>i){
        arr1[i]=arr3[i]

    }else{
        arr4.push(arr3[i])
        arr2=arr4
    }

}
console.log(arr1,arr2)
