"use client";
import { GraphQLClient } from "graphql-request";
import { gqlApi } from "@/lib/utils";
import { getSdkWithHooks } from "./sdk";

export const gqlClient = new GraphQLClient(gqlApi);
export const sdk = getSdkWithHooks(gqlClient);
