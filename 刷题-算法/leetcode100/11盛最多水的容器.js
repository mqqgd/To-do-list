// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。


//固定一侧柱子
//如果固定左边的柱子，移动右边的柱子，
// 那么水的高度一定不会增加，且宽度一定减少，所以水的面积一定减少。
var maxArea = function(heigtht) {
    let i = 0,
        j = height.length - 1;
    let res = 0;

    while (i < j) {
        let area = (j - i) * Math.min(heigtht[i], heigtht[j]);
        if (heigth[i] < heigth[j]) {
            i++; //左边柱子短，则固定右边柱子。
        } else {
            j--;
        }
        res = Math.max(res, area);
    }
    return res;
}