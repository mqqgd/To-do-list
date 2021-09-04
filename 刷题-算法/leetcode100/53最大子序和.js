// 给定一个整数整数数组nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和
// 输入： [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组[4,-1,2,1]的和最大，为6

//方法1   dp数组
// function maxSubArray(num) {
//     let len = num.length;
//     let dp = new Array(len);
//     dp[0] = num[0]; //边界条件
//     let max = dp[0];

//     for (let i = 1; i < len; i++) {
//         dp[i] = Math.max(dp[i - 1], 0) + num[i]; //转移方程
//         max = Math.max(max, dp[i]); //记录最大值
//     }

//     return max;

// }

function maxSubArray(num) {
    let len = num.length;
    let cur = num[0];
    let max = cur;

    for (let i = 1; i < len; i++) {
        cur = Math.max(cur, 0) + num[i];
        max = Math.max(max, cur);
    }
    return max;
}

let num = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let res = maxSubArray(num);
console.log(res)