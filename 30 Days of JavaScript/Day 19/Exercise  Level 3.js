// Exercise Level 3

/*
    Question 1: Create a personAccount out function. It has firstname, lastname, incomes, expenses  inner variables. It has totalIncome, 
    totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description 
    and expenses is also a set of expenses and its description.
*/

// Answer
const personAccount = () => {
    const firstName = 'Habib'
    const lastName = 'Salau'
    let incomes = [500, 200]
    let expenses = [100, 50]
    let totalExpens = 0
    let totalIncom = 0


    const totalIncome = () => {
        incomes.forEach((income) => {
            totalIncom += income
            return totalIncom
        })
    }
    const totalExpense = () => {
        
        expenses.forEach((expense) => {
            totalExpens += expense
            return totalExpens
        })
    }
    const accountBalance = () => {
        let balance = `${totalIncom - totalExpens}`
        return balance
    }
    const accountInfo = () => {
        const acctInfo = `Full Name: ${lastName} ${firstName}
          Total Incomes: ${totalIncom}
          Total Expenses: ${totalExpens}
          Balance: ${accountBalance()}`
          return acctInfo
    }
    const addIncome = (income) => {
        incomes.push(income)
        return incomes
    }
    const addExpense = (expense) => {
        expenses.push(expense)
        return expenses
    }
    return  totalIncome(), totalExpense(), accountBalance(), accountInfo()
    

}
console.log(personAccount())
