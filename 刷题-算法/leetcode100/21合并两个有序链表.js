// 将两个升序链表合并为一个新的 升序 链表并返回。
// 新链表是通过拼接给定的两个链表的所有节点组成的。

// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

function mergeTwoList(l1, l2) {
    let mergeHead = new ListNode();
    let cur = mergeHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 === null ? l2 : l1;
    return mergeHead.next;
}