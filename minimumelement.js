// 4 Find the minimum element in an array

let arr=[ 2, 4, 3, 2, 1 ,-1,7,9,5];
let arr1=[]
let a=0;

for(let i=0;i<arr.length;i++){

    if(i==0){
        a=arr[i]
    }


    if(a>arr[i+1]){
        a=arr[i+1]
    }

}
console.log(a)
