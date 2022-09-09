// find duplicate in an array of N+1 Integers
let nums = [3,1,3,4,2]

let a=[]
let b=0;
function findDuplicate(nums) {

    for(let i=0;i<nums.length;i++){
        if(a.indexOf(nums[i])==-1){
            a.push(nums[i])

        }else{

            b=nums[i]
        }

    }

    return b
};


let ab=findDuplicate(nums);
console.log(ab)