// Exercise  Level 3

/*
    Question 1: Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, 
    totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and 
    expenses is also a set of expenses and its description.
*/

// Answer

const personAccount = {
    firstName: 'Habib',
    lastName: 'Salau',
    incomes: [2000, 4000, 6000],
    expenses: [700, 1200, 500, 60],
  
    totalIncome: function () {
      let totalIncom = 0;
      this.incomes.forEach((income) => (totalIncom += income));
      return totalIncom;
    },
  
    totalExpenses: function () {
      let totalExpenses = 0;
      this.expenses.forEach((expense) => (totalExpenses += expense));
      return totalExpenses;
    },
  
    accountInfo: function () {
      return `
    Full-Name: ${this.firstName} ${this.lastName}
    total-Income: ${this.totalIncome()}
    total-Expenses: ${this.totalExpenses()}
    Balance: ${this.totalIncome() - this.totalExpenses()}
    `;
    },
  
    addIncome: function (amount) {
      this.incomes.push(amount);
    },
  
    addExpenses: function (cost) {
      this.expenses.push(cost);
    },
  };
  const stringPersonAccount = JSON.stringify(
    personAccount.accountInfo(),
    undefined,
    4
  );
  localStorage.setItem('personAccount', stringPersonAccount);
  console.log(localStorage);
