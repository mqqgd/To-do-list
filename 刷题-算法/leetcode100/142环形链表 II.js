// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
// 输入：head = [3,2,0,-4], pos = 1
// 输出：返回索引为 1 的链表节点
// 解释：链表中有一个环，其尾部连接到第二个节点。

// 方法1  数组法
function detectCycle(head) {
    let res = [];
    let vHead = head;

    while (vHead) {
        if (res.includes(vHead)) {
            return vHead;
        } else {
            res.push(vHead);
        }
        vHead = vHead.next;
    }
    return null;
}

// 方法2   set法
function detectCycle(head) {
    let set = new Set();
    let vHead = head;

    while (vHead) {
        if (set.has(vHead)) {
            return vHead;
        }
        set.add(vHead);
        vHead = vHead.next;
    }
    return null;
}

// 方法3  快慢指针
function detectCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) { //判断是否有环
            while (head !== slow) { //确定有环后才能找环的入口
                // 两个指针，一个从头开始i，一个从相遇点开始，每走一步，直到再次相遇
                head = head.next;
                slow = slow.next;
            }
            return slow;
        }
        return null;
    }
}