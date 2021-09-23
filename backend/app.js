const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  return res.send('Cook it up!');
});

app.listen(port, () => {
  console.log(`Cook-Up Shop listening at http://localhost:${port}`);
});

module.exports = app;