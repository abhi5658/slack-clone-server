// Imports: Express
import express from 'express';
// Imports: GraphQL
import SERVER from './schema';
import models from './models';

const app = express();

// setting models in context here so as to not import models again in schema.js
SERVER.context = { models, user: { id: 1 } };

// Middleware: GraphQL
SERVER.applyMiddleware({
  app,
  // path: '/graphql',
});

// bodyParser is needed just for POST.
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

models.sequelize.sync({}).then(() => {
  app.listen(8080, () => {
    console.log('Server started at', 8080, '=>', SERVER.graphqlPath);
  });
});
