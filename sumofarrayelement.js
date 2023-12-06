// let l1 = [9,9,9,9,]
// let l2 = [9,9,9,9,9,9,9,9]

let l1 = [9,9,9,9,9,9,9,9]
let l2 = [9,9,9,9,]
/*
var addTwoNumbers = function(l1, l2) {
    let m=l1.length-1
    let n=l2.length-1;
    let inc=0
    if(m>=n){
        for(let i=0;i<=m;i++){
            let sum =0
            if(n>=i){
                sum= l1[i]+ l2[i]+inc
                if(sum>9){
                    inc=1
                    sum=sum.toString()
                    l1[i]=sum.charAt(1)
                    console.log(l1,l2[i],sum,i,inc)

                }else{
                    sum=sum.toString()
                    l1[i]=sum.charAt(0)
                    inc=0
                }
            }
            else{
                sum= l1[i]+inc
                console.log(l1[i],l1,sum,i,inc,"kjhgfrgthyj")

                if(sum>9){
                    inc=1
                    sum=sum.toString()
                    l1[i]=sum.charAt(1)
                }else{
                    sum=sum.toString()
                    l1[i]=sum.charAt(0)
                    inc=0
                }
            }
            if(inc>0){
                    l1[m+1]='1'
            }
        }
        return l1
    }
    else{
        for(let i=0;i<=n;i++){
            let sum =0
            if(m>=i){
                sum= l2[i]+ l1[i]+inc
                if(sum>9){
                    inc=1
                    sum=sum.toString()
                    l2[i]=sum.charAt(1)
                }else{
                    sum=sum.toString()
                    l2[i]=sum.charAt(0)
                    inc=0
                }
            }
            else{
                sum= l2[i]+inc


                if(sum>9){
                    inc=1
                    sum=sum.toString()
                    console.log(sum,inc,sum.charAt(1))
                    l2[i]=sum.charAt(1)
                }else{
                    sum=sum.toString()
                    l12[i]=sum.charAt(0)
                    inc=0
                }
            }
            if(inc>0){
                    l2[n+1]='1'
            }
        }
        return l2
    }



};
*/
var addTwoNumbers = function(l1, l2) {
    while (l1){

    }

}
console.log(addTwoNumbers(l1,l2))