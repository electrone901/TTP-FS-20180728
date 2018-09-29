const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello, you are on the root directory!'));

// process.env.PORT for Heroku, port 5000 for local
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
