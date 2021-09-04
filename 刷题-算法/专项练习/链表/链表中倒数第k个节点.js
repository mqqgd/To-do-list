// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

// 给定一个链表: 1->2->3->4->5, 和 k = 2.
// 返回链表 4->5.

//方法1  双指针
function getKthFromEnd(head, k) {
    let fast = head,
        slow = head;

    for (let i = 0; i < k; i++) { //第一个指针先走K步
        fast = fast.next;
    }
    while (fast !== null) { //然后两个指针同时走，当第一个指针走到链表末尾，返回第二个指针
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}

var getKthFromEnd = function(head, k) {
    let res = [];
    while (head) {
        res.push(head);
        head = head.next;
    }
    return res[res.length - k];
};

//递归法

function getKthFromEnd(head, k) {
    let curr = head;
    let size = 0;
    while (curr) {
        size++;
        if (size > k) {
            return getKthFromEnd(head.next, k);
        }
        curr = curr.next;
    }
    return head;
};