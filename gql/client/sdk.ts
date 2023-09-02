import { GraphQLClient } from 'graphql-request';
import { ClientError, GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
import useSWR, { SWRConfiguration as SWRConfigInterface, Key as SWRKeyInterface } from 'swr';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
  ObjectId: { input: any; output: any; }
};

export type AddCampaignInput = {
  active: Scalars['Boolean']['input'];
  description: Scalars['String']['input'];
  group: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Campaign = {
  __typename?: 'Campaign';
  _id: Scalars['ObjectId']['output'];
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  group: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCampaign: Campaign;
  updateCampaign: Campaign;
};


export type MutationAddCampaignArgs = {
  input: AddCampaignInput;
};


export type MutationUpdateCampaignArgs = {
  data: UpdateCampaignInput;
  id: Scalars['ObjectId']['input'];
};

export type PaginatedCampaigns = {
  __typename?: 'PaginatedCampaigns';
  docs: Array<Campaign>;
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  totalDocs: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  campaign: Campaign;
  /** Get all campaigns with pagination */
  campaigns: PaginatedCampaigns;
};


export type QueryCampaignArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryCampaignsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  next?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<SortDirection>;
  previous?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** All possible directions for sorting result */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type UpdateCampaignInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GetCampaignsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCampaignsQuery = { __typename?: 'Query', campaigns: { __typename?: 'PaginatedCampaigns', next?: string | null, hasPrevious: boolean, hasNext: boolean, previous?: string | null, totalDocs: number, docs: Array<{ __typename?: 'Campaign', _id: any, title: string, description: string, group: string, active: boolean }> } };


export const GetCampaignsDocument = gql`
    query getCampaigns($limit: Int, $search: String) {
  campaigns(limit: $limit, search: $search) {
    next
    hasPrevious
    hasNext
    previous
    totalDocs
    docs {
      _id
      title
      description
      group
      active
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCampaigns(variables?: GetCampaignsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCampaignsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCampaignsQuery>(GetCampaignsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCampaigns', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useGetCampaigns(key: SWRKeyInterface, variables?: GetCampaignsQueryVariables, config?: SWRConfigInterface<GetCampaignsQuery, ClientError>) {
      return useSWR<GetCampaignsQuery, ClientError>(key, () => sdk.getCampaigns(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;