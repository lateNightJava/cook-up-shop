const express = require('express');
const cors = require('cors');
const { UsersRouter, AuthRouter } = require('./src/routes');
const errorHandler = require('./src/errors');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: process.env.CORS_ORIGIN, optionsSuccessStatus: 200 }));
// app.use(cors({ origin: true, optionsSuccessStatus: 200, credentials: true }));
app.use(express.json());

// app routes
app.use('/users', UsersRouter);
app.use('/auth', AuthRouter);

app.get('/', async (req, res) => {
  return res.send('Cook it up!');
});

app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Cook-Up Shop listening at http://localhost:${port}`);
});

module.exports = app;