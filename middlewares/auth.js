const jwt = require('jsonwebtoken')
module.exports.verifyUser=async(req,res,next)=>{
    try{
        let token  = req.header("x-token")
        if(!token){
            return res.status(403).json({message:"Access Denied"})
        }

        const tokenVerification = jwt.verify(token,process.env.JWTSECRET)
        req.user=verified;
        next()

    }catch(err){
        return res.status(403).json({message:"Access Denied"})

    }
}