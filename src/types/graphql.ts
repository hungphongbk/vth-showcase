export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
}


export interface MediaModel {
  filename: Scalars['String'];
  id: Scalars['ID'];
  mimetype: Scalars['String'];
  path: Scalars['String'];
}

export interface Query {
  showcases: Array<ShowcaseModel>;
}

export interface ShowcaseModel {
  author: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: MediaModel;
  name: Scalars['String'];
  status: ShowcaseStatus;
  updatedAt: Scalars['DateTime'];
}

export enum ShowcaseStatus {
  Coming = 'COMING',
  Idea = 'IDEA',
  Showcase = 'SHOWCASE'
}

export type ShowcasesQueryVariables = Exact<{ [key: string]: never; }>;


export type ShowcasesQuery = { showcases: Array<{ id: string, name: string, author: string, status: ShowcaseStatus, image: { path: string } }> };
