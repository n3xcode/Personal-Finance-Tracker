const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

// GET /api/transactions - fetch all transactions
router.get('/', getTransactions);

// POST /api/transactions - add new transaction
router.post('/', addTransaction);

// DELETE /api/transactions/:id - delete transaction by ID
router.delete('/:id', deleteTransaction);

module.exports = router;
