const jwt = require('jsonwebtoken');


module.exports.authenticate = (req, res) => {
    const token = req.headers.authorization;
    if (token ==='null' || !token) {
        return res.status(200).json({ message: 'Not logged in', isAuthenticated: false })
    } else {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized!', isAuthenticated: false })
            }
            return res.status(200).json({ message: 'Welcome Admin', isAuthenticated: true })
        })
    }
}