// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 进阶：你能尝试使用一趟扫描实现吗？

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : val);
}

function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0, head);

    let fast = dummy,
        slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    // slow.next = slow.next.next;
    // 等价于下面三行代码
    let delNode = slow.next;
    slow.next = delNode.next;
    delNode.next = null;

    return dummy;
}

let head = [1, 2, 3, 4, 5],
    n = 2;
let res = removeNthFromEnd(head, n);
console.log(res)