const express = require('express');
const router = express.Router();
const {getTransactions,getTransactionsById,addTransactions,updateTransactions,deleteTransactions} = require('../controllers/transactions');

router.route('/').get(getTransactions);
router.route('/expense').get(getTransactionsById);
router.route('/:id').get(getTransactionsById);
router.route('/').post(addTransactions);
router.route('/:id').put(updateTransactions);
router.route('/:id').delete(deleteTransactions);

module.exports = router;