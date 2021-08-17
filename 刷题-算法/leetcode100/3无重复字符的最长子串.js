// 给定一个字符串s ，请你找出其中不含有重复字符的最长子串的长度。

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

//方法1：使用哈希集合（一种数据结构）  Set
// 在左指针向右移动的时候，我们从哈希集合中移除一个字符，
// 在右指针向右移动的时候，我们往哈希集合中添加一个字符。
var lengthOfLongestSubstring = function(s) {
    //哈希集合记录每个字符是否出现过
    const hash = new Set();
    const len = s.length;

    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let r = -1,
        ans = 0;
    for (let i = 0; i < len; ++i) {
        if (i) {
            // 左指针向右移动一格，移除一个字符
            hash.delete(s.charAt(i - 1));
        }
        while (r + 1 < len && !hash.has(s.charAt(r + 1))) {
            //不断移动右指针
            hash.add(s.charAt(r + 1));
            ++r;
        }
        // 第 i 到 r 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, r - i + 1);
    }
    return ans;
}