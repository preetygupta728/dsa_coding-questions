const a=[2,3,30,20,4,10]
let first=0;
let second=0
for(let i=0;i<a.length;i++){

    if(first<a[i]){
        third = second;

        second=first
        first=a[i]
        console.log(third,second,first,"ssss")

    }
    else if(second<a[i] ){
        // console.log(i,a[i],"jjjj")
        third = second;
        second=a[i]
        console.log(second,third,"ssffddx")

    } else if(third<a[i] ){
        // console.log(i,a[i],"jjjj")
        third=a[i]
        console.log(second,third,"fgfgff")

    }

}