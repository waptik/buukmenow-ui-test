"use client";

/* eslint-disable import/no-extraneous-dependencies */
import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  ASTNode,
  ExecutionResult,
  Kind,
  OperationDefinitionNode,
} from "graphql";
import useSWR from "swr";

const executor = buildHTTPExecutor({
  endpoint: `${
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/gql`
      : "http://localhost:3000"
  }/api/gql`,
});

const isOperationDefinition = (def: ASTNode): def is OperationDefinitionNode =>
  def.kind === Kind.OPERATION_DEFINITION;

export function useGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  console.log({ document, variables });
  return useSWR(
    [
      // This logic can be customized as desired
      document?.definitions?.find(isOperationDefinition)?.name,
      variables,
    ] as const,
    async (_key: any, variables: any) =>
      executor({
        document: document as any,
        variables: variables as any,
      }) as Promise<ExecutionResult<TResult>>
  );
}