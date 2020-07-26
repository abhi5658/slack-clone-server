// Imports: Express
import express from 'express';
// Imports: GraphQL
import SERVER from './schema';
import models from './models';

const app = express();

// Middleware: GraphQL
SERVER.applyMiddleware({
  app,
  // path: '/graphql',
});

// bodyParser is needed just for POST.
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

models.sequelize.sync({ force: true }).then(() => {
  app.listen(8080, () => {
    console.log('Server started at', 8080, '=>', SERVER.graphqlPath);
  });
});
