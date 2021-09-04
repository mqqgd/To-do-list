function wordBreak(s, wordDict) {
    let len = s.length;
    let dp = new Array(len + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i <= len; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.indexOf(s.substring(j, i)) > -1) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[len];
}

//test
let s = "catsandog",
    wordDict = ["cats", "dog", "sand", "and", "cat"];
let res = wordBreak(s, wordDict);
console.log(res);