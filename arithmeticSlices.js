var numberOfArithmeticSlices = function(nums) {
    if (nums.length < 3) return 0

    let res = 0
    let diff = 0

    for (let i = 1; i < nums.length; i++) {
        let x = nums[i]- nums[i-1]
        if (diff != x) return diff
        if (diff == x && i >2 ) res++
    }

    return diff
};