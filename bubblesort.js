/* Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent
elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and
worst-case time complexity is quite high.
 Time Complexity: O(N2)
 Auxiliary Space: O(1)
 */
const bubblesort = (data) => {

  for(let i=0; i<data.length;i++){
    let temp=0;
    for(let j=i+1;j<data.length;j++){
    if(data[i]>data[j]){
      temp=data[i]
      data[i]=data[j]
      data[j]=temp
    }
  }
}

return data
}
let unSortArr = [4,-1,34,9,-9,103]

console.log(bubblesort(unSortArr));