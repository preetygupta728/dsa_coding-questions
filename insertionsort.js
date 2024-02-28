/* Space Complexity: O(1)
Time Complexity: O(n), O(n* n), O(n* n) for Best, Average, Worst cases respectively. */
const insertionsort = (data) => {

  // let arr=[data[0]]
  for(let i=1; i<data.length;i++){

    for(let j=i-1;j>=0;j--){

    if(data[j+1]<data[j]){
      let temp=data[j+1]
      data[j+1]=data[j]
      data[j]=temp
    }
  }

}

return data
}
let unSortArr =[ 8, 3, 5, 1, 4, 2 ]
console.log(insertionsort(unSortArr))
/*
function insertionSort(arr, n)
{
    let i, key, j;
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

         */
/* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position *//*

        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
} */
