// 每次从数组中任意选择两个石头，相互销毁，求最终剩下的一块石头最小可重量

// 思路：把数组中所有元素的和sum，分为两部分，若sum为偶数，则这两部分的值都是sum/2；
// 若为奇数，则一部分是sum/2，另一部分是sum/2+1，取较小的sum/2

// 即，从数组中选择一些元素，让他们的和尽可能接近sum/2

function lastStoneWeightII(stones) {
    let len = stones.length;
    let sum = 0;
    for (let num of stones) {
        sum += num;
    }

    let capacity = sum >> 1; //背包的容量
    //dp[i][j]：前i个石头放进容量为j的背包所能获取的最大重量
    let dp = Array.from(new Array(len + 1), () => new Array(capacity + 1).fill(null));

    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (j > stones[i - 1]) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - stones[i - 1]] + stones[i - 1]);
            } else {
                dp[i][j] = dp[i - 1][j]; //背包容量放不下石头了
            }
        }
    }
    // sum - dp[len][capacity]是一部分，dp[len][capacity]是另一部分
    return (sum - dp[len][capacity]) - dp[len][capacity];
}

let stones = [31, 26, 33, 21, 40];
let res = lastStoneWeightII(stones);
console.log(res)