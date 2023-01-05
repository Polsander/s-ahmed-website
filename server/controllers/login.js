
// Get Requests
module.exports.renderLogin = (req,res) => {
    return res.send('Hello world! You made it to the render login! :)')
}

//Post Requests
module.exports.login = (req,res) => {
    const data = req.body

    console.log(data);
    res.send("Aye!")
}