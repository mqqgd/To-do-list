// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。
// 设计一个算法来计算你所能获取的最大利润。返回你可以从这笔交易中获取的最大利润。
// 如果你不能获取任何利润，返回 0 。

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；

// 你不能在买入前卖出股票。

//方法1   动态规划
// function maxProfit(prices) {
//     if (!prices || prices.length === 0) return 0;
//     let len = prices.length;
//     let dp = Array.from(new Array(len), () => new Array(2));
//     //边界条件
//     dp[0][0] = 0;
//     dp[0][1] = -prices[0];

//     for (let i = 1; i < len; i++) {
//         // 递推公式
//         dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
//         dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
//     }
//     // 最后肯定是手里没有持有股票利润才会最大，也就是卖出去了
//     return dp[len - 1][0];

// }

// 方法2   双指针
function maxProfit(prices) {
    if (!prices || prices.length === 0) return 0;
    let len = prices.length;
    let maxPro = 0;
    let min = prices[0];

    for (let i = 1; i < len; i++) {
        min = Math.min(min, prices[i]);
        maxPro = Math.max(maxPro, prices[i] - min);
    }
    return maxPro
}

// 方法3   单调栈   (双指针的另一种实现)   有问题
// function maxProfit(prices) {
//     if (!prices || prices.length === 0) return 0;
//     let len = prices.len;
//     let stack = [];
//     stack.push(prices[0]);
//     let max = 0;

//     for (let i = 1; i < len; i++) {
//         if (stack.peek() > prices[i]) {
//             stack.pop();
//             stack.push(prices[i])
//         } else {
//             max = Math.max(max, prices[i] - stack.peek());
//         }
//     }
//     return max;

//     function peek() {
//         return stack[stack.length - 1];
//     }; //查看栈顶元素
// }


let prices = [7, 1, 5, 3, 6, 4];
let res = maxProfit(prices);
console.log(res)