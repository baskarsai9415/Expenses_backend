var db = require('./config/db.config');
const data = require('./data')

const get_home = (req,res)=>{
    //db query expenses and categories  
    let sql = `SELECT * FROM categories RIGHT JOIN amount ON categories.id=amount.category_id;`
    db.query(sql,function (err, result) {

        if (err) throw err;
        let expenses=result
        db.query('select * from categories', function (err, result) {
            if (err) throw err;
            let categories=result
            res.send({expenses,categories})
            
          });
      })
}

 const post_home = (req,res)=>{
    //db query expenses and categories 
    console.log(req.body)
    const {category,transaction_type,transaction_mode,amount} = req.body
    console.log(category,transaction_type,transaction_mode,amount)
    let sql1 = `select id from categories
    where category_type="${category}";`
    db.query(sql1,function(err,result){
        if (err) throw err;
        let cid = result[0].id
        console.log(cid)
        let sql2 = `INSERT INTO amount(expense_type,transaction_mode,transaction_amount,category_id)
        VALUES ("${transaction_type}","${transaction_mode}",${amount},${cid});`
        db.query(sql2,function(err,result){
            if (err) throw err;
            res.send({message:'Amount added '})
            }) 
        console.log(sql2)
        }) 
    // checkhing null condition
};

 const post_category = (req,res)=>{
    // let sql1 = `INSERT INTO categories(category_type) VALUES ("`
    let sql2 = `INSERT INTO categories(category_type) VALUES ("${req.body.category}");`
    // console.log(req.body.category)
    // let sql = sql1+req.body.category+'"); 
    db.query(sql2,function(err,result){
    if (err) throw err;
    res.send({message:'Category added successfully'})
    }) 
}

module.exports = {
    get_home,
    post_category,
    post_home
}