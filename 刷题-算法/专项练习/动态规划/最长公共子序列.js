// 子序列不是连续的，只要前面有相同的子序列
// 与子串递推公式不同的地方：
// 若当前比较的字符不一样，那么当前字符串之前的子序列不会为0(子串不一样，会为0)
// 即，当前字符不一样，则将str1往前退一个字符dp[i-1][j]，或者将str2往前退一个字符dp[i][j-1]，记录最大值即可


//方法1  二维数组
// function longestCommonSubsequence(str1, str2) {
//     if (!str1 || !str2 || str1.length === 0 || str2.length === 0) {
//         return 0;
//     }
//     let len1 = str1.length,
//         len2 = str2.length;
//     // let dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0)); //√
//     let dp = new Array(len1 + 1).fill(new Array(len2 + 1).fill(0)) //√

//     for (let i = 0; i < len1; i++) {
//         for (let j = 0; j < len2; j++) {
//             if (str1[i] === str2[j]) {
//                 dp[i + 1][j + 1] = dp[i][j] + 1;
//             } else {
//                 dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j])
//             }
//         }
//     }
//     return dp[len1][len2];
// }

//方法2   一维数组
//注意：若当前字符相同的时候，会依赖左上角的值，这个值有可能会被上一步计算的时候就被替换掉，必须先保存下
function longestCommonSubsequence(str1, str2) {
    if (!str1 || !str2 || str1.length === 0 || str2.length === 0) {
        return 0;
    }
    let len1 = str1.length,
        len2 = str2.length;
    let dp = new Array(len2 + 1).fill(0);

    for (let i = 0; i < len1; i++) {
        let last = 0;
        for (let j = 0; j < len2; j++) {
            let temp = dp[j + 1]; //dp[j+1]这个值会被替换，所以在替换之前需要先保存下来
            if (str1.charAt(i) === str2.charAt(j)) {
                dp[j + 1] = last + 1;
            } else {
                dp[j + 1] = Math.max(dp[j + 1], dp[j]);
            }
            last = temp;
        }
    }
    return dp[len2];
}

//by司徒正美
// function maxLong(str1, str2) {
//     var m = str1.length
//     var n = str2.length
//     var dp = [new Array(n + 1).fill(0)] //第一行全是0
//     for (var i = 1; i <= m; i++) { //一共有m+1行
//         dp[i] = [0] //第一列全是0
//         for (var j = 1; j <= n; j++) { //一共有n+1列
//             if (str1[i - 1] === str2[j - 1]) {
//                 //注意这里，str1的第一个字符是在第二列中，因此要减1，str2同理
//                 dp[i][j] = dp[i - 1][j - 1] + 1 //对角＋1
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
//             }
//         }
//     }
//     return dp[m][n];
// }




//test
let str1 = 'people',
    str2 = 'eplm';
let res = maxLong(str1, str2);
console.log(res)