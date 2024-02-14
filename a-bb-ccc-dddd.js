let a=""
let n=4
// //i/p=nothing
// //o/p=a-bb-ccc-dddd
//
// for(let i=0;i<n;i++){
//
//     for(let j=1;j<=i+1;j++){
//         a=a+(String.fromCharCode(i+65)).toLowerCase()
//
//     }
//     console.log(i+1,n,"xd")
//
//     if(i+1<n){
//         a=a+'-'
//         // a=a+'\n'
//     }
// }
//
// console.log(a)


////////////////////////////////
let b=""
//i/p=nothing
//o/p=
// a
// bb
// ccc
// dddd

for(let i=0;i<n;i++){

    for(let j=1;j<=i+1;j++){
        b=b+(String.fromCharCode(i+65)).toLowerCase()

    }

    if(i+1<n){
        b=b+'\n'
    }
}

console.log(b)


///////////////


////////////////////////////////


let c=""
//i/p=nothing
//o/p=
// a
// ab
// abc
// abcd


for(let i=0;i<n;i++){

    for(let j=1;j<=i+1;j++){
        c=c+(String.fromCharCode(j-1+65)).toLowerCase()

    }

    if(i+1<n){
        c=c+'\n'
    }
}

console.log(c)