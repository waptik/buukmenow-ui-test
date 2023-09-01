import "reflect-metadata";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { ObjectId } from "mongodb";
import { TypegooseMiddleware } from "@gql/middleware/typegoose";
import { ObjectIdScalar } from "@gql/scalars/objectid";
import { CampaignResolver } from "@gql/resolvers";
import { connectToMongo } from "@/lib/db";
import path from "path";

async function createSchema() {
  await connectToMongo();
  return buildSchema({
    resolvers: [CampaignResolver],
    scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    globalMiddlewares: [TypegooseMiddleware],
    // validate: false,
    emitSchemaFile: path.join(__dirname, "..", "schema.graphql"),
  });
}

async function createGqlServer() {
  const schema = await createSchema();
  const server = new ApolloServer({
    schema,
  });

  return server;
}

const server = await createGqlServer();

const handler = startServerAndCreateNextHandler(server);

export default handler;
