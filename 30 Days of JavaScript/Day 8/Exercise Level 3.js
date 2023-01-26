//Exercise Level 3
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]



/*
    Question 1: Create an object literal called _personAccount_. It has _firstName, lastName, incomes, 
    expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and 
    _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes 
    and its description.
*/

// Answer

const personAccount = {
    firstName: 'Habib',
    lastName: 'Salau',
    income: {
        tech: 2000,
        salary: 4000,
        bonus: 1000
    },
    expenses: {
        carFuel: 200,
       houseRent: 500, 
        investment: 1000
    },
    totalIncome: 7000,
    totalExpense: 1700,

    accountInfo: function (){
        const fullName = `${this.firstName} ${this.lastName}`;
        const acctInfo = `Account name : ${fullName} \nTotal Income : ${this.totalIncome} \nTotal Expense : ${this.totalExpense}`;
        console.log(acctInfo);
        return acctInfo;
    },
    
    addIncome: function (){
        let sumOfIncome = 0;
        for(const element of Object.values(this.income)){
            sumOfIncome += element;
        }
        console.log(sumOfIncome);
        return sumOfIncome;
    },

    addExpense: function (){
        let sumOfExpenses = 0;
        for(const element of Object.values(this.expenses)){
            sumOfExpenses += element;
        }
        console.log(sumOfExpenses);
        return sumOfExpenses;
    },

    accountBalance: function (){
        let acctBalance = 0;
        acctBalance = this.addIncome() - this.addExpense();
        console.log(acctBalance);
        return acctBalance;
    }
}

personAccount.accountInfo();
personAccount.addIncome();
personAccount.addExpense();
personAccount.accountBalance();

/*
    Question 2: Imagine you are getting the above users collection from a MongoDB database.
    a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already 
    an account.  
    b. Create a function called signIn which allows user to sign in to the application  
*/

// Answer
// a.
const signUp = (name, password, mail) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i]['username']  === name || users[i]['email'] === mail) {
            return console.log(`Username already exist`);
        }
    }
        {
        const date = new Date();
        users.push({
          _id: Math.random().toString(16).slice(2,8),
          username: name,
          email: mail,
          password: password,
          createdAt: `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`,
          isLoggedIn: false,
        });
    }
        console.log(users);
        return users;
}

signUp('Habib', 56999, 'Habib@asab.com')

// b.
const signIn = (name, password) => {
    for(let i = 0; i < users.length; i++){
        if(users[i]['username'] === name && users[i]['password'] === password){
            users[i]['isLoggedIn'] = true;
            console.log(`Welcome back Alex`);
            console.log(users);
            break;
        }
       else if(users[i]['username'] !== name && users[i]['password'] !== password){
        console.log(`Invalid username or password`);
       break;
        }
    }  
    return users;
}

signIn('Alex', '123123');


/*
    Question 3: The products array has three elements and each of them has six properties.
    a. Create a function called rateProduct which rates the product
    b. Create a function called averageRating which calculate the average rating of a product    
*/

// Answer
// a.
const rateProduct = (product, userId, rating ) => {
    for(const element in products){
        if(products[element]['name'] === product){
            products[element]['ratings'].push({userId: userId, rate: rating});
        }     
    }
    console.log(products);
    return products;
}

rateProduct('Laptop', 'hbaib', 4.7);

// b.


/*
    Question 4: Create a function called likeProduct. This function will helps to like to the product if
     it is not liked and remove like if it was liked.    
*/

// Answer

const likeProduct = (product, name) => {
    for (let elem in products) {
        if (products[elem]["name"] === product && products[elem]["likes"] !== name) {
          products[elem]["likes"].push(name);
          console.log(products)
          break;
        } if(products[elem]["name"] !== product){
            console.log(`Product doesn't exist`);
            return 0;
        }
      }

      return products;
}
likeProduct("mobile phone", 'Asab');

