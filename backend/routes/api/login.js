const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

// @route   POST api/login
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    User.findOne({email})
        .then(user => {
            if(!user){
                return res.status(404).json({email: 'User email not found'});
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = {id: user.id, name: user.name};
                        
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                        });
                    }
                    else{
                        return res.status(400).json({password: 'Password Incorrect'});
                    }
                });
        });
});



module.exports = router;
