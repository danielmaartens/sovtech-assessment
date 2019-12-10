import {ApolloServer} from "apollo-server";
import "reflect-metadata";
import {buildSchema} from "type-graphql";
import {MainResolver} from "./resolvers";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [MainResolver],
    });

    const server = new ApolloServer({
        schema
    });

    // Start the server
    const {url} = await server.listen(PORT);
    console.log(`Server is running at ${url}`);
}

bootstrap();