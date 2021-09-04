// 给定一个包含非负整数的 m x n 网格 grid ，
// 请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步

// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小

function minPathSum(grid) {
    let row = grid.length,
        col = grid[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i === 0 && j === 0) continue;
            if (i === 0) { //第一行只能从左边走过来
                grid[i][j] += grid[i][j - 1];
            } else if (j === 0) {
                grid[i][j] += grid[i - 1][j]; //第一列只能从上下来
            } else {
                // 取从上面下来和从左边过来的最小值  + 当前坐标值
                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
            }
        }
    }
    return grid[row - 1][col - 1];
}

let grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
let res = minPathSum(grid);
console.log(res)