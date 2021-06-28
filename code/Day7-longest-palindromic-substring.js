/*
 *dp[i,j]=1表示str[i...j]是回文子串，那个必定存在dp[i+1,j-1]=1。
 *最长回文子串就能分解成一系列子问题，可以利用动态规划求解了
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // ababc
    // tag : dp
    if (!s || s.length === 0) return "";
    let res = s[0];

    const dp = [];

    // 倒着遍历简化操作
    for (let i = s.length - 1; i >= 0; i--) {
        dp[i] = [];

        for (let j = i; j < s.length; j++) {
            //case 1:一字母的回文
            if (j - i === 0) {
                dp[i][j] = true;
            }

            //case 2: 二字母的回文
            else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;

            else if (s[i] === s[j] && dp[i + 1][j - 1]) { //dp[i][j] 表示 s 中从 i 到 j（包括 i 和 j）是否可以形成回文
                // state transition
                dp[i][j] = true;
            }

            if (dp[i][j] && j - i + 1 > res.length) {
                // update res
                res = s.slice(i, j + 1);
            }
        }
    }

    return res;
};

let s = "ababc";
console.log(longestPalindrome(s));