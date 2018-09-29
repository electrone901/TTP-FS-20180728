const express = require('express');
const router = express.Router();

// @route   GET api/signup
router.get('/signup', (req,res) => res.send({msg: "signup Work"}));

module.exports = router;
