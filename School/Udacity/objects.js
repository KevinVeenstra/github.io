/*
// * Programming Quiz: Bank Accounts 1 (7-3)
 

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    sumarry: function printAccountSummary() {
      console.log("welcome! Your balance is currently " + savingsAccount.balance 
      + "and your interest rate is " + savingsAccount.interestRatePercent + "%"); 
    },
};

savingsAccount.deposit(50);
console.log(savingsAccount.balance);
savingsAccount.deposit(50);
console.log(savingsAccount.balance);
*/


/*
// * Programming Quiz: Facebook Friends (7-5)

var facebookprofile = {
    name: "Kevin Veenstra",
    friends: 9,
    messages: ["je moeder ", "Batman is stiekem ook Sinterklaas ", 
    "Poes zo kan ik toch geen huiswerk maken "],
    postMessage(message) {
        facebookprofile.messages.push(message);
    },
    deleteMessage(index) {
        facebookprofile.messages.splice(index, 1);
    },
    addFriend() {
        facebookprofile.friends += 1;
    },
    removeFriend() {
        facebookprofile.friends = facebookprofile.friends -= 1;
    },
    
  };

  facebookprofile.postMessage("This is a new message");
  console.log(facebookprofile.messages);
  facebookprofile.deleteMessage(2);
  console.log(facebookprofile.messages);

facebookprofile.addFriend();
console.log(facebookprofile.friends);
*/

