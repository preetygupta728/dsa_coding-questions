
// merge and sort
var mergesort = function() {
    let  nums1 = [1,2,3];
    let  nums2 = [2,5,6];
    let n = 3;
    let m = 3;
    let nums3=[...nums1 , ...nums2];
    nums3=nums3.sort()
    return nums3
};
console.log(mergesort())

// one array
function merge() {
    let  nums1 = [1,2,3];
    let  nums2 = [2,5,6];
    let n = 3;
    let m = 3;
    let i=n-1;
    let j=m-1;
    let k=m+n-1;
    while(k>=0){
        if(i>=0 &&j>=0){
            if(nums1[i]>=nums2[j]){
                nums1[k--]=nums1[i--]
            }else{
                nums1[k--]=nums2[j--]
            }}else if (j>=0){
            nums1[k--]=nums2[j--]     }
        else{      break
        }
    }
    return nums1
}
console.log(merge())