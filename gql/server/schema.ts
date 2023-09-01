import { TypegooseMiddleware } from "./middleware/typegoose";
import { CampaignResolver } from "./resolvers";
import { ObjectIdScalar } from "./scalars/objectid";
import { ObjectId } from "mongodb";
import { buildSchema } from "type-graphql";

export const schema = await buildSchema({
  resolvers: [CampaignResolver],
  scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
  globalMiddlewares: [TypegooseMiddleware],
});
