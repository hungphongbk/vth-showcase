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
  JSONObject: any;
}

export interface AddHighlightFeaturesToShowcaseInput {
  id: Scalars['String'];
  relationIds: Array<Scalars['ID']>;
}

export interface AddImageListsToShowcaseInput {
  id: Scalars['String'];
  relationIds: Array<Scalars['ID']>;
}

export interface AddImagesToImageListInput {
  id: Scalars['ID'];
  relationIds: Array<Scalars['ID']>;
}


export interface CreateImageListInputDto {
  images: Maybe<Array<MediaInput>>;
}

export interface CreateManyImageListsInput {
  imageLists: Array<CreateImageListInputDto>;
}

export interface CreateManyMediaDtosInput {
  mediaDtos: Array<MediaInput>;
}

export interface CreateManyShowcaseHighlightFeaturesInput {
  showcaseHighlightFeatures: Array<ShowcaseHfCreateInputDto>;
}

export interface CreateOneImageListInput {
  imageList: CreateImageListInputDto;
}

export interface CreateOneMediaDtoInput {
  mediaDto: MediaInput;
}

export interface CreateOneShowcaseHighlightFeatureInput {
  showcaseHighlightFeature: ShowcaseHfCreateInputDto;
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


export interface DeleteManyImageListsInput {
  filter: ImageListDeleteFilter;
}

export interface DeleteManyMediaDtosInput {
  filter: MediaDtoDeleteFilter;
}

export interface DeleteManyResponse {
  deletedCount: Scalars['Int'];
}

export interface DeleteManyShowcaseHighlightFeaturesInput {
  filter: ShowcaseHighlightFeatureDeleteFilter;
}

export interface DeleteManyShowcasesInput {
  filter: ShowcaseDeleteFilter;
}

export interface DeleteOneImageListInput {
  id: Scalars['ID'];
}

export interface DeleteOneMediaDtoInput {
  id: Scalars['ID'];
}

export interface DeleteOneShowcaseHighlightFeatureInput {
  id: Scalars['ID'];
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

export interface IdInterface {
  id: Scalars['ID'];
}

export interface ImageList extends IdInterface {
  id: Scalars['ID'];
  images: Array<MediaDto>;
}


export interface ImageListImagesArgs {
  filter?: Maybe<MediaDtoFilter>;
  sorting?: Maybe<Array<MediaDtoSort>>;
}

export interface ImageListAggregateGroupBy {
  id: Maybe<Scalars['ID']>;
}

export interface ImageListConnection {
  edges: Array<ImageListEdge>;
  pageInfo: PageInfo;
}

export interface ImageListCountAggregate {
  id: Maybe<Scalars['Int']>;
}

export interface ImageListDeleteFilter {
  and: Maybe<Array<ImageListDeleteFilter>>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<ImageListDeleteFilter>>;
}

export interface ImageListDeleteResponse {
  id: Maybe<Scalars['ID']>;
}

export interface ImageListEdge {
  cursor: Scalars['ConnectionCursor'];
  node: ImageList;
}

export interface ImageListFilter {
  and: Maybe<Array<ImageListFilter>>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<ImageListFilter>>;
}

export interface ImageListMaxAggregate {
  id: Maybe<Scalars['ID']>;
}

export interface ImageListMinAggregate {
  id: Maybe<Scalars['ID']>;
}

export interface ImageListSort {
  direction: SortDirection;
  field: ImageListSortFields;
  nulls: Maybe<SortNulls>;
}

export enum ImageListSortFields {
  Id = 'id'
}

export interface ImageListUpdateFilter {
  and: Maybe<Array<ImageListUpdateFilter>>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<ImageListUpdateFilter>>;
}


export interface MediaDto extends IdInterface {
  filename: Scalars['String'];
  id: Scalars['ID'];
  mimetype: Scalars['String'];
  path: Scalars['String'];
  type: Scalars['String'];
}

export interface MediaDtoAggregateGroupBy {
  filename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
}

export interface MediaDtoConnection {
  edges: Array<MediaDtoEdge>;
  pageInfo: PageInfo;
}

export interface MediaDtoCountAggregate {
  filename: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
}

export interface MediaDtoDeleteFilter {
  and: Maybe<Array<MediaDtoDeleteFilter>>;
  filename: Maybe<StringFieldComparison>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<MediaDtoDeleteFilter>>;
}

export interface MediaDtoDeleteResponse {
  filename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  mimetype: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
}

export interface MediaDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: MediaDto;
}

export interface MediaDtoFilter {
  and: Maybe<Array<MediaDtoFilter>>;
  filename: Maybe<StringFieldComparison>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<MediaDtoFilter>>;
}

export interface MediaDtoMaxAggregate {
  filename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
}

export interface MediaDtoMinAggregate {
  filename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
}

export interface MediaDtoSort {
  direction: SortDirection;
  field: MediaDtoSortFields;
  nulls: Maybe<SortNulls>;
}

export enum MediaDtoSortFields {
  Filename = 'filename',
  Id = 'id'
}

export interface MediaDtoUpdateFilter {
  and: Maybe<Array<MediaDtoUpdateFilter>>;
  filename: Maybe<StringFieldComparison>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<MediaDtoUpdateFilter>>;
}

export interface MediaInput {
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  path: Scalars['String'];
}

export interface Mutation {
  addHighlightFeaturesToShowcase: Showcase;
  addImageListsToShowcase: Showcase;
  addImagesToImageList: ImageList;
  createManyImageLists: Array<ImageList>;
  createManyMediaDtos: Array<MediaDto>;
  createManyShowcaseHighlightFeatures: Array<ShowcaseHighlightFeature>;
  createOneImageList: ImageList;
  createOneMediaDto: MediaDto;
  createOneSetting: Scalars['Boolean'];
  createOneShowcase: Showcase;
  createOneShowcaseHighlightFeature: ShowcaseHighlightFeature;
  deleteManyImageLists: DeleteManyResponse;
  deleteManyMediaDtos: DeleteManyResponse;
  deleteManyShowcaseHighlightFeatures: DeleteManyResponse;
  deleteManyShowcases: DeleteManyResponse;
  deleteOneImageList: ImageListDeleteResponse;
  deleteOneMediaDto: MediaDtoDeleteResponse;
  deleteOneShowcase: Showcase;
  deleteOneShowcaseHighlightFeature: ShowcaseHighlightFeatureDeleteResponse;
  removeAuthorFromShowcase: Showcase;
  removeHighlightFeaturesFromShowcase: Showcase;
  removeImageFromShowcase: Showcase;
  removeImageFromShowcaseHighlightFeature: ShowcaseHighlightFeature;
  removeImageListsFromShowcase: Showcase;
  removeImagesFromImageList: ImageList;
  setAuthorOnShowcase: Showcase;
  setHighlightFeaturesOnShowcase: Showcase;
  setImageListsOnShowcase: Showcase;
  setImageOnShowcase: Showcase;
  setImageOnShowcaseHighlightFeature: ShowcaseHighlightFeature;
  setImagesOnImageList: ImageList;
  updateManyImageLists: UpdateManyResponse;
  updateManyMediaDtos: UpdateManyResponse;
  updateManyShowcaseHighlightFeatures: UpdateManyResponse;
  updateOneImageList: ImageList;
  updateOneMediaDto: MediaDto;
  updateOneSetting: Scalars['Boolean'];
  updateOneShowcaseHighlightFeature: ShowcaseHighlightFeature;
}


export interface MutationAddHighlightFeaturesToShowcaseArgs {
  input: AddHighlightFeaturesToShowcaseInput;
}


export interface MutationAddImageListsToShowcaseArgs {
  input: AddImageListsToShowcaseInput;
}


export interface MutationAddImagesToImageListArgs {
  input: AddImagesToImageListInput;
}


export interface MutationCreateManyImageListsArgs {
  input: CreateManyImageListsInput;
}


export interface MutationCreateManyMediaDtosArgs {
  input: CreateManyMediaDtosInput;
}


export interface MutationCreateManyShowcaseHighlightFeaturesArgs {
  input: CreateManyShowcaseHighlightFeaturesInput;
}


export interface MutationCreateOneImageListArgs {
  input: CreateOneImageListInput;
}


export interface MutationCreateOneMediaDtoArgs {
  input: CreateOneMediaDtoInput;
}


export interface MutationCreateOneSettingArgs {
  input: SettingCreateDto;
}


export interface MutationCreateOneShowcaseArgs {
  input: ShowcaseCreateInputDto;
}


export interface MutationCreateOneShowcaseHighlightFeatureArgs {
  input: CreateOneShowcaseHighlightFeatureInput;
}


export interface MutationDeleteManyImageListsArgs {
  input: DeleteManyImageListsInput;
}


export interface MutationDeleteManyMediaDtosArgs {
  input: DeleteManyMediaDtosInput;
}


export interface MutationDeleteManyShowcaseHighlightFeaturesArgs {
  input: DeleteManyShowcaseHighlightFeaturesInput;
}


export interface MutationDeleteManyShowcasesArgs {
  input: DeleteManyShowcasesInput;
}


export interface MutationDeleteOneImageListArgs {
  input: DeleteOneImageListInput;
}


export interface MutationDeleteOneMediaDtoArgs {
  input: DeleteOneMediaDtoInput;
}


export interface MutationDeleteOneShowcaseArgs {
  slug: Scalars['String'];
}


export interface MutationDeleteOneShowcaseHighlightFeatureArgs {
  input: DeleteOneShowcaseHighlightFeatureInput;
}


export interface MutationRemoveAuthorFromShowcaseArgs {
  input: RemoveAuthorFromShowcaseInput;
}


export interface MutationRemoveHighlightFeaturesFromShowcaseArgs {
  input: RemoveHighlightFeaturesFromShowcaseInput;
}


export interface MutationRemoveImageFromShowcaseArgs {
  input: RemoveImageFromShowcaseInput;
}


export interface MutationRemoveImageFromShowcaseHighlightFeatureArgs {
  input: RemoveImageFromShowcaseHighlightFeatureInput;
}


export interface MutationRemoveImageListsFromShowcaseArgs {
  input: RemoveImageListsFromShowcaseInput;
}


export interface MutationRemoveImagesFromImageListArgs {
  input: RemoveImagesFromImageListInput;
}


export interface MutationSetAuthorOnShowcaseArgs {
  input: SetAuthorOnShowcaseInput;
}


export interface MutationSetHighlightFeaturesOnShowcaseArgs {
  input: SetHighlightFeaturesOnShowcaseInput;
}


export interface MutationSetImageListsOnShowcaseArgs {
  input: SetImageListsOnShowcaseInput;
}


export interface MutationSetImageOnShowcaseArgs {
  input: SetImageOnShowcaseInput;
}


export interface MutationSetImageOnShowcaseHighlightFeatureArgs {
  input: SetImageOnShowcaseHighlightFeatureInput;
}


export interface MutationSetImagesOnImageListArgs {
  input: SetImagesOnImageListInput;
}


export interface MutationUpdateManyImageListsArgs {
  input: UpdateManyImageListsInput;
}


export interface MutationUpdateManyMediaDtosArgs {
  input: UpdateManyMediaDtosInput;
}


export interface MutationUpdateManyShowcaseHighlightFeaturesArgs {
  input: UpdateManyShowcaseHighlightFeaturesInput;
}


export interface MutationUpdateOneImageListArgs {
  input: UpdateOneImageListInput;
}


export interface MutationUpdateOneMediaDtoArgs {
  input: UpdateOneMediaDtoInput;
}


export interface MutationUpdateOneSettingArgs {
  input: SettingCreateDto;
}


export interface MutationUpdateOneShowcaseHighlightFeatureArgs {
  input: UpdateOneShowcaseHighlightFeatureInput;
}

export interface PageInfo {
  endCursor: Maybe<Scalars['ConnectionCursor']>;
  hasNextPage: Maybe<Scalars['Boolean']>;
  hasPreviousPage: Maybe<Scalars['Boolean']>;
  startCursor: Maybe<Scalars['ConnectionCursor']>;
}

export enum PublishStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export interface PublishStatusFilterComparison {
  eq: Maybe<PublishStatus>;
  gt: Maybe<PublishStatus>;
  gte: Maybe<PublishStatus>;
  iLike: Maybe<PublishStatus>;
  in: Maybe<Array<PublishStatus>>;
  is: Maybe<Scalars['Boolean']>;
  isNot: Maybe<Scalars['Boolean']>;
  like: Maybe<PublishStatus>;
  lt: Maybe<PublishStatus>;
  lte: Maybe<PublishStatus>;
  neq: Maybe<PublishStatus>;
  notILike: Maybe<PublishStatus>;
  notIn: Maybe<Array<PublishStatus>>;
  notLike: Maybe<PublishStatus>;
}

export interface Query {
  imageList: Maybe<ImageList>;
  imageLists: ImageListConnection;
  mediaDto: Maybe<MediaDto>;
  mediaDtos: MediaDtoConnection;
  setting: Maybe<SettingDto>;
  settings: Array<SettingDto>;
  showcase: Showcase;
  showcaseHighlightFeature: Maybe<ShowcaseHighlightFeature>;
  showcaseHighlightFeatures: ShowcaseHighlightFeatureConnection;
  showcases: ShowcaseConnection;
  slugs: Array<Scalars['String']>;
}


export interface QueryImageListArgs {
  id: Scalars['ID'];
}


export interface QueryImageListsArgs {
  filter?: Maybe<ImageListFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<ImageListSort>>;
}


export interface QueryMediaDtoArgs {
  id: Scalars['ID'];
}


export interface QueryMediaDtosArgs {
  filter?: Maybe<MediaDtoFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<MediaDtoSort>>;
}


export interface QuerySettingArgs {
  key: Scalars['String'];
}


export interface QuerySettingsArgs {
  keys: Array<Scalars['String']>;
}


export interface QueryShowcaseArgs {
  slug: Scalars['String'];
}


export interface QueryShowcaseHighlightFeatureArgs {
  id: Scalars['ID'];
}


export interface QueryShowcaseHighlightFeaturesArgs {
  filter?: Maybe<ShowcaseHighlightFeatureFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<ShowcaseHighlightFeatureSort>>;
}


export interface QueryShowcasesArgs {
  filter?: Maybe<ShowcaseFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<ShowcaseSort>>;
}

export interface RemoveAuthorFromShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
}

export interface RemoveHighlightFeaturesFromShowcaseInput {
  id: Scalars['String'];
  relationIds: Array<Scalars['ID']>;
}

export interface RemoveImageFromShowcaseHighlightFeatureInput {
  id: Scalars['ID'];
  relationId: Scalars['ID'];
}

export interface RemoveImageFromShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
}

export interface RemoveImageListsFromShowcaseInput {
  id: Scalars['String'];
  relationIds: Array<Scalars['ID']>;
}

export interface RemoveImagesFromImageListInput {
  id: Scalars['ID'];
  relationIds: Array<Scalars['ID']>;
}

export interface SetAuthorOnShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
}

export interface SetHighlightFeaturesOnShowcaseInput {
  id: Scalars['String'];
  relationIds: Array<Scalars['ID']>;
}

export interface SetImageListsOnShowcaseInput {
  id: Scalars['String'];
  relationIds: Array<Scalars['ID']>;
}

export interface SetImageOnShowcaseHighlightFeatureInput {
  id: Scalars['ID'];
  relationId: Scalars['ID'];
}

export interface SetImageOnShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
}

export interface SetImagesOnImageListInput {
  id: Scalars['ID'];
  relationIds: Array<Scalars['ID']>;
}

export interface SettingCreateDto {
  key: Scalars['String'];
  value: Scalars['JSONObject'];
}

export interface SettingDto {
  id: Scalars['ID'];
  key: Scalars['String'];
  value: Scalars['JSONObject'];
}

export interface SettingDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: SettingDto;
}

export interface Showcase {
  author: User;
  brand: ShowcaseBrand;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  expectedQuantity: Scalars['Float'];
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  expectedSalePrice: Maybe<ShowcasePrice>;
  highlightFeatures: Array<ShowcaseHighlightFeature>;
  id: Scalars['ID'];
  image: MediaDto;
  imageLists: Array<ImageList>;
  name: Scalars['String'];
  publishStatus: PublishStatus;
  slug: Scalars['String'];
  status: ShowcaseStatus;
  updatedAt: Scalars['DateTime'];
}


export interface ShowcaseHighlightFeaturesArgs {
  filter?: Maybe<ShowcaseHighlightFeatureFilter>;
  sorting?: Maybe<Array<ShowcaseHighlightFeatureSort>>;
}


export interface ShowcaseImageListsArgs {
  filter?: Maybe<ImageListFilter>;
  sorting?: Maybe<Array<ImageListSort>>;
}

export interface ShowcaseAggregateGroupBy {
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  publishStatus: Maybe<PublishStatus>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<ShowcaseStatus>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface ShowcaseBrand {
  description: Scalars['String'];
  name: Scalars['String'];
}

export interface ShowcaseBrandInput {
  description: Scalars['String'];
  name: Scalars['String'];
}

export interface ShowcaseConnection {
  edges: Array<ShowcaseEdge>;
  pageInfo: PageInfo;
}

export interface ShowcaseCountAggregate {
  expectedSaleAt: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['Int']>;
  publishStatus: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['Int']>;
  status: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['Int']>;
}

export interface ShowcaseCreateInputDto {
  brand: ShowcaseBrandInput;
  description: Scalars['String'];
  expectedQuantity: Scalars['Float'];
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  expectedSalePrice: Maybe<ShowcasePriceInput>;
  highlightFeatures: Maybe<Array<ShowcaseHfCreateInputDto>>;
  id: Maybe<Scalars['String']>;
  image: MediaInput;
  imageLists: Maybe<Array<CreateImageListInputDto>>;
  name: Scalars['String'];
  status: ShowcaseStatus;
}

export interface ShowcaseDeleteFilter {
  and: Maybe<Array<ShowcaseDeleteFilter>>;
  expectedSaleAt: Maybe<DateFieldComparison>;
  name: Maybe<StringFieldComparison>;
  or: Maybe<Array<ShowcaseDeleteFilter>>;
  publishStatus: Maybe<PublishStatusFilterComparison>;
  slug: Maybe<StringFieldComparison>;
  status: Maybe<ShowcaseStatusFilterComparison>;
  updatedAt: Maybe<DateFieldComparison>;
}

export interface ShowcaseEdge {
  cursor: Scalars['ConnectionCursor'];
  node: Showcase;
}

export interface ShowcaseFilter {
  and: Maybe<Array<ShowcaseFilter>>;
  expectedSaleAt: Maybe<DateFieldComparison>;
  name: Maybe<StringFieldComparison>;
  or: Maybe<Array<ShowcaseFilter>>;
  publishStatus: Maybe<PublishStatusFilterComparison>;
  slug: Maybe<StringFieldComparison>;
  status: Maybe<ShowcaseStatusFilterComparison>;
  updatedAt: Maybe<DateFieldComparison>;
}

export interface ShowcaseHfCreateInputDto {
  description: Scalars['String'];
  id: Maybe<Scalars['String']>;
  image: MediaInput;
  name: Scalars['String'];
}

export interface ShowcaseHighlightFeature {
  description: Scalars['String'];
  id: Scalars['ID'];
  image: MediaDto;
  name: Scalars['String'];
}

export interface ShowcaseHighlightFeatureAggregateGroupBy {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
}

export interface ShowcaseHighlightFeatureConnection {
  edges: Array<ShowcaseHighlightFeatureEdge>;
  pageInfo: PageInfo;
}

export interface ShowcaseHighlightFeatureCountAggregate {
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['Int']>;
}

export interface ShowcaseHighlightFeatureDeleteFilter {
  and: Maybe<Array<ShowcaseHighlightFeatureDeleteFilter>>;
  id: Maybe<IdFilterComparison>;
  name: Maybe<StringFieldComparison>;
  or: Maybe<Array<ShowcaseHighlightFeatureDeleteFilter>>;
}

export interface ShowcaseHighlightFeatureDeleteResponse {
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
}

export interface ShowcaseHighlightFeatureEdge {
  cursor: Scalars['ConnectionCursor'];
  node: ShowcaseHighlightFeature;
}

export interface ShowcaseHighlightFeatureFilter {
  and: Maybe<Array<ShowcaseHighlightFeatureFilter>>;
  id: Maybe<IdFilterComparison>;
  name: Maybe<StringFieldComparison>;
  or: Maybe<Array<ShowcaseHighlightFeatureFilter>>;
}

export interface ShowcaseHighlightFeatureMaxAggregate {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
}

export interface ShowcaseHighlightFeatureMinAggregate {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
}

export interface ShowcaseHighlightFeatureSort {
  direction: SortDirection;
  field: ShowcaseHighlightFeatureSortFields;
  nulls: Maybe<SortNulls>;
}

export enum ShowcaseHighlightFeatureSortFields {
  Id = 'id',
  Name = 'name'
}

export interface ShowcaseHighlightFeatureUpdateFilter {
  and: Maybe<Array<ShowcaseHighlightFeatureUpdateFilter>>;
  id: Maybe<IdFilterComparison>;
  name: Maybe<StringFieldComparison>;
  or: Maybe<Array<ShowcaseHighlightFeatureUpdateFilter>>;
}

export interface ShowcaseMaxAggregate {
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  publishStatus: Maybe<PublishStatus>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<ShowcaseStatus>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface ShowcaseMinAggregate {
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  publishStatus: Maybe<PublishStatus>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<ShowcaseStatus>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface ShowcasePrice {
  pioneer: Scalars['Float'];
  preorder: Scalars['Float'];
  promo: Scalars['Float'];
  regular: Scalars['Float'];
}

export interface ShowcasePriceInput {
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
  Name = 'name',
  PublishStatus = 'publishStatus',
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

export interface UpdateImageList {
  id: Maybe<Scalars['ID']>;
}

export interface UpdateManyImageListsInput {
  filter: ImageListUpdateFilter;
  update: UpdateImageList;
}

export interface UpdateManyMediaDtosInput {
  filter: MediaDtoUpdateFilter;
  update: UpdateMediaDto;
}

export interface UpdateManyResponse {
  updatedCount: Scalars['Int'];
}

export interface UpdateManyShowcaseHighlightFeaturesInput {
  filter: ShowcaseHighlightFeatureUpdateFilter;
  update: UpdateShowcaseHighlightFeature;
}

export interface UpdateMediaDto {
  filename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  mimetype: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
}

export interface UpdateOneImageListInput {
  id: Scalars['ID'];
  update: UpdateImageList;
}

export interface UpdateOneMediaDtoInput {
  id: Scalars['ID'];
  update: UpdateMediaDto;
}

export interface UpdateOneShowcaseHighlightFeatureInput {
  id: Scalars['ID'];
  update: UpdateShowcaseHighlightFeature;
}

export interface UpdateShowcaseHighlightFeature {
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
}

export interface User {
  email: Scalars['String'];
  name: Scalars['String'];
  showcasePosts: Array<Showcase>;
  uid: Scalars['ID'];
}

export type CreateMediaMutationVariables = Exact<{
  input: MediaInput;
}>;


export type CreateMediaMutation = { createOneMediaDto: { id: string, filename: string, mimetype: string, path: string } };

export type CreateShowcaseMutationVariables = Exact<{
  input: ShowcaseCreateInputDto;
}>;


export type CreateShowcaseMutation = { createOneShowcase: { name: string, slug: string } };

export type DeleteMediaMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteMediaMutation = { deleteOneMediaDto: { id: string | null } };

export type QueryBannerQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryBannerQuery = { banner: { value: any } | null };

export type ShowcasePreviewQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ShowcasePreviewQuery = { showcase: { slug: string, name: string, status: ShowcaseStatus, description: string, author: { name: string }, image: { path: string }, expectedSalePrice: { regular: number, pioneer: number, preorder: number, promo: number } | null }, showcases: { edges: Array<{ node: { slug: string, name: string, status: ShowcaseStatus, createdAt: any, image: { path: string } } }> } };

export type ShowcasesQueryVariables = Exact<{
  filter: Maybe<ShowcaseFilter>;
  paging: CursorPaging;
}>;


export type ShowcasesQuery = { showcases: { pageInfo: { hasNextPage: boolean | null, endCursor: any | null }, edges: Array<{ node: { id: string, name: string, slug: string, status: ShowcaseStatus, createdAt: any, image: { path: string } } }> } };

export type SlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type SlugsQuery = { slugs: Array<string> };
