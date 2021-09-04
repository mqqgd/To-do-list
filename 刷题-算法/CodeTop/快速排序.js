// 给你一个整数数组 nums，请你将该数组升序排列

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]

function sortArray(nums) {
    let count = 0,
        sorted = true
    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            count++
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
                sorted = false
            }
        }
        if (sorted) {
            break
        }
    }
    console.log(count)
    return nums
}

// 时间复杂度分析
// 最好情况：数组本身就是有序的，执行一次内层循环就可以，T(n) = O(n)

// 最坏情况：数组本身是倒序的，T(n) = O(n^2)

// 平均情况：T(n) = O(n^2)