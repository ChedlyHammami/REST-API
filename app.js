const express = require('express');
require('dotenv/config');
const path = require('path');

const app = express();
const logger = require('./middleware/logger');
const PORT = process.env.PORT
const members = require('./Members');

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


//members api routes
app.use('/api/members', require('./routes/api/members'));
//init middleware
//app.use(logger);




// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });

app.listen(PORT, () => console.log(`Server Started on ${PORT}`));