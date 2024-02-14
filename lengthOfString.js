let str = "hhhhhellooooosssssssssss";
let obj={}
for (let x=0;x<str.length ;x++) {
console.log(str[x],obj)
  if( obj[str[x]]){
      obj[str[x]]+=1
  }else{
      obj[str[x]]=1
  }
}
console.log(obj)
