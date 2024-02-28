// find duplicate in an array of N+1 Integers
let nums = [3,1,3,4,1,2]

let a=[]
let b=[];
function findDuplicate(nums) {

    for(let i=0;i<nums.length;i++){
        if(a.indexOf(nums[i])==-1){
            a.push(nums[i])

        }else{
            b.push(nums[i])
            // b= a.push(nums[i])+nums[i]
        }

    }

    return b
};


let ab=findDuplicate(nums);
console.log(ab)


///////////
// find duplicate in an array of N+1 Integers
let arr = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];

function findDuplicate(nums) {
    let ob={}
    for(let i of nums){
        // console.log(i)

        if(ob[i]) {
            ob[i] =ob[i] +1
            console.log(i)
        }
        else{
            ob[i] =1
        }

    }

    return ob
};


let dupl=findDuplicate(arr);
console.log(dupl)