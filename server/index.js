const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();


const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '/front-end/build')));

app.get('/test', (req, res) => {
  res.end(JSON.stringify([{test:"data"}]));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/front-end/', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Listening on port: ${PORT}`);
});
