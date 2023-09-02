import { GraphQLClient, ClientError } from "graphql-request";
import { GraphQLClientRequestHeaders } from "graphql-request/build/cjs/types";
import gql from "graphql-tag";
import useSWR, {
  SWRConfiguration as SWRConfigInterface,
  Key as SWRKeyInterface,
} from "swr";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTimeISO: { input: any; output: any };
  ObjectId: { input: any; output: any };
};

export type AddCampaignInput = {
  description: Scalars["String"]["input"];
  group: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type Campaign = {
  __typename?: "Campaign";
  _id: Scalars["ObjectId"]["output"];
  active: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  description: Scalars["String"]["output"];
  group: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  addCampaign: Campaign;
  updateCampaign: Campaign;
};

export type MutationAddCampaignArgs = {
  input: AddCampaignInput;
};

export type MutationUpdateCampaignArgs = {
  data: UpdateCampaignInput;
  id: Scalars["ObjectId"]["input"];
};

/** Paginated campaigns schema */
export type PaginatedCampaigns = {
  __typename?: "PaginatedCampaigns";
  pagination: Pagination;
  results: Array<Campaign>;
};

/** Pagination schema */
export type Pagination = {
  __typename?: "Pagination";
  hasNext: Scalars["Boolean"]["output"];
  hasPrevious: Scalars["Boolean"]["output"];
  next?: Maybe<Scalars["String"]["output"]>;
  pages: Scalars["Int"]["output"];
  previous?: Maybe<Scalars["String"]["output"]>;
  total: Scalars["Int"]["output"];
};

export type Query = {
  __typename?: "Query";
  campaign: Campaign;
  /** Get all campaigns with pagination */
  campaigns: PaginatedCampaigns;
};

export type QueryCampaignArgs = {
  id: Scalars["ObjectId"]["input"];
};

export type QueryCampaignsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  next?: InputMaybe<Scalars["String"]["input"]>;
  orderBy?: InputMaybe<SortDirection>;
  previous?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
};

/** All possible directions for sorting result */
export enum SortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type UpdateCampaignInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  group?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type GetCampaignsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  next?: InputMaybe<Scalars["String"]["input"]>;
  previous?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetCampaignsQuery = {
  __typename?: "Query";
  campaigns: {
    __typename?: "PaginatedCampaigns";
    pagination: {
      __typename?: "Pagination";
      total: number;
      pages: number;
      next?: string | null;
      previous?: string | null;
    };
    results: Array<{
      __typename?: "Campaign";
      _id: any;
      title: string;
      description: string;
      group: string;
      active: boolean;
      createdAt: any;
      updatedAt: any;
    }>;
  };
};

export type GetCampaignQueryVariables = Exact<{
  campaignId: Scalars["ObjectId"]["input"];
}>;

export type GetCampaignQuery = {
  __typename?: "Query";
  campaign: {
    __typename?: "Campaign";
    _id: any;
    title: string;
    description: string;
    group: string;
    active: boolean;
    createdAt: any;
    updatedAt: any;
  };
};

export type PaginationFragmentFragment = {
  __typename?: "Pagination";
  total: number;
  pages: number;
  next?: string | null;
  previous?: string | null;
};

export type CampaignFragmentFragment = {
  __typename?: "Campaign";
  _id: any;
  title: string;
  description: string;
  group: string;
  active: boolean;
  createdAt: any;
  updatedAt: any;
};

export type AddCampaignMutationMutationVariables = Exact<{
  input: AddCampaignInput;
}>;

export type AddCampaignMutationMutation = {
  __typename?: "Mutation";
  addCampaign: {
    __typename?: "Campaign";
    _id: any;
    title: string;
    description: string;
    group: string;
    active: boolean;
    createdAt: any;
    updatedAt: any;
  };
};

export type UpdateCampaignMutationMutationVariables = Exact<{
  data: UpdateCampaignInput;
  updateCampaignId: Scalars["ObjectId"]["input"];
}>;

export type UpdateCampaignMutationMutation = {
  __typename?: "Mutation";
  updateCampaign: {
    __typename?: "Campaign";
    _id: any;
    title: string;
    description: string;
    group: string;
    active: boolean;
    createdAt: any;
    updatedAt: any;
  };
};

export const PaginationFragmentFragmentDoc = gql`
  fragment paginationFragment on Pagination {
    total
    pages
    next
    previous
  }
`;
export const CampaignFragmentFragmentDoc = gql`
  fragment campaignFragment on Campaign {
    _id
    title
    description
    group
    active
    createdAt
    updatedAt
  }
`;
export const GetCampaignsDocument = gql`
  query getCampaigns(
    $limit: Int
    $search: String
    $next: String
    $previous: String
  ) {
    campaigns(
      limit: $limit
      search: $search
      next: $next
      previous: $previous
    ) {
      pagination {
        ...paginationFragment
      }
      results {
        ...campaignFragment
      }
    }
  }
  ${PaginationFragmentFragmentDoc}
  ${CampaignFragmentFragmentDoc}
`;
export const GetCampaignDocument = gql`
  query getCampaign($campaignId: ObjectId!) {
    campaign(id: $campaignId) {
      ...campaignFragment
    }
  }
  ${CampaignFragmentFragmentDoc}
`;
export const AddCampaignMutationDocument = gql`
  mutation addCampaignMutation($input: AddCampaignInput!) {
    addCampaign(input: $input) {
      ...campaignFragment
    }
  }
  ${CampaignFragmentFragmentDoc}
`;
export const UpdateCampaignMutationDocument = gql`
  mutation updateCampaignMutation(
    $data: UpdateCampaignInput!
    $updateCampaignId: ObjectId!
  ) {
    updateCampaign(data: $data, id: $updateCampaignId) {
      ...campaignFragment
    }
  }
  ${CampaignFragmentFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    getCampaigns(
      variables?: GetCampaignsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetCampaignsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCampaignsQuery>(GetCampaignsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getCampaigns",
        "query"
      );
    },
    getCampaign(
      variables: GetCampaignQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetCampaignQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCampaignQuery>(GetCampaignDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getCampaign",
        "query"
      );
    },
    addCampaignMutation(
      variables: AddCampaignMutationMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<AddCampaignMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AddCampaignMutationMutation>(
            AddCampaignMutationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "addCampaignMutation",
        "mutation"
      );
    },
    updateCampaignMutation(
      variables: UpdateCampaignMutationMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<UpdateCampaignMutationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateCampaignMutationMutation>(
            UpdateCampaignMutationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "updateCampaignMutation",
        "mutation"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useGetCampaigns(
      key: SWRKeyInterface,
      variables?: GetCampaignsQueryVariables,
      config?: SWRConfigInterface<GetCampaignsQuery, ClientError>
    ) {
      return useSWR<GetCampaignsQuery, ClientError>(
        key,
        () => sdk.getCampaigns(variables),
        config
      );
    },
    useGetCampaign(
      key: SWRKeyInterface,
      variables: GetCampaignQueryVariables,
      config?: SWRConfigInterface<GetCampaignQuery, ClientError>
    ) {
      return useSWR<GetCampaignQuery, ClientError>(
        key,
        () => sdk.getCampaign(variables),
        config
      );
    },
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;
