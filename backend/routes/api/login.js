const express = require('express');
const router = express.Router();

// @route   GET api/login
router.get('/login', (req,res) => res.send({msg: "login Work"}));



module.exports = router;
