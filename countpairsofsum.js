/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // console.log(nums,target)

    for(let i=0;i<nums.length;i++){
        let t=target-nums[i]
        console.log(t)
        console.log(nums.indexOf(t)!=-1)

// for(let j=i+1;j<nums.length;j++){
        // console.log(i,j)
        // console.log(nums[i],nums[j],target)
        //
        // if(nums.indexOf(t)!=-1){
        // if(nums[i]+nums[nums.indexOf(t)]==target) {
        //     console.log(i,nums.indexOf(t),"nbvqqqqqqqqqqq")
        //
        //     return [i, nums.indexOf(t)]
        // }
        // }
        // }
    }

};
twoSum([3,2,4]
    ,6)



   const result = []

   const fn = (x) => x * 2
   const args = [4], t = 35, cancelT = 190

   const start = performance.now()

   const log = (...argsArr) => {
       const diff = Math.floor(performance.now() - start)
       result.push({"time": diff, "returned": fn(...argsArr)})
   }

   const cancel = cancellable(log, args, t);

   setTimeout(() => {
      cancel()
   }, cancelT)

   setTimeout(() => {
     console.log(result)  // [
                          //      {"time":0,"returned":8},
                          //      {"time":35,"returned":8},
                          //      {"time":70,"returned":8},
                          //      {"time":105,"returned":8},
                          //      {"time":140,"returned":8},
                          //      {"time":175,"returned":8}
                          //  ]
   }, cancelT + t + 15)
