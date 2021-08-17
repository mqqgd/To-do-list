// 给定两个字符串，输出两个字符串的最长公共子串，
// 保证两个字符串的最长公共子串存在且唯一

// 思路：
// 子序列可以不连续，子串必须连续
// dp[i][j]表示字符串str1中第i个字符和str2中第j个字符为最后一个元素所构成的最长公共子串
//条件：判断这两个字符是否相等，相等就能构成公共子串，还需要计算前面相等字符的个数，即dp[i-1][j-1]

// 方法1 
function LCS(str1, str2) {
    let maxLength = 0;
    let maxLastIndex = 0;
    let len1 = str1.length,
        len2 = str2.length;
    // let dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0));
    // let dp = new Array(len1 + 1).fill(new Array(len2 + 1).fill(0)); //  X
    let dp = new Array(len1 + 1).fill(null).map(() => new Array(len2 + 1).fill(0))


    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (str1.charAt(i) === str2.charAt(j)) {
                dp[i + 1][j + 1] = dp[i][j] + 1;
                if (dp[i + 1][j + 1] > maxLength) {
                    maxLength = dp[i + 1][j + 1];
                    maxLastIndex = i;
                }
            } else {
                dp[i + 1][j + 1] = 0;
            }
        }
    }
    return str1.slice(maxLastIndex - maxLength + 1, maxLastIndex + 1);
}

//方法2   将二维数组变为一维数组
// function LCS(str1, str2) {
//     let maxLength = 0; //记录最长公共子串的长度
//     let maxLastIndex = 0; //记录最长公共子串最后一个元素在字符串str1中的位置
//     let len1 = str1.length,
//         len2 = str2.length;
//     let dp = new Array(len2 + 1).fill(0);

//     for (let i = 0; i < len1; i++) {
//         for (let j = len2 - 1; j >= 0; j--) { //这里是倒叙
//             if (str1.charAt(i) === str2.charAt(j)) { //递归公式，两个字符相等的情况
//                 dp[j + 1] = dp[j] + 1;

//                 if (dp[j + 1] > maxLength) { //遇到更长的子串，要更新
//                     maxLength = dp[j + 1]; //记录最长子串的长度以及最后一个元素的位置
//                     maxLastIndex = i;
//                 }
//             } else {
//                 dp[j + 1] = 0; //两个字符不相等的情况
//             }

//         }

//     }
//     return str1.slice(maxLastIndex - maxLength + 1, maxLastIndex + 1); //截取出子串
// }

//方法3   思想是方法2，只是写法不同    有问题
//     if (!str1 || !str2 || str1.length === 0 || str2.length === 0) {
//         return 0;
//     }
//     let max = 0;
//     let len1 = str1.length,
//         len2 = str2.length;
//     let dp = new Array(len2 + 1).fill(0);

//     for (let i = 0; i < len1; i++) {
//         for (let j = len2 - 1; j >= 0; j--) {
//             if (str1.charAt(i) === str2.charAt(j)) {
//                 dp[j + 1] = dp[j] + 1;
//             } else {
//                 dp[j + 1] = 0;
//             }
//             max = Math.max(max, dp[j + 1]);

//         }
//     }
//     return max;
// }

let str1 = "1AB2345CD";
let str2 = "12345EF";
var res = LCS(str1, str2);
console.log(res)