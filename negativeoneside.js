
// 7 Move all the negative elements to one side of the array
// I-// -12, 11, -13, -5, 6, -7, 5, -3, -6
let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
// /O/ -1 -3 -7 4 5 6 2 8 9


for(let i=0;i<arr.length;i++){

    for(let j=i+1;j<arr.length;j++){

        if(arr[i]>0 && arr[j]<0){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }


    }

}
console.log(arr)

