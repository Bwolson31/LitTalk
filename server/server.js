const express = require('express');
const { ApolloServer } = require('apollo-server-express'); // Correct package
const path = require('path');
const { authMiddleware } = require('./auth/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

require('dotenv').config();

const PORT = process.env.PORT || 3003;
const app = express();

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => authMiddleware({ req }), // Apply authMiddleware here if needed
    });

    await server.start();
    server.applyMiddleware({ app });

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));
        app.get('*', (_, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')));
    }

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
}

startApolloServer();

