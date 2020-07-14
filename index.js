// Imports: Express
import express from 'express';
// Imports: GraphQL
import SERVER from './schema';

const app = express();

// Middleware: GraphQL
SERVER.applyMiddleware({
  app,
});

// bodyParser is needed just for POST.
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.listen(8080, () => {
  console.log('Server started at', 8080);
});
