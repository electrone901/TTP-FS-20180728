const express = require('express');
const router = express.Router();

// @route   GET api/portfolio
router.get('/portfolio', (req,res) => res.send({msg: "portfolio Work"}));

module.exports = router;
