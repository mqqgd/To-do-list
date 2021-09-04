// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
// 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]

function reverseBetween(head, left, right) {
    let pHead = new ListNode(0, head);
    let pre = pHead;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }
    let cur = pre.next;
    for (let j = 0; j < right - left; j++) {
        let next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return pHead.next;
}