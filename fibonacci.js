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