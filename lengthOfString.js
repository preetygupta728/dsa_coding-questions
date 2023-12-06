let str = "hare rama hare rama rama rama hare hare ";
let obj={}
for (let x of str) {
console.log(x)
  if( obj[x]){
      obj[x]+=1
  }else{
      obj[x]=1
  }
}
console.log(obj)
