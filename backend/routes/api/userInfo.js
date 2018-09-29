const express = require('express');
const router = express.Router();

// @route   GET api/userInfo
router.get('/userInfo', (req,res) => res.send({msg: "userInfo Work"}));



module.exports = router;
