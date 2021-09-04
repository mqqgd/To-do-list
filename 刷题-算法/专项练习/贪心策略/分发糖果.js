// 老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。

// 你需要按照以下要求，帮助老师给这些孩子分发糖果：

// 每个孩子至少分配到 1 个糖果。
// 评分更高的孩子必须比他两侧的邻位孩子获得更多的糖果。
// 那么这样下来，老师至少需要准备多少颗糖果呢

// 输入：[1,0,2]
// 输出：5
// 解释：你可以分别给这三个孩子分发 2、1、2 颗糖果。

function candy(ratings) {
    let len = ratings.length;
    let count = new Array(len).fill(1);   //每个人至少有一个糖果，先建个数组，每个孩子都分配一个糖果

    // 从左往右遍历，若右边的评分比左边的高，则右边的糖果数改为左边的糖果数加 1
    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            count[i] = count[i - 1] + 1;
        }
    }
    
    // 因为下面的for循环中，total没有统计最后一个孩子的糖果，所以这里total默认值为最后一个孩子的糖果数量
    let total = count[len - 1];

    // 从右往左遍历，左边的评分比右边的高，
    // 且左边孩子当前的糖果数不大于右边的糖果数，则左边的糖果数更新为右边的糖果数加 1
    for (let j = len - 1; j > 0; j--) {
        if (ratings[j] < ratings[j - 1] && count[j] <= count[j - 1]) {
            count[j - 1] = count[j] + 1;
        }
        total += count[j - 1];
    }
    return total;
}

let ratings = [1, 0, 2];
let res = candy(ratings);
console.log(res)