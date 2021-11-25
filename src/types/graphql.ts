export type Maybe<T> = T | undefined;
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
  ConnectionCursor: any;
  DateTime: any;
}


export interface CreateManyMediaInput {
  media: Array<CreateMedia>;
}

export interface CreateMedia {
  filename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  mimetype: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
}

export interface CreateOneMediaInput {
  media: CreateMedia;
}

export interface CreateOneShowcaseInput {
  showcase: CreateShowcase;
}

export interface CreateShowcase {
  author: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  expectedQuantity: Maybe<Scalars['Float']>;
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<ShowcaseStatus>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface CursorPaging {
  after: Maybe<Scalars['ConnectionCursor']>;
  before: Maybe<Scalars['ConnectionCursor']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
}

export interface DateFieldComparison {
  between: Maybe<DateFieldComparisonBetween>;
  eq: Maybe<Scalars['DateTime']>;
  gt: Maybe<Scalars['DateTime']>;
  gte: Maybe<Scalars['DateTime']>;
  in: Maybe<Array<Scalars['DateTime']>>;
  is: Maybe<Scalars['Boolean']>;
  isNot: Maybe<Scalars['Boolean']>;
  lt: Maybe<Scalars['DateTime']>;
  lte: Maybe<Scalars['DateTime']>;
  neq: Maybe<Scalars['DateTime']>;
  notBetween: Maybe<DateFieldComparisonBetween>;
  notIn: Maybe<Array<Scalars['DateTime']>>;
}

export interface DateFieldComparisonBetween {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
}


export interface DeleteManyMediaInput {
  filter: MediaDeleteFilter;
}

export interface DeleteManyResponse {
  deletedCount: Scalars['Int'];
}

export interface DeleteOneMediaInput {
  id: Scalars['ID'];
}

export interface DeleteOneShowcaseInput {
  id: Scalars['String'];
}

export interface IdFilterComparison {
  eq: Maybe<Scalars['ID']>;
  gt: Maybe<Scalars['ID']>;
  gte: Maybe<Scalars['ID']>;
  iLike: Maybe<Scalars['ID']>;
  in: Maybe<Array<Scalars['ID']>>;
  is: Maybe<Scalars['Boolean']>;
  isNot: Maybe<Scalars['Boolean']>;
  like: Maybe<Scalars['ID']>;
  lt: Maybe<Scalars['ID']>;
  lte: Maybe<Scalars['ID']>;
  neq: Maybe<Scalars['ID']>;
  notILike: Maybe<Scalars['ID']>;
  notIn: Maybe<Array<Scalars['ID']>>;
  notLike: Maybe<Scalars['ID']>;
}

export interface Media {
  filename: Scalars['String'];
  id: Scalars['ID'];
  mimetype: Scalars['String'];
  path: Scalars['String'];
}

export interface MediaAggregateGroupBy {
  id: Maybe<Scalars['ID']>;
}

export interface MediaConnection {
  edges: Array<MediaEdge>;
  pageInfo: PageInfo;
}

export interface MediaCountAggregate {
  id: Maybe<Scalars['Int']>;
}

export interface MediaDeleteFilter {
  and: Maybe<Array<MediaDeleteFilter>>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<MediaDeleteFilter>>;
}

export interface MediaDeleteResponse {
  filename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  mimetype: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
}

export interface MediaEdge {
  cursor: Scalars['ConnectionCursor'];
  node: Media;
}

export interface MediaFilter {
  and: Maybe<Array<MediaFilter>>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<MediaFilter>>;
}

export interface MediaMaxAggregate {
  id: Maybe<Scalars['ID']>;
}

export interface MediaMinAggregate {
  id: Maybe<Scalars['ID']>;
}

export interface MediaSort {
  direction: SortDirection;
  field: MediaSortFields;
  nulls: Maybe<SortNulls>;
}

export enum MediaSortFields {
  Id = 'id'
}

export interface MediaUpdateFilter {
  and: Maybe<Array<MediaUpdateFilter>>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<MediaUpdateFilter>>;
}

export interface Mutation {
  createManyMedia: Array<Media>;
  createOneMedia: Media;
  createOneShowcase: Showcase;
  deleteManyMedia: DeleteManyResponse;
  deleteOneMedia: MediaDeleteResponse;
  deleteOneShowcase: ShowcaseDeleteResponse;
  removeImageFromShowcase: Showcase;
  setImageOnShowcase: Showcase;
  updateManyMedia: UpdateManyResponse;
  updateOneMedia: Media;
  updateOneShowcase: Showcase;
}


export interface MutationCreateManyMediaArgs {
  input: CreateManyMediaInput;
}


export interface MutationCreateOneMediaArgs {
  input: CreateOneMediaInput;
}


export interface MutationCreateOneShowcaseArgs {
  input: CreateOneShowcaseInput;
}


export interface MutationDeleteManyMediaArgs {
  input: DeleteManyMediaInput;
}


export interface MutationDeleteOneMediaArgs {
  input: DeleteOneMediaInput;
}


export interface MutationDeleteOneShowcaseArgs {
  input: DeleteOneShowcaseInput;
}


export interface MutationRemoveImageFromShowcaseArgs {
  input: RemoveImageFromShowcaseInput;
}


export interface MutationSetImageOnShowcaseArgs {
  input: SetImageOnShowcaseInput;
}


export interface MutationUpdateManyMediaArgs {
  input: UpdateManyMediaInput;
}


export interface MutationUpdateOneMediaArgs {
  input: UpdateOneMediaInput;
}


export interface MutationUpdateOneShowcaseArgs {
  input: UpdateOneShowcaseInput;
}

export interface PageInfo {
  endCursor: Maybe<Scalars['ConnectionCursor']>;
  hasNextPage: Maybe<Scalars['Boolean']>;
  hasPreviousPage: Maybe<Scalars['Boolean']>;
  startCursor: Maybe<Scalars['ConnectionCursor']>;
}

export interface Query {
  media: MediaConnection;
  showcase: Showcase;
  showcases: ShowcaseConnection;
  slugs: Array<Scalars['String']>;
}


export interface QueryMediaArgs {
  filter?: Maybe<MediaFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<MediaSort>>;
}


export interface QueryShowcaseArgs {
  slug: Scalars['String'];
}


export interface QueryShowcasesArgs {
  filter?: Maybe<ShowcaseFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<ShowcaseSort>>;
}

export interface RemoveImageFromShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
}

export interface SetImageOnShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
}

export interface Showcase {
  author: Scalars['String'];
  brand: ShowcaseBrand;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  expectedQuantity: Scalars['Float'];
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  expectedSalePrice: ShowcasePriceDto;
  id: Scalars['ID'];
  image: Media;
  name: Scalars['String'];
  slug: Scalars['String'];
  status: ShowcaseStatus;
  updatedAt: Scalars['DateTime'];
}

export interface ShowcaseAggregateGroupBy {
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<ShowcaseStatus>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface ShowcaseBrand {
  description: Scalars['String'];
  name: Scalars['String'];
}

export interface ShowcaseConnection {
  edges: Array<ShowcaseEdge>;
  pageInfo: PageInfo;
}

export interface ShowcaseCountAggregate {
  expectedSaleAt: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['Int']>;
  status: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['Int']>;
}

export interface ShowcaseDeleteResponse {
  author: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  expectedQuantity: Maybe<Scalars['Float']>;
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<ShowcaseStatus>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface ShowcaseEdge {
  cursor: Scalars['ConnectionCursor'];
  node: Showcase;
}

export interface ShowcaseFilter {
  and: Maybe<Array<ShowcaseFilter>>;
  expectedSaleAt: Maybe<DateFieldComparison>;
  or: Maybe<Array<ShowcaseFilter>>;
  slug: Maybe<StringFieldComparison>;
  status: Maybe<ShowcaseStatusFilterComparison>;
  updatedAt: Maybe<DateFieldComparison>;
}

export interface ShowcaseMaxAggregate {
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<ShowcaseStatus>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface ShowcaseMinAggregate {
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<ShowcaseStatus>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface ShowcasePriceDto {
  pioneer: Scalars['Float'];
  preorder: Scalars['Float'];
  promo: Scalars['Float'];
  regular: Scalars['Float'];
}

export interface ShowcaseSort {
  direction: SortDirection;
  field: ShowcaseSortFields;
  nulls: Maybe<SortNulls>;
}

export enum ShowcaseSortFields {
  ExpectedSaleAt = 'expectedSaleAt',
  Slug = 'slug',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum ShowcaseStatus {
  Coming = 'COMING',
  Idea = 'IDEA',
  Showcase = 'SHOWCASE'
}

export interface ShowcaseStatusFilterComparison {
  eq: Maybe<ShowcaseStatus>;
  gt: Maybe<ShowcaseStatus>;
  gte: Maybe<ShowcaseStatus>;
  iLike: Maybe<ShowcaseStatus>;
  in: Maybe<Array<ShowcaseStatus>>;
  is: Maybe<Scalars['Boolean']>;
  isNot: Maybe<Scalars['Boolean']>;
  like: Maybe<ShowcaseStatus>;
  lt: Maybe<ShowcaseStatus>;
  lte: Maybe<ShowcaseStatus>;
  neq: Maybe<ShowcaseStatus>;
  notILike: Maybe<ShowcaseStatus>;
  notIn: Maybe<Array<ShowcaseStatus>>;
  notLike: Maybe<ShowcaseStatus>;
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export interface StringFieldComparison {
  eq: Maybe<Scalars['String']>;
  gt: Maybe<Scalars['String']>;
  gte: Maybe<Scalars['String']>;
  iLike: Maybe<Scalars['String']>;
  in: Maybe<Array<Scalars['String']>>;
  is: Maybe<Scalars['Boolean']>;
  isNot: Maybe<Scalars['Boolean']>;
  like: Maybe<Scalars['String']>;
  lt: Maybe<Scalars['String']>;
  lte: Maybe<Scalars['String']>;
  neq: Maybe<Scalars['String']>;
  notILike: Maybe<Scalars['String']>;
  notIn: Maybe<Array<Scalars['String']>>;
  notLike: Maybe<Scalars['String']>;
}

export interface UpdateManyMediaInput {
  filter: MediaUpdateFilter;
  update: UpdateMedia;
}

export interface UpdateManyResponse {
  updatedCount: Scalars['Int'];
}

export interface UpdateMedia {
  filename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  mimetype: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
}

export interface UpdateOneMediaInput {
  id: Scalars['ID'];
  update: UpdateMedia;
}

export interface UpdateOneShowcaseInput {
  id: Scalars['String'];
  update: UpdateShowcase;
}

export interface UpdateShowcase {
  author: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  expectedQuantity: Maybe<Scalars['Float']>;
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<ShowcaseStatus>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export type ShowcasePreviewQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ShowcasePreviewQuery = { showcase: { slug: string, name: string, author: string, status: ShowcaseStatus, description: string, image: { path: string }, expectedSalePrice: { regular: number, pioneer: number, preorder: number, promo: number } }, showcases: { edges: Array<{ node: { slug: string, name: string, author: string, status: ShowcaseStatus, createdAt: any, image: { path: string } } }> } };

export type ShowcasesQueryVariables = Exact<{
  filter: Maybe<ShowcaseFilter>;
  paging: CursorPaging;
}>;


export type ShowcasesQuery = { showcases: { pageInfo: { hasNextPage: boolean | null, endCursor: any | null }, edges: Array<{ node: { id: string, name: string, slug: string, author: string, status: ShowcaseStatus, createdAt: any, image: { path: string } } }> } };

export type SlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type SlugsQuery = { slugs: Array<string> };
