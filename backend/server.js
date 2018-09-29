const express = require('express');
const app = express();

// Exporting routes
const userInfo = require('./routes/api/userInfo');
const login = require('./routes/api/login');
const portfolio = require('./routes/api/portfolio');
const signup = require('./routes/api/signup');
const transactions = require('./routes/api/transactions');
const companies = require('./routes/api/companies');


app.get('/', (req, res) => res.send('Hello, you are on the root directory!'));

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

