import { ApolloServer } from 'apollo-server';
import { typeDefs } from './src/typeDefs.js';
import { resolvers } from './src/resolvers.js';
import "dotenv/config";
import "./database/connectdb.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const PORT = process.env.PORT || 5000;

server.listen(PORT).then(({url}) => {
    console.log(`🚀 Server listening on port 5000 ${url}`);
});