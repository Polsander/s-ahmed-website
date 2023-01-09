const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// We need the if statement below to use our local dotenv variables
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

//Database Connections
const db_URL = process.env.DB_URL || 'mongodb://localhost:27017/samar'

mongoose.set('strictQuery', false);
mongoose.connect(db_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

// Default Route
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Route Handling //
const loginRoutes = require('./routes/login');
const authRoutes = require('./routes/auth');
const uploadImageRoutes = require('./routes/upload');
const projectDisplayRoutes = require('./routes/projects');

app.use('/admin', loginRoutes);
app.use('/auth', authRoutes);
app.use('/upload',uploadImageRoutes);
app.use('/projects',projectDisplayRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`) });