// 给你两个 非空 的链表，表示两个非负的整数。
// 它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储一位数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 链接：https://leetcode-cn.com/problems/add-two-numbers

//输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var addTwoNumbers = function(l1, l2) {
    let pre = new ListNode(0); //对于链表问题，返回结果为头结点时，通常需要先初始化一个预先指针 pre，该指针的下一个节点指向真正的头结点head。
    let cur = pre;
    let carry = 0;

    while (l1 || l2) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = x + y + carry;

        //判断是否需要进位
        carry = sum >= 10 ? 1 : 0; // ===    carry = Math.floor(sum / 10);
        //链表所存储的元素只能为余数
        sum = sum % 10;
        //向临时创建的链表追加元素
        cur.next = new ListNode(sum);
        cur = cur.next;

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }

    }
    if (carry === 1) {
        //如果两个链表全部遍历完毕后，进位值为 1，则在新链表最前方添加节点 11
        cur.next = new ListNode(carry);
    }


    return pre.next;


}

//使用预先指针的目的在于链表初始化时无可用节点值，而且链表构造过程需要指针移动，进而会导致头指针丢失，无法返回结果。