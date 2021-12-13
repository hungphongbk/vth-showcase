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

export interface AuthRoleTypeFilterComparison {
  eq: Maybe<AuthRoleType>;
  gt: Maybe<AuthRoleType>;
  gte: Maybe<AuthRoleType>;
  iLike: Maybe<AuthRoleType>;
  in: Maybe<Array<AuthRoleType>>;
  is: Maybe<Scalars['Boolean']>;
  isNot: Maybe<Scalars['Boolean']>;
  like: Maybe<AuthRoleType>;
  lt: Maybe<AuthRoleType>;
  lte: Maybe<AuthRoleType>;
  neq: Maybe<AuthRoleType>;
  notILike: Maybe<AuthRoleType>;
  notIn: Maybe<Array<AuthRoleType>>;
  notLike: Maybe<AuthRoleType>;
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

export interface CreateManyUsersInput {
  users: Array<CreateUser>;
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

export interface CreateOneUserInput {
  user: CreateUser;
}

export interface CreateUser {
  email: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  role: Maybe<AuthRoleType>;
  uid: Maybe<Scalars['ID']>;
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

export interface DeleteManyUsersInput {
  filter: UserDeleteFilter;
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

export interface DeleteOneUserInput {
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
  addCommentsToShowcase: Showcase;
  addHighlightFeaturesToShowcase: Showcase;
  addImageListsToShowcase: Showcase;
  addImagesToImageList: ImageList;
  createManyCommentDtos: Array<CommentDto>;
  createManyImageLists: Array<ImageList>;
  createManyInvestmentPackageDtos: Array<InvestmentPackageDto>;
  createManyMediaDtos: Array<MediaDto>;
  createManyShowcaseHighlightFeatures: Array<ShowcaseHighlightFeature>;
  createManyUsers: Array<User>;
  createOneCommentDto: CommentDto;
  createOneImageList: ImageList;
  createOneInvestmentPackageDto: InvestmentPackageDto;
  createOneMediaDto: MediaDto;
  createOneSetting: Scalars['Boolean'];
  createOneShowcase: Showcase;
  createOneShowcaseHighlightFeature: ShowcaseHighlightFeature;
  createOneUser: User;
  deleteManyCommentDtos: DeleteManyResponse;
  deleteManyImageLists: DeleteManyResponse;
  deleteManyInvestmentPackageDtos: DeleteManyResponse;
  deleteManyMediaDtos: DeleteManyResponse;
  deleteManyShowcaseHighlightFeatures: DeleteManyResponse;
  deleteManyShowcases: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneCommentDto: CommentDtoDeleteResponse;
  deleteOneImageList: ImageListDeleteResponse;
  deleteOneInvestmentPackageDto: InvestmentPackageDtoDeleteResponse;
  deleteOneMediaDto: MediaDtoDeleteResponse;
  deleteOneShowcase: Scalars['Boolean'];
  deleteOneShowcaseHighlightFeature: ShowcaseHighlightFeatureDeleteResponse;
  deleteOneUser: UserDeleteResponse;
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
  updateManyUsers: UpdateManyResponse;
  updateOneCommentDto: CommentDto;
  updateOneImageList: ImageList;
  updateOneInvestmentPackageDto: InvestmentPackageDto;
  updateOneMediaDto: MediaDto;
  updateOneSetting: Scalars['Boolean'];
  updateOneShowcase: Scalars['Boolean'];
  updateOneShowcaseHighlightFeature: ShowcaseHighlightFeature;
  updateOneUser: User;
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


export interface MutationCreateManyUsersArgs {
  input: CreateManyUsersInput;
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


export interface MutationCreateOneUserArgs {
  input: CreateOneUserInput;
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


export interface MutationDeleteManyUsersArgs {
  input: DeleteManyUsersInput;
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


export interface MutationDeleteOneUserArgs {
  input: DeleteOneUserInput;
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


export interface MutationUpdateManyUsersArgs {
  input: UpdateManyUsersInput;
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
  input: ShowcaseCreateInputDto;
  slug: Scalars['String'];
}


export interface MutationUpdateOneShowcaseHighlightFeatureArgs {
  input: UpdateOneShowcaseHighlightFeatureInput;
}


export interface MutationUpdateOneUserArgs {
  input: UpdateOneUserInput;
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
  showcaseInvestorStat: Maybe<ShowcaseInvestorStatDto>;
  showcases: ShowcaseConnection;
  slugs: Array<Scalars['String']>;
  user: Maybe<User>;
  users: UserConnection;
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


export interface QueryShowcaseInvestorStatArgs {
  slug: Scalars['String'];
}


export interface QueryShowcasesArgs {
  filter?: Maybe<ShowcaseFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<ShowcaseSort>>;
}


export interface QueryUserArgs {
  id: Scalars['ID'];
}


export interface QueryUsersArgs {
  filter?: Maybe<UserFilter>;
  paging?: Maybe<CursorPaging>;
  sorting?: Maybe<Array<UserSort>>;
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

export interface SettingDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: SettingDto;
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
  firstYearRevenue: Scalars['Float'];
  growthRate: Scalars['Float'];
  operatingCost: Scalars['String'];
  operatingCostRate: Scalars['Float'];
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

export interface UpdateManyUsersInput {
  filter: UserUpdateFilter;
  update: UpdateUser;
}

export interface UpdateMediaDto {
  filename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  mimetype: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
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

export interface UpdateOneUserInput {
  id: Scalars['ID'];
  update: UpdateUser;
}

export interface UpdateShowcaseHighlightFeature {
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
}

export interface UpdateUser {
  email: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  role: Maybe<AuthRoleType>;
  uid: Maybe<Scalars['ID']>;
}

export interface User {
  email: Scalars['String'];
  name: Scalars['String'];
  role: AuthRoleType;
  uid: Scalars['ID'];
}

export interface UserAggregateGroupBy {
  email: Maybe<Scalars['String']>;
  role: Maybe<AuthRoleType>;
  uid: Maybe<Scalars['ID']>;
}

export interface UserConnection {
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
}

export interface UserCountAggregate {
  email: Maybe<Scalars['Int']>;
  role: Maybe<Scalars['Int']>;
  uid: Maybe<Scalars['Int']>;
}

export interface UserDeleteFilter {
  and: Maybe<Array<UserDeleteFilter>>;
  email: Maybe<StringFieldComparison>;
  or: Maybe<Array<UserDeleteFilter>>;
  role: Maybe<AuthRoleTypeFilterComparison>;
  uid: Maybe<IdFilterComparison>;
}

export interface UserDeleteResponse {
  email: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  role: Maybe<AuthRoleType>;
  uid: Maybe<Scalars['ID']>;
}

export interface UserEdge {
  cursor: Scalars['ConnectionCursor'];
  node: User;
}

export interface UserFilter {
  and: Maybe<Array<UserFilter>>;
  email: Maybe<StringFieldComparison>;
  or: Maybe<Array<UserFilter>>;
  role: Maybe<AuthRoleTypeFilterComparison>;
  uid: Maybe<IdFilterComparison>;
}

export interface UserMaxAggregate {
  email: Maybe<Scalars['String']>;
  role: Maybe<AuthRoleType>;
  uid: Maybe<Scalars['ID']>;
}

export interface UserMinAggregate {
  email: Maybe<Scalars['String']>;
  role: Maybe<AuthRoleType>;
  uid: Maybe<Scalars['ID']>;
}

export interface UserSort {
  direction: SortDirection;
  field: UserSortFields;
  nulls: Maybe<SortNulls>;
}

export enum UserSortFields {
  Email = 'email',
  Role = 'role',
  Uid = 'uid'
}

export interface UserUpdateFilter {
  and: Maybe<Array<UserUpdateFilter>>;
  email: Maybe<StringFieldComparison>;
  or: Maybe<Array<UserUpdateFilter>>;
  role: Maybe<AuthRoleTypeFilterComparison>;
  uid: Maybe<IdFilterComparison>;
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


export type QueryCommentsQuery = { showcase: { comments: { nodes: Array<{ id: string, content: string, rate: Array<CommentRateEnum>, author: { name: string } | null }> } } };

export type ShowcaseDetailQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ShowcaseDetailQuery = { showcase: { slug: string, name: string, status: ShowcaseStatus, description: string, author: { name: string }, image: { path: string }, expectedSalePrice: { regular: number, pioneer: number, preorder: number, promo: number } | null }, showcaseInvestorStat: { totalRevenue: number, firstYearRevenue: number, campaignDuration: number, growthRate: number, adCostRate: number, adCost: string } | null, showcases: { edges: Array<{ node: { slug: string, name: string, status: ShowcaseStatus, createdAt: any, image: { path: string } } }> } };

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
