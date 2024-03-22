// 14. fibonacci
function fibonacci() {
    let fo = 0
    // console.log(fo)
    let f1 = 1
    // console.log(f1)
    let fi = 0
    for (let i = 0; i < 6; i++) {
        fi = fo + f1
        console.log(fi)
        fo = f1
        f1 = fi
    }
}
fibonacci()


//--------------
function fibonacci1() {

let a0=0;
let a1=1;
let j=1;
let str=[a0,a1];
for(let i=1;i<10;i++){
let a=str[i-1]+str[i]
str.push(a)
}
console.log(str,"sssss/ss")

}
fibonacci1()