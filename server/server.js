const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema');
const app = express();
app.use(cors())

mongoose.connect('mongodb://localhost:27017/graphql', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(9900);
