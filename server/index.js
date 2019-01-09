const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const parser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

mongoose.connect('mongodb://chingu:test123@ds127944.mlab.com:27944/bears-13', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to db');
});

const schema = require('./schema/schema');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../build')));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.get('/test', (req, res) => {
  res.end(JSON.stringify([{test:"data"}]));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Listening on port: ${PORT}`);
});
