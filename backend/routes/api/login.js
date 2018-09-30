const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// @route   POST api/login
router.post('/login', (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);
    const email = req.body.email;
    const password = req.body.password;

    if(!isValid) {
        return res.status(400).json(errors);
    }
    
    User.findOne({email})
        .then(user => {
            if(!user){
                return res.status(404).json({email: 'User email not found'});
                errors.email = 'User email not found'
                return res.status(404).json(errors);
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
                        return res.status(400).json({password: 'Incorrect Password'});
                        errors.password = 'Incorrect Password';
                        return status(400).json(errors);
                    }
                });
        });
});



module.exports = router;
