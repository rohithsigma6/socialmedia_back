const { User } = require("../index")

module.exports.createUser = body=>{
    return User.create(body)
}

module.exports.findEmail=body=>{
    return User.find(body)
}