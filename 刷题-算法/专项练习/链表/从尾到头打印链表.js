// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

// 输入：head = [1,3,2]
// 输出：[2,3,1]

// 方法1
function reversePrint(head) {
    let arr = [];
    while (head !== null) {
        arr.unshift((head.val));
        head = head.next;
    }
    return arr;
}

// 方法2
function reversePrint(head) {
    if (head == null) {
        return;
    }
    reversePrint(head.next);
    return head.val;
}