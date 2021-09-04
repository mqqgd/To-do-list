// 给定一个非空字符串s，一个包含非空单词的列表wordDict，
// 判断s是否可以被空格拆分为一个或多个在字典中出现的单词

// 说明：1、拆分时可以重复使用字典中的单词  2、可以假设字典中没有重复的单词

// 输入：
// s = "leetcode"
// wordDict = ['leet', 'code']
// 输出:
//     true //因为 “leetcode”可以拆分为“leet”，“code"


function wordBreak(s, wordDict) {
    let len = s.length;
    let dp = new Array(len + 1).fill(true);

    for (let i = 0; i <= len; i++) { // i <= len   必须取到等号，不然会报错
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.indexOf(s.substring(j, i)) > -1) {
                // if (dp[j] && wordDict.indexOf(s.substr(j, i-j)) > -1){
                dp[i] = true;
                break;
            }
        }
    }
    return dp[len];
}

let s = 'leetcode';
wordDict = ["leet", "code"];
let res = wordBreak(s, wordDict);
console.log(res);