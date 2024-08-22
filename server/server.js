
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
console.log('Environment variables:', process.env);
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./graphql/typeDefs/index.js');
const resolvers = require('./graphql/resolvers/index.js');
const connectDB = require('./config/connection.js');



async function startApolloServer(typeDefs, resolvers) {
  console.log('Starting Apollo Server');
  const app = express();
  connectDB(); 

  // console.log('TypeDefs:', typeDefs);
  // console.log('Resolvers:', resolvers);

  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer(typeDefs, resolvers);

