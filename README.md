# Slack Clone Using GraphQL and React

- [Youtube Playlist](https://www.youtube.com/playlist?list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL)

### [Video #2 Basic Setup: Setting up GraphQL Server with Node.js](https://www.youtube.com/watch?v=_lzCxWQRi_0&list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL&index=2)

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
- npm i express body-parser apollo-server-express
- npm i graphql graphql-tools
- [typeDefs, resolvers, schema starter code](https://www.apollographql.com/docs/apollo-server/v1/example/)
- Error!!! Apollo server now does some things on its own. Things have changed and some code you don't have to write and not allowed to as well!
- [The `graphqlExpress is not a function` error !!!](https://dev.to/gloriamaris/apollo-server-express-10-to-20-fix-graphiqlexpress-and-graphiqlexpress-is-not-a-function-in-a-tutorial-by-xoor-41jn)
  - [Migrate to Apollo server 2.0](https://medium.com/@jeffrey.allen.lewis/graphql-migrating-from-apollo-server-express-1-0-to-2-0-be80f5c61bee)
- [http://localhost:8080/graphql](http://localhost:8080/graphql) => say `{ hi }`
- `END`
