12. Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
    There is only one repeated number in nums, return this repeated number.
    You must solve the problem without modifying the array nums and uses only constant extra space.

*/
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