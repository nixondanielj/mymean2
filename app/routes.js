module.exports = function(app, passport){
    var authFunc = function(req, res, next){
        if(req.isAuthenticated){
            next();
        } else {
            res.sendStatus(401);
        }
    };
    app.use('/user', require('./controller/user')(authFunc));
};