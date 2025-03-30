
let users = {
    "Alice": 5000,
    "Bob": 3000
};

function transferMoney(sender, receiver, amount) {
    if (users[sender] >= amount) {
        users[sender] -= amount;
        users[receiver] += amount;
        console.log(`₹${amount} transferred from ${sender} to ${receiver}.`);
        console.log(`${sender} Balance: ₹${users[sender]}`);
        console.log(`${receiver} Balance: ₹${users[receiver]}`);
    } else {
        console.log(`Transfer failed! ${sender} has insufficient balance.`);
    }
}

// ✅ Test Cases
transferMoney("Alice", "Bob", 2000); // Successful transfer
transferMoney("Alice", "Bob", 6000); // Transfer failed (Insufficient balance)
 

