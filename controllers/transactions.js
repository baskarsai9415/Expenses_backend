const TransactionModel = require('../models/model')

exports.getTransactions = ((req,res,next) =>{
    const ans = {}
    const temp = TransactionModel.getAllTransactions((a,b) =>{
        console.log('we are here');
        if(a)
        res.send(a);
        console.log('Transactions',b);
        res.send(b)
    })
    ans.categories = temp
    return ans
});



// get transaction by id
exports.getTransactionsById = ((req,res,next) =>{
    TransactionModel.getTransactionById(req.params.id,(a,b)=>{
        if(a)
        res.send(a);
        res.send(b);
    })
});

// add new transaction
exports.addTransactions = ((req,res,next) =>{
    const transactionReqData = new TransactionModel(req.body);
    console.log('transactionReqData',transactionReqData);
    // check null
    if(req.body.constructor===Object && Object(req.body).length===0){
        res.send(400).send({success:false,message:'Please fill all fields'});
    }else{
        console.log('valid data');
        TransactionModel.addTransaction(transactionReqData,(a,b)=>{
            if(a){
                res.send(a);
                res.json({status:true,message:'Transaction added successfully',data:b.insertId})
            }
        })
    }
});

// update transactions
exports.updateTransactions = ((req,res,next)=>{
    const transactionReqData = new TransactionModel(req.body);

    console.log('transactionReqData update',transactionReqData);
    // check null
    if(req.body.constructor===Object && Object.keys(req.body).length===0){
        res.send(400).send({success:false,message:'Please fill all fields'});
    }else{
        TransactionModel.updateTransaction(req.params.id,transactionReqData,(a,b)=>{
            if(a){
                res.send(a);
                res.json({status:true,message:'Transaction added successfully',data:b.insertId})
            }
        })
    }
});

exports.deleteTransactions = ((req,res,next) =>{
   TransactionModel.deleteTransaction(req.params.id,(a,b)=>{
    if(a)
    res.send(a);
    res.json({success:true,message:'transaction deleted successfully!'});
   })
});

