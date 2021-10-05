const express = require('express');
const { UsersRouter } = require('./src/routes');
const errorHandler = require('./src/errors');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// app routes
app.use('/users', UsersRouter);

app.get('/', async (req, res) => {
  return res.send('Cook it up!');
});

app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Cook-Up Shop listening at http://localhost:${port}`);
});

module.exports = app;