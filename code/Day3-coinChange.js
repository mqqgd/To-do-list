var coinChange = function(coins, amount) {
    let memo = new Array(amount + 1);
    memo.fill(amount + 1);

    memo[0] = 0;
    for (let i = 0; i < memo.length; i++) {
        for (let coin of coins) {
            if (i - coin < 0) continue;
            memo[i] = Math.min(memo[i], 1 + memo[i - coin]);

        }
    }
    return (memo[amount] === amount + 1) ? -1 : memo[amount];
}

let coins = [1, 2, 5],
    amount = 11
let res = coinChange(coins, amount);
console.log(res)