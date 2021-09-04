function levelOrder(root) {
    let queue = [];
    let res = [];
    let temp = []; //辅助数组，保存每层的节点


    if (root) {
        queue.push(root);
        let len = queue.length;
        while (len) {
            root = queue.shift();
            if (root.left) {
                queue.push(root.left);
            }
            if (root.right) {
                queue.push(root.right);
            }
            len--;
            temp.push(root.val);
        }
        res.push(temp);
    }
    return res;
}