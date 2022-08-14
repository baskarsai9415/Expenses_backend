const data = {
    categories:['GROCERIES', 'ELECTRICITY', 'HOUSE RENT', 'FEE PAYMENT', 'SALARY', 'FD INTEREST'],
    expenses:[
        {
          id: 1,
          category_type: 'GROCERIES',
          transaction_mode: 'PHONE-PAY',
          transaction_time: new Date(),
          expense_type: 'DEBIT',
          transaction_amount: 4523.6,
          category_id: 1
        },
        {
          id: 2,
          category_type: 'ELECTRICITY',
          transaction_mode: 'GOOGLE-PAY',
          transaction_time: new Date(),
          expense_type: 'DEBIT',
          transaction_amount: 1523.45,
          category_id: 2
        },
        {
          id: 3,
          category_type: 'HOUSE RENT',
          transaction_mode: 'AMAZON-PAY',
          transaction_time: new Date(),
          expense_type: 'DEBIT',
          transaction_amount: 4500,
          category_id: 3
        },
        {
          id: 4,
          category_type: 'FEE PAYMENT',
          transaction_mode: 'DEBIT-CARD',
          transaction_time: new Date(),
          expense_type: 'DEBIT',
          transaction_amount: 35000,
          category_id: 4
        },
        {
          id: 5,
          category_type: 'SALARY',
          transaction_mode: 'AMOUNT CREDITED',
          transaction_time: new Date(),
          expense_type: 'CREDIT',
          transaction_amount: 125000,
          category_id: 5
        },
        {
          id: 6,
          category_type: 'FD INTEREST',
          transaction_mode: 'AMOUNT CREDITED',
          transaction_time: new Date(),
          expense_type: 'CREDIT',
          transaction_amount: 6000,
          category_id: 6
        }
      ]
}

module.exports = data