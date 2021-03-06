# Slack Clone Using GraphQL and React

- [Youtube Playlist](https://www.youtube.com/playlist?list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL)

### [Video #2 Part#0 Basic Setup: Setting up GraphQL Server with Node.js](https://www.youtube.com/watch?v=_lzCxWQRi_0&list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL&index=2)

- mkdir project directory
- npm init -y
- npm i -D nodemon babel-cli babel-preset-env babel-preset-stage-3
- setup -> create .babelrc
- eslint --init
  - airbnb
- [Install peer dependencies](https://www.npmjs.com/package/eslint-config-airbnb)
  - npx install-peerdeps --dev eslint-config-airbnb
- modify .eslintrc.js
- [index.js starter code](https://www.apollographql.com/docs/apollo-server/v1/servers/express/)
  - index.js copy-paste starter
- npm i express body-parser apollo-server-express graphql
- [typeDefs, resolvers, schema starter code](https://www.apollographql.com/docs/apollo-server/v1/example/)
- Error!!! Apollo server now does some things on its own. Things have changed and some code you don't have to write and not allowed to as well!
- [The `graphqlExpress is not a function` error !!!](https://dev.to/gloriamaris/apollo-server-express-10-to-20-fix-graphiqlexpress-and-graphiqlexpress-is-not-a-function-in-a-tutorial-by-xoor-41jn)
  - [Migrate to Apollo server 2.0](https://medium.com/@jeffrey.allen.lewis/graphql-migrating-from-apollo-server-express-1-0-to-2-0-be80f5c61bee)
- [http://localhost:8080/graphql](http://localhost:8080/graphql) => say `{ hi }`
- `END`

### [Video #3 Part#1 Creating PostgreSQL Database Models with Sequelize](https://www.youtube.com/watch?v=BpEw1PNdvkg&list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL)

- create pg database `slack`
- npm i sequelize pg pg-hstore
- create folder -> models => [ index.js, user.js, team.js, channel.js, message.js ]
- index.js
  - sequelize v6 -> sequelize.import has been deprecated
  - make changes to `require` models and not use `sequelize.import`
- run app -> it will auto create tables in slack db
- `END`

### [Video #4 Part#2 PostgreSQL Naming Conventions and GraphQL Schemas](https://www.youtube.com/watch?v=Q-hyZDW8S0E&list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL&index=5&t=0s)

- using camel case ('teamId') in foreign keys to match same in graphql type definition as graphql probably allows camelCase only
- options:
  - Sequelize constructor : in video `underscored: true` -> no such option available => instead `options = { define: {underscored: true}}`
  - model definition: options : `{ underscored: true }`
  - in video every model foreign key are made snake_case by field key,but now not needed if used `define: {underscored: true }` in sequelize constructor
- Re run app => tables recreated with new column names in snake case
- Graphql - creating types => User, Message, Channel, Team
- `END`

### [Video #5 Part#3 Creating GraphQL Schemas and Resolvers using Sequelize](https://www.youtube.com/watch?v=DlNVHWo_nq8&list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL&index=5)

- some typo and code correction from previous video
- npm library [`merge-graphql-schemas`](https://github.com/Urigo/merge-graphql-schemas) has been deprecated
- `npm i graphql-tools` -> It contains functions `mergeTypeDefs`,`mergeResolvers`,`loadFilesSync` which will be used now
- move schemas(types) & reolvers to respective folders and add extra schema & resolver as minimum 2 required for merge
- schema.js => import types and resolvers and merge using merge functions => run app
- add models in context object of server
- create mutation types and resolvers for user,team,channel,message to try out basic create of instances
- added user in context temporary to save referencing user id
- `END`
