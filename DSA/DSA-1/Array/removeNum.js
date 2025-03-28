let nums=[3,2,1,4,6]
let elem=1

function remove(nums){
    let j=0
    let len=nums.length
    for(let i=0;i<len;i++){
        let item=nums[i]
        if(item!==elem){
            nums[j]=item
            j++
        }
    }
    nums.length=j

    return nums
}


console.log(remove(nums,1))