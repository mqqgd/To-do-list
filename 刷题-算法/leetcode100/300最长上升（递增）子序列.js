// 给定一个无序的整数数组，找到其中最长（严格）上升子序列的长度
// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

function lengthOfLIS(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    let len = nums.length;
    let dp = new Array(len).fill(1);
    let max = 1;

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            // nums[i] > nums[j], 说明nums[i]可以和nums[j]结尾的上升序列可以构成一个新的上升序列
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);

            }
            max = Math.max(max, dp[i]);

        }
    }
    return max;
}

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
let res = lengthOfLIS(nums);
console.log(res)