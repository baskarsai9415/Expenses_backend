var db = require('../config/db.config');

var Transaction1 = function(categories){
    this.category_type = categories.category_type;
}

var Transaction = function(categories){
    this.id = categories.id;
    this.category_type = categories.category_type;
    this.transaction_mode = categories.transaction_mode;
    this.transaction_time = new Date();
}

Transaction1.getAllTransactions1 = (categories) =>{
    db.query('SELECT category_type FROM categories',(a,b)=>{
        if(a){
            console.log('Error while fetching Transactions',a);
            categories(null,a);
        }else{
            const c= b.map(item=>item.category_type)
            console.log('Transactions fetched successfully',c);
            categories(null,c);
        }
        
    })
}

// get all Transactions
Transaction.getAllTransactions = (categories) =>{
    db.query('SELECT * FROM categories, RIGHT JOIN amount ON categories.id=amount.category_id',(a,b)=>{
        if(a){
            console.log('Error while fetching Transactions',a);
            categories(null,a);
        }else{
            console.log('Transactions fetched successfully');
            categories(null,b);
        }
        
    })
}

// get transaction by id
Transaction.getTransactionById = (id,result)=>{
    db.query('SELECT * FROM categories, RIGHT JOIN amount ON categories.id=amount.category_id',id,(a,b)=>{
        if(a){
            console.log('error while fetching transaction by id',a);
            result(null,a);
        }else{
            result(null,b);
        }
    })
}

// add new transaction
Transaction.addTransaction = (transactionReqData,result)=>{
    db.query('INSERT INTO categories SET? ',transactionReqData,(a,b)=>{
        if(a){
            console.log('error while inserting data',a);
            result(null,a);
        }else{
            console.log('data inserted successfully',b);
            result(null,b);
        }
    })
}

// update transaction
Transaction.updateTransaction = (id,transactionReqData,result)=>{
    db.query("UPDATE categories SET category_type=?,transaction_mode=?,transaction_amount=? WHERE id = ?",[transactionReqData.category_type,transactionReqData.transaction_mode,transactionReqData.transaction_amount,id],(a,b)=>{
        if(a){
            console.log('error while updating data',a);
            result(null,a);
        }else{
            console.log('data updated successfully',b);
            result(null,b);
        }
    });
};

// delete transaction data
Transaction.deleteTransaction = (id,result)=>{
    db.query('SET FOREIGN_KEY_CHECKS=0 DELETE FROM categories WHERE id=? ',[id],(a,b)=>{
        if(a){
            console.log('Error in deleting transaction',a)
            result(null,a);
        }else{
            console.log('data deleted successfully',b);
            result(null,b);
        }
    });
}
console.log(Transaction)
console.log(Transaction1)
module.exports = Transaction
module.exports = Transaction1
