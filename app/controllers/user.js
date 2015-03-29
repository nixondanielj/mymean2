module.exports = function(authFunc) {
    var express = require('express');
    var User = require('../models/user');
    var ctrl = express.Router();
    
    ctrl.route('/')
        .post(function(req, res){
            var email = (req.body.email || '').trim(),
            password = (req.body.password || '').trim();
            if(email
                && password
                && email.indexOf('@onshoreoutsourcing.com') > 0) {
                User.findOne({ email: email }, function(err, user){
                    if(err){
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        if(user){
                            console.log('User already exists');
                            res.sendStatus(409);
                        } else {
                            new User({ 
                                email: email, 
                                password: password, 
                                displayName: email.slice(0, email.lastIndexOf('@'))
                            }).save(function(err, user){
                                if(err){
                                    console.log('failed to create user');
                                    console.error(err);
                                    res.sendStatus(500);
                                } else {
                                    res.sendStatus(201);
                                }
                            });
                        }
                    }
                });
            } else {
                res.sendStatus(400);
            }
        });
    
    ctrl.route('/:userId')
        .all(authFunc);
};

