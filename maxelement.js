// 5 Find the maximum element in an array


let arr=[ 2, 4, 3, 10, 1 ,-1,7,9,5];
let arr1=[]
let a=0;

for(let i=0;i<arr.length;i++){
    if(i==0){
        a=arr[i]
    }
    if(a<arr[i+1]){
        a=arr[i+1]

    }

}
console.log(a)


// const maxmin = (data,n) => {
//
//     let max=arr[0];
//     let min=arr[3];
//     for(let ele of data){
//         if(ele>max){
//             // console.log(ele)
//
//             max=ele
//
//         }
//         else if(ele<min){
//             console.log(ele,"ssssss")
//             min=ele
//         }
//
//     }
//     return max
// }
// const arr =[1, 2, 3, 4, 100];
// const n=22
// console.log(maxmin(arr,n));