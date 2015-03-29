module.exports = function(authFunc, passport) {
    var ctrl = require('express').Router();
    ctrl
        .route('/')
        .get(authFunc, function(req, res, next){
            res.sendStatus(200);
        })
        .post(function(req, res, next){
            passport.authenticate('local',
                function(err, user, info){
                    if(err){
                        return res.sendStatus(500);
                    } else if (!user){
                        return res.sendStatus(401);
                    } else {
                        return res.sendStatus(200);
                    }
                })(req, res, next);
        });
    return ctrl;
};