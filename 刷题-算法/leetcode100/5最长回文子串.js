// 给你一个字符串s, 找到s中最长的回文子串
// 输入  s = 'babad'
// 输出  'bab'

// function longestPalindrome(s) {
//     if (!s || s.length === 0) return "";
//     let res = s[0];
//     let dp = [];
//     for (let i = s.length - 1; i >= 0; i--) {
//         dp[i] = [];
//         for (let j = i; j < s.length; j++) {
//             if (j - i === 0) dp[i][j] = true;
//             else if (j - i === 1 && s[i] === s[j]) {
//                 dp[i][j] = true;
//             } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
//                 dp[i][j] = true;
//             }

//             if (dp[i][j] && j - i + 1 > res.length) {
//                 res = s.slice(i, j + 1);
//             }
//         }
//     }
//     return res

// }

function longestPalindrome(s) {
    if (!s || s.length === 0) {
        return 0;
    }
    let res = s[0];
    let len = s.length;
    let dp = Array.from(new Array(len + 1), () => new Array(len + 1).fill(0));

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (j === i) dp[i][j] = true;
            else if (j - i <= 2) {
                dp[i][j] = true;
            } else if (j - i > 2) {
                dp[i][j] = dp[i + 1][j - 1];
            }

            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.slice(i, j + 1);
            }
        }
    }
    return res;
}

let s = 'babad';
let result = longestPalindrome(s);
console.log(result)