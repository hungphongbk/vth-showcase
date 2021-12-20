import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export interface AddCommentsToShowcaseInput {
  id: Scalars['String'];
  relationIds: Array<Scalars['ID']>;
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

export enum AuthRoleType {
  Admin = 'ADMIN',
  Investor = 'INVESTOR',
  Superadmin = 'SUPERADMIN',
  User = 'USER'
}

export interface CommentCreateDto {
  content: Scalars['String'];
  rate: Array<CommentRateEnum>;
}

export interface CommentDto {
  author: Maybe<User>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  rate: Array<CommentRateEnum>;
  updatedAt: Scalars['DateTime'];
}

export interface CommentDtoAggregateGroupBy {
  id: Maybe<Scalars['ID']>;
}

export interface CommentDtoAvgAggregate {
  id: Maybe<Scalars['Float']>;
}

export interface CommentDtoConnection {
  edges: Array<CommentDtoEdge>;
  pageInfo: PageInfo;
}

export interface CommentDtoCountAggregate {
  id: Maybe<Scalars['Int']>;
}

export interface CommentDtoDeleteFilter {
  and: Maybe<Array<CommentDtoDeleteFilter>>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<CommentDtoDeleteFilter>>;
}

export interface CommentDtoDeleteResponse {
  content: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  rate: Maybe<Array<CommentRateEnum>>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface CommentDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: CommentDto;
}

export interface CommentDtoFilter {
  and: Maybe<Array<CommentDtoFilter>>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<CommentDtoFilter>>;
}

export interface CommentDtoMaxAggregate {
  id: Maybe<Scalars['ID']>;
}

export interface CommentDtoMinAggregate {
  id: Maybe<Scalars['ID']>;
}

export interface CommentDtoSort {
  direction: SortDirection;
  field: CommentDtoSortFields;
  nulls: Maybe<SortNulls>;
}

export enum CommentDtoSortFields {
  Id = 'id'
}

export interface CommentDtoSumAggregate {
  id: Maybe<Scalars['Float']>;
}

export interface CommentDtoUpdateFilter {
  and: Maybe<Array<CommentDtoUpdateFilter>>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<CommentDtoUpdateFilter>>;
}

export enum CommentRateEnum {
  CoTiemNang = 'CO_TIEM_NANG',
  CungDuoc = 'CUNG_DUOC',
  DangTien = 'DANG_TIEN',
  Hay = 'HAY',
  SieuPham = 'SIEU_PHAM',
  XamXi = 'XAM_XI'
}


export interface CreateCommentDto {
  content: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  rate: Maybe<Array<CommentRateEnum>>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface CreateImageListInputDto {
  images: Maybe<Array<MediaInput>>;
}

export interface CreateInvestmentPackageDto {
  benefitRate: Maybe<Scalars['Float']>;
  count: Maybe<Scalars['Float']>;
  displayName: Maybe<Scalars['String']>;
  fundedRate: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['ID']>;
}

export interface CreateManyCommentDtosInput {
  commentDtos: Array<CreateCommentDto>;
}

export interface CreateManyImageListsInput {
  imageLists: Array<CreateImageListInputDto>;
}

export interface CreateManyInvestmentPackageDtosInput {
  investmentPackageDtos: Array<CreateInvestmentPackageDto>;
}

export interface CreateManyMediaDtosInput {
  mediaDtos: Array<MediaInput>;
}

export interface CreateManyShowcaseHighlightFeaturesInput {
  showcaseHighlightFeatures: Array<ShowcaseHfCreateInputDto>;
}

export interface CreateOneCommentDtoInput {
  commentDto: CreateCommentDto;
}

export interface CreateOneImageListInput {
  imageList: CreateImageListInputDto;
}

export interface CreateOneInvestmentPackageDtoInput {
  investmentPackageDto: CreateInvestmentPackageDto;
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


export interface DeleteManyCommentDtosInput {
  filter: CommentDtoDeleteFilter;
}

export interface DeleteManyImageListsInput {
  filter: ImageListDeleteFilter;
}

export interface DeleteManyInvestmentPackageDtosInput {
  filter: InvestmentPackageDtoDeleteFilter;
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

export interface DeleteOneCommentDtoInput {
  id: Scalars['ID'];
}

export interface DeleteOneImageListInput {
  id: Scalars['ID'];
}

export interface DeleteOneInvestmentPackageDtoInput {
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

export interface InvestmentPackageDto {
  benefitRate: Scalars['Float'];
  count: Scalars['Float'];
  displayName: Scalars['String'];
  fundedRate: Scalars['Float'];
  id: Scalars['ID'];
}

export interface InvestmentPackageDtoAggregateGroupBy {
  displayName: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
}

export interface InvestmentPackageDtoAvgAggregate {
  id: Maybe<Scalars['Float']>;
}

export interface InvestmentPackageDtoConnection {
  edges: Array<InvestmentPackageDtoEdge>;
  pageInfo: PageInfo;
}

export interface InvestmentPackageDtoCountAggregate {
  displayName: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
}

export interface InvestmentPackageDtoDeleteFilter {
  and: Maybe<Array<InvestmentPackageDtoDeleteFilter>>;
  displayName: Maybe<StringFieldComparison>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<InvestmentPackageDtoDeleteFilter>>;
}

export interface InvestmentPackageDtoDeleteResponse {
  benefitRate: Maybe<Scalars['Float']>;
  count: Maybe<Scalars['Float']>;
  displayName: Maybe<Scalars['String']>;
  fundedRate: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['ID']>;
}

export interface InvestmentPackageDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: InvestmentPackageDto;
}

export interface InvestmentPackageDtoFilter {
  and: Maybe<Array<InvestmentPackageDtoFilter>>;
  displayName: Maybe<StringFieldComparison>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<InvestmentPackageDtoFilter>>;
}

export interface InvestmentPackageDtoMaxAggregate {
  displayName: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
}

export interface InvestmentPackageDtoMinAggregate {
  displayName: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
}

export interface InvestmentPackageDtoSort {
  direction: SortDirection;
  field: InvestmentPackageDtoSortFields;
  nulls: Maybe<SortNulls>;
}

export enum InvestmentPackageDtoSortFields {
  DisplayName = 'displayName',
  Id = 'id'
}

export interface InvestmentPackageDtoSumAggregate {
  id: Maybe<Scalars['Float']>;
}

export interface InvestmentPackageDtoUpdateFilter {
  and: Maybe<Array<InvestmentPackageDtoUpdateFilter>>;
  displayName: Maybe<StringFieldComparison>;
  id: Maybe<IdFilterComparison>;
  or: Maybe<Array<InvestmentPackageDtoUpdateFilter>>;
}


export interface MediaDto extends IdInterface {
  filename: Scalars['String'];
  id: Scalars['ID'];
  mimetype: Scalars['String'];
  path: Scalars['String'];
  preloadUrl: Maybe<Scalars['String']>;
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
  preloadUrl: Maybe<Scalars['String']>;
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
  preloadUrl: Maybe<Scalars['String']>;
}

export interface Mutation {
  addCommentsToShowcase: Showcase;
  addHighlightFeaturesToShowcase: Showcase;
  addImageListsToShowcase: Showcase;
  addImagesToImageList: ImageList;
  createManyCommentDtos: Array<CommentDto>;
  createManyImageLists: Array<ImageList>;
  createManyInvestmentPackageDtos: Array<InvestmentPackageDto>;
  createManyMediaDtos: Array<MediaDto>;
  createManyShowcaseHighlightFeatures: Array<ShowcaseHighlightFeature>;
  createOneCommentDto: CommentDto;
  createOneImageList: ImageList;
  createOneInvestmentPackageDto: InvestmentPackageDto;
  createOneMediaDto: MediaDto;
  createOneSetting: Scalars['Boolean'];
  createOneShowcase: Showcase;
  createOneShowcaseHighlightFeature: ShowcaseHighlightFeature;
  deleteManyCommentDtos: DeleteManyResponse;
  deleteManyImageLists: DeleteManyResponse;
  deleteManyInvestmentPackageDtos: DeleteManyResponse;
  deleteManyMediaDtos: DeleteManyResponse;
  deleteManyShowcaseHighlightFeatures: DeleteManyResponse;
  deleteManyShowcases: DeleteManyResponse;
  deleteOneCommentDto: CommentDtoDeleteResponse;
  deleteOneImageList: ImageListDeleteResponse;
  deleteOneInvestmentPackageDto: InvestmentPackageDtoDeleteResponse;
  deleteOneMediaDto: MediaDtoDeleteResponse;
  deleteOneShowcase: Scalars['Boolean'];
  deleteOneShowcaseHighlightFeature: ShowcaseHighlightFeatureDeleteResponse;
  postAnonymousComment: CommentDto;
  postAuthorizedComment: CommentDto;
  removeAuthorFromCommentDto: CommentDto;
  removeAuthorFromShowcase: Showcase;
  removeCommentsFromShowcase: Showcase;
  removeHighlightFeaturesFromShowcase: Showcase;
  removeImageFromShowcase: Showcase;
  removeImageFromShowcaseHighlightFeature: ShowcaseHighlightFeature;
  removeImageListsFromShowcase: Showcase;
  removeImagesFromImageList: ImageList;
  setAuthorOnCommentDto: CommentDto;
  setAuthorOnShowcase: Showcase;
  setCommentsOnShowcase: Showcase;
  setHighlightFeaturesOnShowcase: Showcase;
  setImageListsOnShowcase: Showcase;
  setImageOnShowcase: Showcase;
  setImageOnShowcaseHighlightFeature: ShowcaseHighlightFeature;
  setImagesOnImageList: ImageList;
  submitInvestor: Scalars['Boolean'];
  updateManyCommentDtos: UpdateManyResponse;
  updateManyImageLists: UpdateManyResponse;
  updateManyInvestmentPackageDtos: UpdateManyResponse;
  updateManyMediaDtos: UpdateManyResponse;
  updateManyShowcaseHighlightFeatures: UpdateManyResponse;
  updateOneCommentDto: CommentDto;
  updateOneImageList: ImageList;
  updateOneInvestmentPackageDto: InvestmentPackageDto;
  updateOneMediaDto: MediaDto;
  updateOneSetting: Scalars['Boolean'];
  updateOneShowcase: Scalars['Boolean'];
  updateOneShowcaseHighlightFeature: ShowcaseHighlightFeature;
  updateOneUser: Scalars['Boolean'];
}


export interface MutationAddCommentsToShowcaseArgs {
  input: AddCommentsToShowcaseInput;
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


export interface MutationCreateManyCommentDtosArgs {
  input: CreateManyCommentDtosInput;
}


export interface MutationCreateManyImageListsArgs {
  input: CreateManyImageListsInput;
}


export interface MutationCreateManyInvestmentPackageDtosArgs {
  input: CreateManyInvestmentPackageDtosInput;
}


export interface MutationCreateManyMediaDtosArgs {
  input: CreateManyMediaDtosInput;
}


export interface MutationCreateManyShowcaseHighlightFeaturesArgs {
  input: CreateManyShowcaseHighlightFeaturesInput;
}


export interface MutationCreateOneCommentDtoArgs {
  input: CreateOneCommentDtoInput;
}


export interface MutationCreateOneImageListArgs {
  input: CreateOneImageListInput;
}


export interface MutationCreateOneInvestmentPackageDtoArgs {
  input: CreateOneInvestmentPackageDtoInput;
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


export interface MutationDeleteManyCommentDtosArgs {
  input: DeleteManyCommentDtosInput;
}


export interface MutationDeleteManyImageListsArgs {
  input: DeleteManyImageListsInput;
}


export interface MutationDeleteManyInvestmentPackageDtosArgs {
  input: DeleteManyInvestmentPackageDtosInput;
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


export interface MutationDeleteOneCommentDtoArgs {
  input: DeleteOneCommentDtoInput;
}


export interface MutationDeleteOneImageListArgs {
  input: DeleteOneImageListInput;
}


export interface MutationDeleteOneInvestmentPackageDtoArgs {
  input: DeleteOneInvestmentPackageDtoInput;
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


export interface MutationPostAnonymousCommentArgs {
  input: CommentCreateDto;
  slug: Scalars['String'];
}


export interface MutationPostAuthorizedCommentArgs {
  input: CommentCreateDto;
  slug: Scalars['String'];
}


export interface MutationRemoveAuthorFromCommentDtoArgs {
  input: RemoveAuthorFromCommentDtoInput;
}


export interface MutationRemoveAuthorFromShowcaseArgs {
  input: RemoveAuthorFromShowcaseInput;
}


export interface MutationRemoveCommentsFromShowcaseArgs {
  input: RemoveCommentsFromShowcaseInput;
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


export interface MutationSetAuthorOnCommentDtoArgs {
  input: SetAuthorOnCommentDtoInput;
}


export interface MutationSetAuthorOnShowcaseArgs {
  input: SetAuthorOnShowcaseInput;
}


export interface MutationSetCommentsOnShowcaseArgs {
  input: SetCommentsOnShowcaseInput;
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


export interface MutationSubmitInvestorArgs {
  form: SubmitInvestorInputDto;
}


export interface MutationUpdateManyCommentDtosArgs {
  input: UpdateManyCommentDtosInput;
}


export interface MutationUpdateManyImageListsArgs {
  input: UpdateManyImageListsInput;
}


export interface MutationUpdateManyInvestmentPackageDtosArgs {
  input: UpdateManyInvestmentPackageDtosInput;
}


export interface MutationUpdateManyMediaDtosArgs {
  input: UpdateManyMediaDtosInput;
}


export interface MutationUpdateManyShowcaseHighlightFeaturesArgs {
  input: UpdateManyShowcaseHighlightFeaturesInput;
}


export interface MutationUpdateOneCommentDtoArgs {
  input: UpdateOneCommentDtoInput;
}


export interface MutationUpdateOneImageListArgs {
  input: UpdateOneImageListInput;
}


export interface MutationUpdateOneInvestmentPackageDtoArgs {
  input: UpdateOneInvestmentPackageDtoInput;
}


export interface MutationUpdateOneMediaDtoArgs {
  input: UpdateOneMediaDtoInput;
}


export interface MutationUpdateOneSettingArgs {
  input: SettingCreateDto;
}


export interface MutationUpdateOneShowcaseArgs {
  input: ShowcaseUpdateInputDto;
  slug: Scalars['String'];
}


export interface MutationUpdateOneShowcaseHighlightFeatureArgs {
  input: UpdateOneShowcaseHighlightFeatureInput;
}


export interface MutationUpdateOneUserArgs {
  role: AuthRoleType;
  uid: Scalars['String'];
}

export interface OffsetPageInfo {
  hasNextPage: Maybe<Scalars['Boolean']>;
  hasPreviousPage: Maybe<Scalars['Boolean']>;
}

export interface OffsetPaging {
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
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
  commentDto: Maybe<CommentDto>;
  commentDtos: CommentDtoConnection;
  currentUser: User;
  getAllUsers: Array<User>;
  imageList: Maybe<ImageList>;
  imageLists: ImageListConnection;
  investmentPackageDto: Maybe<InvestmentPackageDto>;
  investmentPackageDtos: InvestmentPackageDtoConnection;
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


export interface QueryCommentDtoArgs {
  id: Scalars['ID'];
}


export interface QueryCommentDtosArgs {
  filter?: Maybe<CommentDtoFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<CommentDtoSort>>;
}


export interface QueryImageListArgs {
  id: Scalars['ID'];
}


export interface QueryImageListsArgs {
  filter?: Maybe<ImageListFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<ImageListSort>>;
}


export interface QueryInvestmentPackageDtoArgs {
  id: Scalars['ID'];
}


export interface QueryInvestmentPackageDtosArgs {
  filter?: Maybe<InvestmentPackageDtoFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<InvestmentPackageDtoSort>>;
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

export interface RemoveAuthorFromCommentDtoInput {
  id: Scalars['ID'];
  relationId: Scalars['ID'];
}

export interface RemoveAuthorFromShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
}

export interface RemoveCommentsFromShowcaseInput {
  id: Scalars['String'];
  relationIds: Array<Scalars['ID']>;
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

export interface SetAuthorOnCommentDtoInput {
  id: Scalars['ID'];
  relationId: Scalars['ID'];
}

export interface SetAuthorOnShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
}

export interface SetCommentsOnShowcaseInput {
  id: Scalars['String'];
  relationIds: Array<Scalars['ID']>;
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

export interface Showcase {
  author: User;
  brand: ShowcaseBrand;
  comments: ShowcaseCommentsConnection;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  expectedQuantity: Maybe<ShowcasePrice>;
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  expectedSaleEndAt: Maybe<Scalars['DateTime']>;
  expectedSalePrice: Maybe<ShowcasePrice>;
  highlightFeatures: Array<ShowcaseHighlightFeature>;
  id: Scalars['ID'];
  image: MediaDto;
  imageLists: Array<ImageList>;
  inventory: Maybe<ShowcaseInventoryDto>;
  investorStat: Maybe<ShowcaseInvestorStatDto>;
  name: Scalars['String'];
  publishStatus: PublishStatus;
  slug: Scalars['String'];
  status: ShowcaseStatus;
  updatedAt: Scalars['DateTime'];
}


export interface ShowcaseCommentsArgs {
  filter?: Maybe<CommentDtoFilter>;
  paging?: Maybe<OffsetPaging>;
  sorting?: Maybe<Array<CommentDtoSort>>;
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
  expectedSaleEndAt: Maybe<Scalars['DateTime']>;
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

export interface ShowcaseCommentsConnection {
  nodes: Array<CommentDto>;
  pageInfo: OffsetPageInfo;
  totalCount: Scalars['Int'];
}

export interface ShowcaseConnection {
  edges: Array<ShowcaseEdge>;
  pageInfo: PageInfo;
}

export interface ShowcaseCountAggregate {
  expectedSaleAt: Maybe<Scalars['Int']>;
  expectedSaleEndAt: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['Int']>;
  publishStatus: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['Int']>;
  status: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['Int']>;
}

export interface ShowcaseCreateInputDto {
  brand: ShowcaseBrandInput;
  description: Scalars['String'];
  expectedQuantity: Maybe<ShowcasePriceInput>;
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  expectedSaleEndAt: Maybe<Scalars['DateTime']>;
  expectedSalePrice: Maybe<ShowcasePriceInput>;
  highlightFeatures: Maybe<Array<ShowcaseHfCreateInputDto>>;
  id: Maybe<Scalars['String']>;
  image: MediaInput;
  imageLists: Maybe<Array<CreateImageListInputDto>>;
  inventory: Maybe<ShowcaseInventoryDtoInput>;
  name: Scalars['String'];
  publishStatus: Maybe<PublishStatus>;
  status: ShowcaseStatus;
}

export interface ShowcaseDeleteFilter {
  and: Maybe<Array<ShowcaseDeleteFilter>>;
  expectedSaleAt: Maybe<DateFieldComparison>;
  expectedSaleEndAt: Maybe<DateFieldComparison>;
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
  expectedSaleEndAt: Maybe<DateFieldComparison>;
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

export interface ShowcaseInventoryDto {
  adCostRate: Scalars['Float'];
  capitalizationRate: Scalars['Float'];
  expectedGrowthRate: Scalars['Float'];
  operatingCostRate: Scalars['Float'];
  revolvingInterval: Scalars['Float'];
}

export interface ShowcaseInventoryDtoInput {
  adCostRate: Scalars['Float'];
  capitalizationRate: Scalars['Float'];
  expectedGrowthRate: Scalars['Float'];
  operatingCostRate: Scalars['Float'];
  revolvingInterval: Scalars['Float'];
}

export interface ShowcaseInvestorStatDto {
  adCost: Scalars['String'];
  adCostRate: Scalars['Float'];
  campaignDuration: Scalars['Float'];
  capitalizationCost: Scalars['String'];
  capitalizationRate: Scalars['Float'];
  expectedProfit: Scalars['String'];
  firstYearRevenue: Scalars['Float'];
  growthRate: Scalars['Float'];
  initialCapital: Scalars['String'];
  operatingCost: Scalars['String'];
  operatingCostRate: Scalars['Float'];
  revolvingInterval: Scalars['Float'];
  revolvingPerDay: Scalars['Float'];
  totalRevenue: Scalars['Float'];
}

export interface ShowcaseMaxAggregate {
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  expectedSaleEndAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  publishStatus: Maybe<PublishStatus>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<ShowcaseStatus>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface ShowcaseMinAggregate {
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  expectedSaleEndAt: Maybe<Scalars['DateTime']>;
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
  ExpectedSaleEndAt = 'expectedSaleEndAt',
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

export interface ShowcaseUpdateInputDto {
  brand: Maybe<ShowcaseBrandInput>;
  description: Maybe<Scalars['String']>;
  expectedQuantity: Maybe<ShowcasePriceInput>;
  expectedSaleAt: Maybe<Scalars['DateTime']>;
  expectedSaleEndAt: Maybe<Scalars['DateTime']>;
  expectedSalePrice: Maybe<ShowcasePriceInput>;
  highlightFeatures: Maybe<Array<ShowcaseHfCreateInputDto>>;
  id: Maybe<Scalars['String']>;
  image: Maybe<MediaInput>;
  imageLists: Maybe<Array<CreateImageListInputDto>>;
  inventory: Maybe<ShowcaseInventoryDtoInput>;
  name: Maybe<Scalars['String']>;
  publishStatus: Maybe<PublishStatus>;
  status: Maybe<ShowcaseStatus>;
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

export interface SubmitInvestorInputDto {
  email: Scalars['String'];
  fund: Scalars['String'];
  job: Scalars['String'];
  method: Scalars['String'];
  phone: Scalars['String'];
  purpose: Scalars['String'];
}

export interface UpdateCommentDto {
  content: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  rate: Maybe<Array<CommentRateEnum>>;
  updatedAt: Maybe<Scalars['DateTime']>;
}

export interface UpdateImageList {
  id: Maybe<Scalars['ID']>;
}

export interface UpdateInvestmentPackageDto {
  benefitRate: Maybe<Scalars['Float']>;
  count: Maybe<Scalars['Float']>;
  displayName: Maybe<Scalars['String']>;
  fundedRate: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['ID']>;
}

export interface UpdateManyCommentDtosInput {
  filter: CommentDtoUpdateFilter;
  update: UpdateCommentDto;
}

export interface UpdateManyImageListsInput {
  filter: ImageListUpdateFilter;
  update: UpdateImageList;
}

export interface UpdateManyInvestmentPackageDtosInput {
  filter: InvestmentPackageDtoUpdateFilter;
  update: UpdateInvestmentPackageDto;
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
  preloadUrl: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
}

export interface UpdateOneCommentDtoInput {
  id: Scalars['ID'];
  update: UpdateCommentDto;
}

export interface UpdateOneImageListInput {
  id: Scalars['ID'];
  update: UpdateImageList;
}

export interface UpdateOneInvestmentPackageDtoInput {
  id: Scalars['ID'];
  update: UpdateInvestmentPackageDto;
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
  approvalStatus: UserStatusEnum;
  email: Scalars['String'];
  name: Scalars['String'];
  photoURL: Scalars['String'];
  role: AuthRoleType;
  showcases: ShowcaseConnection;
  uid: Scalars['ID'];
}

export enum UserStatusEnum {
  ApprovedCreator = 'APPROVED_CREATOR',
  ApprovedInvestor = 'APPROVED_INVESTOR',
  PendingCreator = 'PENDING_CREATOR',
  PendingInvestor = 'PENDING_INVESTOR'
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

export type PostAnonymousCommentMutationVariables = Exact<{
  slug: Scalars['String'];
  input: CommentCreateDto;
}>;


export type PostAnonymousCommentMutation = { postAnonymousComment: { id: string } };

export type PostAuthorizedCommentMutationVariables = Exact<{
  slug: Scalars['String'];
  input: CommentCreateDto;
}>;


export type PostAuthorizedCommentMutation = { postAuthorizedComment: { id: string } };

export type QueryBannerQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryBannerQuery = { banner: { value: any } | null };

export type QueryCommentsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type QueryCommentsQuery = { showcase: { slug: string, comments: { nodes: Array<{ id: string, content: string, rate: Array<CommentRateEnum>, author: { email: string, name: string } | null }> } } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { currentUser: { email: string, name: string, role: AuthRoleType, approvalStatus: UserStatusEnum } };

export type DraftShowcasesQueryVariables = Exact<{ [key: string]: never; }>;


export type DraftShowcasesQuery = { showcases: { edges: Array<{ node: { slug: string, name: string, image: { path: string } } }> } };

export type ShowcaseDetailQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ShowcaseDetailQuery = { showcase: { slug: string, name: string, status: ShowcaseStatus, description: string, author: { email: string, name: string }, image: { path: string, preloadUrl: string | null }, expectedSalePrice: { regular: number, pioneer: number, preorder: number, promo: number } | null, investorStat: { totalRevenue: number, firstYearRevenue: number, campaignDuration: number, growthRate: number, adCostRate: number, adCost: string, operatingCostRate: number, operatingCost: string, initialCapital: string, revolvingInterval: number, revolvingPerDay: number } | null }, showcases: { edges: Array<{ node: { slug: string, name: string, status: ShowcaseStatus, createdAt: any, image: { path: string, preloadUrl: string | null } } }> } };

export type ShowcasePreviewQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ShowcasePreviewQuery = { showcase: { slug: string, name: string, status: ShowcaseStatus, description: string, author: { name: string }, image: { path: string }, expectedSalePrice: { regular: number, pioneer: number, preorder: number, promo: number } | null }, showcases: { edges: Array<{ node: { slug: string, name: string, status: ShowcaseStatus, createdAt: any, image: { path: string, preloadUrl: string | null } } }> } };

export type ShowcasesQueryVariables = Exact<{
  filter: Maybe<ShowcaseFilter>;
  paging: CursorPaging;
}>;


export type ShowcasesQuery = { showcases: { pageInfo: { hasNextPage: boolean | null, endCursor: any | null }, edges: Array<{ node: { id: string, name: string, slug: string, status: ShowcaseStatus, createdAt: any, image: { path: string, preloadUrl: string | null } } }> } };

export type SlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type SlugsQuery = { slugs: Array<string> };


export const CreateMediaDocument = gql`
    mutation createMedia($input: MediaInput!) {
  createOneMediaDto(input: {mediaDto: $input}) {
    id
    filename
    mimetype
    path
  }
}
    `;
export type CreateMediaMutationFn = Apollo.MutationFunction<CreateMediaMutation, CreateMediaMutationVariables>;

/**
 * __useCreateMediaMutation__
 *
 * To run a mutation, you first call `useCreateMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMediaMutation, { data, loading, error }] = useCreateMediaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMediaMutation(baseOptions?: Apollo.MutationHookOptions<CreateMediaMutation, CreateMediaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMediaMutation, CreateMediaMutationVariables>(CreateMediaDocument, options);
      }
export type CreateMediaMutationHookResult = ReturnType<typeof useCreateMediaMutation>;
export type CreateMediaMutationResult = Apollo.MutationResult<CreateMediaMutation>;
export type CreateMediaMutationOptions = Apollo.BaseMutationOptions<CreateMediaMutation, CreateMediaMutationVariables>;
export const CreateShowcaseDocument = gql`
    mutation createShowcase($input: ShowcaseCreateInputDto!) {
  createOneShowcase(input: $input) {
    name
    slug
  }
}
    `;
export type CreateShowcaseMutationFn = Apollo.MutationFunction<CreateShowcaseMutation, CreateShowcaseMutationVariables>;

/**
 * __useCreateShowcaseMutation__
 *
 * To run a mutation, you first call `useCreateShowcaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShowcaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShowcaseMutation, { data, loading, error }] = useCreateShowcaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateShowcaseMutation(baseOptions?: Apollo.MutationHookOptions<CreateShowcaseMutation, CreateShowcaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShowcaseMutation, CreateShowcaseMutationVariables>(CreateShowcaseDocument, options);
      }
export type CreateShowcaseMutationHookResult = ReturnType<typeof useCreateShowcaseMutation>;
export type CreateShowcaseMutationResult = Apollo.MutationResult<CreateShowcaseMutation>;
export type CreateShowcaseMutationOptions = Apollo.BaseMutationOptions<CreateShowcaseMutation, CreateShowcaseMutationVariables>;
export const DeleteMediaDocument = gql`
    mutation deleteMedia($id: ID!) {
  deleteOneMediaDto(input: {id: $id}) {
    id
  }
}
    `;
export type DeleteMediaMutationFn = Apollo.MutationFunction<DeleteMediaMutation, DeleteMediaMutationVariables>;

/**
 * __useDeleteMediaMutation__
 *
 * To run a mutation, you first call `useDeleteMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMediaMutation, { data, loading, error }] = useDeleteMediaMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMediaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMediaMutation, DeleteMediaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMediaMutation, DeleteMediaMutationVariables>(DeleteMediaDocument, options);
      }
export type DeleteMediaMutationHookResult = ReturnType<typeof useDeleteMediaMutation>;
export type DeleteMediaMutationResult = Apollo.MutationResult<DeleteMediaMutation>;
export type DeleteMediaMutationOptions = Apollo.BaseMutationOptions<DeleteMediaMutation, DeleteMediaMutationVariables>;
export const PostAnonymousCommentDocument = gql`
    mutation postAnonymousComment($slug: String!, $input: CommentCreateDto!) {
  postAnonymousComment(slug: $slug, input: $input) {
    id
  }
}
    `;
export type PostAnonymousCommentMutationFn = Apollo.MutationFunction<PostAnonymousCommentMutation, PostAnonymousCommentMutationVariables>;

/**
 * __usePostAnonymousCommentMutation__
 *
 * To run a mutation, you first call `usePostAnonymousCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAnonymousCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAnonymousCommentMutation, { data, loading, error }] = usePostAnonymousCommentMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostAnonymousCommentMutation(baseOptions?: Apollo.MutationHookOptions<PostAnonymousCommentMutation, PostAnonymousCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostAnonymousCommentMutation, PostAnonymousCommentMutationVariables>(PostAnonymousCommentDocument, options);
      }
export type PostAnonymousCommentMutationHookResult = ReturnType<typeof usePostAnonymousCommentMutation>;
export type PostAnonymousCommentMutationResult = Apollo.MutationResult<PostAnonymousCommentMutation>;
export type PostAnonymousCommentMutationOptions = Apollo.BaseMutationOptions<PostAnonymousCommentMutation, PostAnonymousCommentMutationVariables>;
export const PostAuthorizedCommentDocument = gql`
    mutation postAuthorizedComment($slug: String!, $input: CommentCreateDto!) {
  postAuthorizedComment(slug: $slug, input: $input) {
    id
  }
}
    `;
export type PostAuthorizedCommentMutationFn = Apollo.MutationFunction<PostAuthorizedCommentMutation, PostAuthorizedCommentMutationVariables>;

/**
 * __usePostAuthorizedCommentMutation__
 *
 * To run a mutation, you first call `usePostAuthorizedCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAuthorizedCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAuthorizedCommentMutation, { data, loading, error }] = usePostAuthorizedCommentMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostAuthorizedCommentMutation(baseOptions?: Apollo.MutationHookOptions<PostAuthorizedCommentMutation, PostAuthorizedCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostAuthorizedCommentMutation, PostAuthorizedCommentMutationVariables>(PostAuthorizedCommentDocument, options);
      }
export type PostAuthorizedCommentMutationHookResult = ReturnType<typeof usePostAuthorizedCommentMutation>;
export type PostAuthorizedCommentMutationResult = Apollo.MutationResult<PostAuthorizedCommentMutation>;
export type PostAuthorizedCommentMutationOptions = Apollo.BaseMutationOptions<PostAuthorizedCommentMutation, PostAuthorizedCommentMutationVariables>;
export const QueryBannerDocument = gql`
    query queryBanner {
  banner: setting(key: "common:banner") {
    value
  }
}
    `;

/**
 * __useQueryBannerQuery__
 *
 * To run a query within a React component, call `useQueryBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryBannerQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryBannerQuery(baseOptions?: Apollo.QueryHookOptions<QueryBannerQuery, QueryBannerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryBannerQuery, QueryBannerQueryVariables>(QueryBannerDocument, options);
      }
export function useQueryBannerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryBannerQuery, QueryBannerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryBannerQuery, QueryBannerQueryVariables>(QueryBannerDocument, options);
        }
export type QueryBannerQueryHookResult = ReturnType<typeof useQueryBannerQuery>;
export type QueryBannerLazyQueryHookResult = ReturnType<typeof useQueryBannerLazyQuery>;
export type QueryBannerQueryResult = Apollo.QueryResult<QueryBannerQuery, QueryBannerQueryVariables>;
export function refetchQueryBannerQuery(variables?: QueryBannerQueryVariables) {
      return { query: QueryBannerDocument, variables: variables }
    }
export const QueryCommentsDocument = gql`
    query QueryComments($slug: String!) {
  showcase(slug: $slug) {
    slug
    comments {
      nodes {
        id
        author {
          email
          name
        }
        content
        rate
      }
    }
  }
}
    `;

/**
 * __useQueryCommentsQuery__
 *
 * To run a query within a React component, call `useQueryCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryCommentsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useQueryCommentsQuery(baseOptions: Apollo.QueryHookOptions<QueryCommentsQuery, QueryCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryCommentsQuery, QueryCommentsQueryVariables>(QueryCommentsDocument, options);
      }
export function useQueryCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryCommentsQuery, QueryCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryCommentsQuery, QueryCommentsQueryVariables>(QueryCommentsDocument, options);
        }
export type QueryCommentsQueryHookResult = ReturnType<typeof useQueryCommentsQuery>;
export type QueryCommentsLazyQueryHookResult = ReturnType<typeof useQueryCommentsLazyQuery>;
export type QueryCommentsQueryResult = Apollo.QueryResult<QueryCommentsQuery, QueryCommentsQueryVariables>;
export function refetchQueryCommentsQuery(variables: QueryCommentsQueryVariables) {
      return { query: QueryCommentsDocument, variables: variables }
    }
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    email
    name
    role
    approvalStatus
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export function refetchCurrentUserQuery(variables?: CurrentUserQueryVariables) {
      return { query: CurrentUserDocument, variables: variables }
    }
export const DraftShowcasesDocument = gql`
    query DraftShowcases {
  showcases(filter: {publishStatus: {eq: DRAFT}}) {
    edges {
      node {
        slug
        name
        image {
          path
        }
      }
    }
  }
}
    `;

/**
 * __useDraftShowcasesQuery__
 *
 * To run a query within a React component, call `useDraftShowcasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDraftShowcasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDraftShowcasesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDraftShowcasesQuery(baseOptions?: Apollo.QueryHookOptions<DraftShowcasesQuery, DraftShowcasesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DraftShowcasesQuery, DraftShowcasesQueryVariables>(DraftShowcasesDocument, options);
      }
export function useDraftShowcasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DraftShowcasesQuery, DraftShowcasesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DraftShowcasesQuery, DraftShowcasesQueryVariables>(DraftShowcasesDocument, options);
        }
export type DraftShowcasesQueryHookResult = ReturnType<typeof useDraftShowcasesQuery>;
export type DraftShowcasesLazyQueryHookResult = ReturnType<typeof useDraftShowcasesLazyQuery>;
export type DraftShowcasesQueryResult = Apollo.QueryResult<DraftShowcasesQuery, DraftShowcasesQueryVariables>;
export function refetchDraftShowcasesQuery(variables?: DraftShowcasesQueryVariables) {
      return { query: DraftShowcasesDocument, variables: variables }
    }
export const ShowcaseDetailDocument = gql`
    query ShowcaseDetail($slug: String!) {
  showcase(slug: $slug) {
    slug
    name
    author {
      email
      name
    }
    status
    image {
      path
      preloadUrl
    }
    description
    expectedSalePrice {
      regular
      pioneer
      preorder
      promo
    }
    investorStat {
      totalRevenue
      firstYearRevenue
      campaignDuration
      growthRate
      adCostRate
      adCost
      operatingCostRate
      operatingCost
      initialCapital
      revolvingInterval
      revolvingPerDay
    }
  }
  showcases(filter: {slug: {neq: $slug}}) {
    edges {
      node {
        slug
        name
        status
        image {
          path
          preloadUrl
        }
        createdAt
      }
    }
  }
}
    `;

/**
 * __useShowcaseDetailQuery__
 *
 * To run a query within a React component, call `useShowcaseDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowcaseDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowcaseDetailQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useShowcaseDetailQuery(baseOptions: Apollo.QueryHookOptions<ShowcaseDetailQuery, ShowcaseDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowcaseDetailQuery, ShowcaseDetailQueryVariables>(ShowcaseDetailDocument, options);
      }
export function useShowcaseDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowcaseDetailQuery, ShowcaseDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowcaseDetailQuery, ShowcaseDetailQueryVariables>(ShowcaseDetailDocument, options);
        }
export type ShowcaseDetailQueryHookResult = ReturnType<typeof useShowcaseDetailQuery>;
export type ShowcaseDetailLazyQueryHookResult = ReturnType<typeof useShowcaseDetailLazyQuery>;
export type ShowcaseDetailQueryResult = Apollo.QueryResult<ShowcaseDetailQuery, ShowcaseDetailQueryVariables>;
export function refetchShowcaseDetailQuery(variables: ShowcaseDetailQueryVariables) {
      return { query: ShowcaseDetailDocument, variables: variables }
    }
export const ShowcasePreviewDocument = gql`
    query ShowcasePreview($slug: String!) {
  showcase(slug: $slug) {
    slug
    name
    author {
      name
    }
    status
    image {
      path
    }
    description
    expectedSalePrice {
      regular
      pioneer
      preorder
      promo
    }
  }
  showcases(filter: {slug: {neq: $slug}}) {
    edges {
      node {
        slug
        name
        status
        image {
          path
          preloadUrl
        }
        createdAt
      }
    }
  }
}
    `;

/**
 * __useShowcasePreviewQuery__
 *
 * To run a query within a React component, call `useShowcasePreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowcasePreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowcasePreviewQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useShowcasePreviewQuery(baseOptions: Apollo.QueryHookOptions<ShowcasePreviewQuery, ShowcasePreviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowcasePreviewQuery, ShowcasePreviewQueryVariables>(ShowcasePreviewDocument, options);
      }
export function useShowcasePreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowcasePreviewQuery, ShowcasePreviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowcasePreviewQuery, ShowcasePreviewQueryVariables>(ShowcasePreviewDocument, options);
        }
export type ShowcasePreviewQueryHookResult = ReturnType<typeof useShowcasePreviewQuery>;
export type ShowcasePreviewLazyQueryHookResult = ReturnType<typeof useShowcasePreviewLazyQuery>;
export type ShowcasePreviewQueryResult = Apollo.QueryResult<ShowcasePreviewQuery, ShowcasePreviewQueryVariables>;
export function refetchShowcasePreviewQuery(variables: ShowcasePreviewQueryVariables) {
      return { query: ShowcasePreviewDocument, variables: variables }
    }
export const ShowcasesDocument = gql`
    query Showcases($filter: ShowcaseFilter, $paging: CursorPaging!) {
  showcases(filter: $filter, paging: $paging) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        name
        slug
        status
        image {
          path
          preloadUrl
        }
        createdAt
      }
    }
  }
}
    `;

/**
 * __useShowcasesQuery__
 *
 * To run a query within a React component, call `useShowcasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowcasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowcasesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useShowcasesQuery(baseOptions: Apollo.QueryHookOptions<ShowcasesQuery, ShowcasesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowcasesQuery, ShowcasesQueryVariables>(ShowcasesDocument, options);
      }
export function useShowcasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowcasesQuery, ShowcasesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowcasesQuery, ShowcasesQueryVariables>(ShowcasesDocument, options);
        }
export type ShowcasesQueryHookResult = ReturnType<typeof useShowcasesQuery>;
export type ShowcasesLazyQueryHookResult = ReturnType<typeof useShowcasesLazyQuery>;
export type ShowcasesQueryResult = Apollo.QueryResult<ShowcasesQuery, ShowcasesQueryVariables>;
export function refetchShowcasesQuery(variables: ShowcasesQueryVariables) {
      return { query: ShowcasesDocument, variables: variables }
    }
export const SlugsDocument = gql`
    query Slugs {
  slugs
}
    `;

/**
 * __useSlugsQuery__
 *
 * To run a query within a React component, call `useSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSlugsQuery(baseOptions?: Apollo.QueryHookOptions<SlugsQuery, SlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SlugsQuery, SlugsQueryVariables>(SlugsDocument, options);
      }
export function useSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SlugsQuery, SlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SlugsQuery, SlugsQueryVariables>(SlugsDocument, options);
        }
export type SlugsQueryHookResult = ReturnType<typeof useSlugsQuery>;
export type SlugsLazyQueryHookResult = ReturnType<typeof useSlugsLazyQuery>;
export type SlugsQueryResult = Apollo.QueryResult<SlugsQuery, SlugsQueryVariables>;
export function refetchSlugsQuery(variables?: SlugsQueryVariables) {
      return { query: SlugsDocument, variables: variables }
    }