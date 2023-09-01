import { connectToMongo } from "@/lib/db";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "@gql/server/schema";
import "reflect-metadata";


async function createGqlServer() {
  await connectToMongo();
  const server = new ApolloServer({
    schema,
  });

  return server;
}

const server = await createGqlServer();

const handler = startServerAndCreateNextHandler(server);

export default handler;
