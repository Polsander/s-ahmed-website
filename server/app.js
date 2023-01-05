const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req,res)=> {
    res.send('Hello World!')
});

// Route Handling //
const loginRoutes = require('./routes/login');

app.use('/admin', loginRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`) });