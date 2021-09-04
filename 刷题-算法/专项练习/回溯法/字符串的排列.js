// 输入一个字符串，打印出该字符串中字符的所有排列。
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]


function permutation(s) {
    const cs = s.split("");
    console.log(instanceof(cs))
    const rs = new Set();
    const fn = function(str, cs) {
        for (let i = 0; i < cs.length; i++) {
            const [c] = cs.splice(i, 1);
            if (cs.length > 0) fn(str + c, cs);
            else rs.add(str + c);
            cs.splice(i, 0, c);
        }
    }
    fn("", cs);
    return [...rs];
};

let s = "abc";
let res = permutation(s);
console.log(res)