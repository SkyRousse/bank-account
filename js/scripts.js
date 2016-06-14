
var newBankAccount;
var inputtedDeposit = 0;
var inputtedWithdrawl = 0;
var newAmount = 0

function BankAccount(name, amount) {
  this.fullName = name;
  this.initialDeposit = amount;
}

BankAccount.prototype.withdrawl = function(amount) {
  var number = parseInt(amount);
  // if ( this.initialDeposit < number) {
  //   alert('you do not have enough money')
  // } else {
    newAmount = this.initialDeposit - number;
  // }
}

BankAccount.prototype.deposit = function(amount) {
  var number = parseInt(amount);
  newAmount = this.initialDeposit + number;
}

$(document).ready(function() {
  $('#register').submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input.name").val();
    var inputtedInitialDeposit = parseInt($("input.initial-deposit").val());

    newBankAccount = new BankAccount(inputtedName, inputtedInitialDeposit);

    $('h3#creation').append('Thank you ' + newBankAccount.fullName + ' for creating an account with ' + newBankAccount.initialDeposit + ' money in it.');

  })
  $('#transaction').submit(function(event) {
    event.preventDefault();
    inputtedDeposit = parseInt($("input.additional-deposit").val());
    inputtedWithdrawl = parseInt($("input.withdrawl").val());

    newBankAccount.withdrawl(inputtedWithdrawl);
    newBankAccount.deposit(inputtedDeposit);

    $('ul#output').append('<li>New amount of: ' + newAmount + '</li>');

  })

})
