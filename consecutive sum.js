const consecutive = (data,n) => {

    let arr=[data[0]]
    for(let i=1; i<data.length;i++){
        arr.push(data[i]+arr[i-1])
    }

    return arr
}
const arr =[1,3,5,7];

console.log(consecutive(arr));