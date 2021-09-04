// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。


// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
var permute = function(nums) {
    let res = [];
    backtrack(nums, []);
    return res;

    function backtrack(nums, track) {
        if (track.length == nums.length) {
            // res.push([...track]);  //直接push(track)的话，得到的都是空列表的集合
            res.push(track.slice());
            // slice() 方法可从已有的数组中返回选定的元素。左开右闭
            // console.log([...track]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!track.includes(nums[i])) {
                track.push(nums[i]);
                backtrack(nums, track);
                track.pop();
            }

        }

    }
};