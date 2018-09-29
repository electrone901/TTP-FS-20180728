const express = require('express');
const router = express.Router();

// @route   GET api/transactions
router.get('/transactions', (req,res) => res.send({msg: "transactions Work"}));

module.exports = router;
