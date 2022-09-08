
// 11. Minimise the maximum difference between heights [V.IMP]
// let arr = [1, 5, 8, 10]
let arr = [3, 9, 12, 16, 20]
let arr1=[]
let diff=0
let min=0;
let max=0;
for(let i=0;i<arr.length;i++){

    if((arr[i]-k)<1){
        arr1[i]=arr[i]+k
    }else{
        arr1[i]=arr[i]-k
    }

    min=arr1[0];
    max=arr1[0];

    if(min>arr1[i]){
        min=arr1[i]
    }

    if(max<arr1[i]){
        max=arr1[i]
    }

    diff= max-min

}
console.log(diff,"Gghhjjddddd")
