"use client";

import { GraphQLClient } from "graphql-request";
import { gqlUrl } from "@/lib/utils";
import { getSdkWithHooks } from "./sdk";

export const gqlClient = new GraphQLClient(gqlUrl, {
  credentials: "include",
  mode: "cors",
});
export const sdk = getSdkWithHooks(gqlClient);
