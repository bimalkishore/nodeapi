
const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next)=>{
    if(!req.headers['authorization']){
        return res.status(403)
            .json({message: 'Token is required'});
    }
    try{
        let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send('invalid request'); //invalid request
            } else {
                req.jwt = jwt.verify(authorization[1], process.env.SECRET);
                return next();
            }
    }catch(err){
        return res.status(403)
            .json({message: "Token is not valid, or it's expired"});
    }
}

module.exports = {
    ensureAuthenticated
}