import { connectToMongo } from "@/lib/db";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "@gql/server/schema";
import "reflect-metadata";
import Cors from "cors";
import { appUrl } from "@/lib/utils";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const cors = Cors({
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
  origin: ["https://studio.apollographql.com", appUrl],
});

async function createGqlServer() {
  await connectToMongo();
  const server = new ApolloServer({
    schema,
  });

  return server;
}

const server = await createGqlServer();

const handler = startServerAndCreateNextHandler(server);

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const graphqlServer: NextApiHandler = async (req, res) => {
  await runMiddleware(req, res, cors);
  await handler(req, res);
};

export default graphqlServer;
