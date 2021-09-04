// 给定一个链表，判断链表中是否有环。

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
// 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

// 如果链表中存在环，则返回 true 。 否则，返回 false 。

// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。

//哈希表法
var hasCycle = function(head) {
    var map = new Map()
    while (head) {
        if (map.has(head)) {
            return true
        }
        map.set(head, 0)
        head = head.next
    }
    return false
}

//   set
function hasCycle(head) {
    let set = new Set();
    let temp = head;
    while (temp) {
        if (set.has(temp)) {
            return true;
        } else {
            set.add(temp);
        }
        temp = temp.next;
    }
    return false;
};

var hasCycle = function(head) {
    if (head == null || head.next == null) {
        return false
    }

    let fast = slow = head
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }

    return false
};

//数组
const hasCycle = function(head) {
    const res = [];
    while (head) {
        if (res.includes(head)) {
            return true;
        }
        res.push(head);
        head = head.next;
    }
    return false;
};


//   JSON.stringify方法会自动检测传入的对象是否为环，
//   如果JSON.stringify成功执行，那说明传入的对象一定不是环


const hasCycle = function(head) {
    try {
        JSON.stringify(head);
        return false;
    } catch {
        return true;
    }
};

// 双指针法
var hasCycle4 = function(head) {
    var slow = head,
        fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) return true //相遇，说明有环，直接返回true
    }
    //否则没环
    return false
}