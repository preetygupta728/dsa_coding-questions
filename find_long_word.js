
function reverse(str){
    let len=0
    let s= str.split(" ")
    for(let i=0;i<s.length;i++){
        if(s[i].length>len)
       len= s[i].length
    }
    // s= s.reverse().join("")
    console.log(s,len)

}
reverse("I love coding in javascript")
