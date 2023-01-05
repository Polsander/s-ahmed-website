const express = require('express');
const cors = require('cors');
// We need the if statement below to use our local dotenv variables
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

app.get('/', (req,res)=> {
    res.send('Hello World!')
});

// Route Handling //
const loginRoutes = require('./routes/login');
const authRoutes = require('./routes/auth');

app.use('/admin', loginRoutes);
app.use('/auth', authRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`) });