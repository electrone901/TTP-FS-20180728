const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
// Exporting routes
const userInfo = require('./routes/api/userInfo');
const login = require('./routes/api/login');
const portfolio = require('./routes/api/portfolio');
const signup = require('./routes/api/signup');
const transactions = require('./routes/api/transactions');
const companies = require('./routes/api/companies');

// Exporting db
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());




app.get('/', (req, res) => res.send('Hello, you are on the root directory!'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use routes
app.use('/api', userInfo);
app.use('/api', login);
app.use('/api', portfolio);
app.use('/api', signup);
app.use('/api', transactions);
app.use('/api', companies);

// process.env.PORT for Heroku, port 5000 for local
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

