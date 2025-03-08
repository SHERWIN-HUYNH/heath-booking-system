const { SuccessResponse } = require("../core/success.response")
const { testDB } = require("../services/test")

class UserController{
    createUser = async(req, res)=>{
        new SuccessResponse({
            message:"User created",
            metadata: await testDB()
        }).send(res)
    }
}

module.exports = new UserController()