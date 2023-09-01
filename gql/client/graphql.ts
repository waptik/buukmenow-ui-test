/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** Mongo object id scalar type */
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

export type Query = {
  __typename?: 'Query';
  campaign: Campaign;
  campaigns: Array<Campaign>;
};


export type QueryCampaignArgs = {
  id: Scalars['ObjectId']['input'];
};

export type UpdateCampaignInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CampaignItemFragment = { __typename?: 'Campaign', _id: any, title: string, description: string, group: string, active: boolean } & { ' $fragmentName'?: 'CampaignItemFragment' };

export const CampaignItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CampaignItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Campaign"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]} as unknown as DocumentNode<CampaignItemFragment, unknown>;