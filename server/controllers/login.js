const jwt = require('jsonwebtoken');

// Get Requests
module.exports.renderLogin = (req,res) => {
    return res.send('Hello world! You made it to the render login! :)')
}

//Post Requests
module.exports.login = (req,res) => {
    const data = req.body
    if (process.env.ADMIN_PASSWORD === data.password) {
        //generate access token
        const token = jwt.sign({username:'admin_samar'}, process.env.TOKEN_SECRET, {expiresIn:'86400s'})
        //provide response
        // response = JSON.stringify({access: true, webtoken: token })
        return res.json({access: true, webToken:token});
    } 
    res.json({access: false, webToken: null})
}