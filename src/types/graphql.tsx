import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ConnectionCursor: any;
  DateTime: any;
  JSON: any;
  JSONObject: any;
}

export interface AddImagesToImageListInput {
  id: Scalars['ID'];
  relationIds: Array<Scalars['ID']>;
}

export interface AddShowcasePkgsToShowcaseInput {
  id: Scalars['String'];
  relationIds: Array<Scalars['ID']>;
}

export interface AuthProviderInfoDto {
  displayName: Scalars['String'];
  email: Scalars['String'];
  providerId: Scalars['String'];
  uid: Scalars['String'];
}

export interface AuthProviderInfoInputDto {
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  providerId?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
}

export enum AuthRoleType {
  Admin = 'ADMIN',
  Investor = 'INVESTOR',
  Superadmin = 'SUPERADMIN',
  User = 'USER'
}

export interface BooleanFieldComparison {
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
}

export interface BrandCreateInputDto {
  description: Scalars['String'];
  logo?: InputMaybe<Scalars['String']>;
  metadata: Scalars['JSONObject'];
  name: Scalars['String'];
  slug: Scalars['String'];
  subtitle: Scalars['String'];
}

export interface BrandDto {
  description: Scalars['String'];
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  mediaLists: Array<MediaDto>;
  metadata: Scalars['JSONObject'];
  name: Scalars['String'];
  slug: Scalars['String'];
  subtitle: Scalars['String'];
}


export interface BrandDtoMediaListsArgs {
  filter?: InputMaybe<MediaDtoFilter>;
  sorting?: InputMaybe<Array<MediaDtoSort>>;
}

export interface BrandDtoAggregateGroupBy {
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
}

export interface BrandDtoAvgAggregate {
  id?: Maybe<Scalars['Float']>;
}

export interface BrandDtoConnection {
  edges: Array<BrandDtoEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
}

export interface BrandDtoCountAggregate {
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
}

export interface BrandDtoDeleteFilter {
  and?: InputMaybe<Array<BrandDtoDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  logo?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BrandDtoDeleteFilter>>;
  slug?: InputMaybe<StringFieldComparison>;
}

export interface BrandDtoDeleteResponse {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
}

export interface BrandDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: BrandDto;
}

export interface BrandDtoFilter {
  and?: InputMaybe<Array<BrandDtoFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  logo?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BrandDtoFilter>>;
  slug?: InputMaybe<StringFieldComparison>;
}

export interface BrandDtoMaxAggregate {
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
}

export interface BrandDtoMinAggregate {
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
}

export interface BrandDtoSort {
  direction: SortDirection;
  field: BrandDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
}

export enum BrandDtoSortFields {
  Id = 'id',
  Logo = 'logo',
  Name = 'name',
  Slug = 'slug'
}

export interface BrandDtoSumAggregate {
  id?: Maybe<Scalars['Float']>;
}

export interface BrandDtoUpdateFilter {
  and?: InputMaybe<Array<BrandDtoUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  logo?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BrandDtoUpdateFilter>>;
  slug?: InputMaybe<StringFieldComparison>;
}

export interface BrandUpdateInputDto {
  description?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSONObject']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
}

export interface CommentCreateDto {
  content: Scalars['String'];
  isTopComment?: InputMaybe<Scalars['Boolean']>;
  rate: Array<CommentRateEnum>;
}

export interface CommentDto {
  author?: Maybe<User>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isTopComment: Scalars['Boolean'];
  rate: Array<CommentRateEnum>;
  updatedAt: Scalars['DateTime'];
}

export interface CommentDtoAggregateGroupBy {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  isTopComment?: Maybe<Scalars['Boolean']>;
}

export interface CommentDtoAvgAggregate {
  id?: Maybe<Scalars['Float']>;
}

export interface CommentDtoCountAggregate {
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isTopComment?: Maybe<Scalars['Int']>;
}

export interface CommentDtoDeleteResponse {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  isTopComment?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Array<CommentRateEnum>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface CommentDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: CommentDto;
}

export interface CommentDtoFilter {
  and?: InputMaybe<Array<CommentDtoFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isTopComment?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<CommentDtoFilter>>;
}

export interface CommentDtoMaxAggregate {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
}

export interface CommentDtoMinAggregate {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
}

export interface CommentDtoSort {
  direction: SortDirection;
  field: CommentDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
}

export enum CommentDtoSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsTopComment = 'isTopComment'
}

export interface CommentDtoSumAggregate {
  id?: Maybe<Scalars['Float']>;
}

export enum CommentRateEnum {
  CoTiemNang = 'CO_TIEM_NANG',
  CungDuoc = 'CUNG_DUOC',
  DangTien = 'DANG_TIEN',
  Hay = 'HAY',
  SieuPham = 'SIEU_PHAM',
  XamXi = 'XAM_XI'
}

export interface CreateInvestmentPackageDto {
  benefitRate?: InputMaybe<Scalars['Float']>;
  count?: InputMaybe<Scalars['Float']>;
  displayName?: InputMaybe<Scalars['String']>;
  fundedRate?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
}

export interface CreateMailTemplateDto {
  _serializedNode?: InputMaybe<Scalars['String']>;
  html?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  templateName?: InputMaybe<Scalars['String']>;
}

export interface CreateManyBrandDtosInput {
  brandDtos: Array<BrandCreateInputDto>;
}

export interface CreateManyInvestmentPackageDtosInput {
  investmentPackageDtos: Array<CreateInvestmentPackageDto>;
}

export interface CreateManyMailTemplateDtosInput {
  mailTemplateDtos: Array<CreateMailTemplateDto>;
}

export interface CreateManyMediaDtosInput {
  mediaDtos: Array<MediaInput>;
}

export interface CreateManyShowcaseInvestPkgDtosInput {
  showcaseInvestPkgDtos: Array<CreateShowcaseInvestPkgDto>;
}

export interface CreateOneBrandDtoInput {
  brandDto: BrandCreateInputDto;
}

export interface CreateOneInvestmentPackageDtoInput {
  investmentPackageDto: CreateInvestmentPackageDto;
}

export interface CreateOneMailTemplateDtoInput {
  mailTemplateDto: CreateMailTemplateDto;
}

export interface CreateOneMediaDtoInput {
  mediaDto: MediaInput;
}

export interface CreateOneShowcaseInvestPkgDtoInput {
  showcaseInvestPkgDto: CreateShowcaseInvestPkgDto;
}

export interface CreateShowcaseInvestPkgDto {
  benefitRate?: InputMaybe<Scalars['Float']>;
  count?: InputMaybe<Scalars['Float']>;
  fundedRate?: InputMaybe<Scalars['Float']>;
}

export interface CursorPaging {
  after?: InputMaybe<Scalars['ConnectionCursor']>;
  before?: InputMaybe<Scalars['ConnectionCursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
}

export interface DateFieldComparison {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
}

export interface DateFieldComparisonBetween {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
}

export interface DeleteManyBrandDtosInput {
  filter: BrandDtoDeleteFilter;
}

export interface DeleteManyInvestmentPackageDtosInput {
  filter: InvestmentPackageDtoDeleteFilter;
}

export interface DeleteManyMailTemplateDtosInput {
  filter: MailTemplateDtoDeleteFilter;
}

export interface DeleteManyMediaDtosInput {
  filter: MediaDtoDeleteFilter;
}

export interface DeleteManyPreorderDtosInput {
  filter: PreorderDtoDeleteFilter;
}

export interface DeleteManyResponse {
  deletedCount: Scalars['Int'];
}

export interface DeleteManyShowcaseInvestPkgDtosInput {
  filter: ShowcaseInvestPkgDtoDeleteFilter;
}

export interface DeleteManyShowcasesInput {
  filter: ShowcaseDeleteFilter;
}

export interface DeleteOneBrandDtoInput {
  id: Scalars['ID'];
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

export interface DeleteOneInvestorRegistrationDtoInput {
  id: Scalars['ID'];
}

export interface DeleteOneMailTemplateDtoInput {
  id: Scalars['String'];
}

export interface DeleteOneMediaDtoInput {
  id: Scalars['ID'];
}

export interface DeleteOnePrjUpdateDtoInput {
  id: Scalars['ID'];
}

export interface DeleteOneShowcaseHighlightFeatureInput {
  id: Scalars['ID'];
}

export interface DeleteOneShowcaseInvestPkgDtoInput {
  id: Scalars['ID'];
}

export interface FcmNotificationPayloadDto {
  body?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface FcmPayloadDto {
  notification?: InputMaybe<FcmNotificationPayloadDto>;
}

export interface IdFilterComparison {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
}

export interface IdInterface {
  id: Scalars['ID'];
}

export interface ImageList extends IdInterface {
  id: Scalars['ID'];
  images: Array<MediaDto>;
}


export interface ImageListImagesArgs {
  filter?: InputMaybe<MediaDtoFilter>;
  sorting?: InputMaybe<Array<MediaDtoSort>>;
}

export interface ImageListAggregateGroupBy {
  id?: Maybe<Scalars['ID']>;
}

export interface ImageListCountAggregate {
  id?: Maybe<Scalars['Int']>;
}

export interface ImageListCreateDto {
  images?: InputMaybe<Array<MediaInput>>;
}

export interface ImageListDeleteResponse {
  id?: Maybe<Scalars['ID']>;
}

export interface ImageListEdge {
  cursor: Scalars['ConnectionCursor'];
  node: ImageList;
}

export interface ImageListMaxAggregate {
  id?: Maybe<Scalars['ID']>;
}

export interface ImageListMinAggregate {
  id?: Maybe<Scalars['ID']>;
}

export interface InvestmentPackageDto {
  benefitRate: Scalars['Float'];
  count: Scalars['Float'];
  displayName: Scalars['String'];
  fundedRate: Scalars['Float'];
  id: Scalars['ID'];
}

export interface InvestmentPackageDtoAggregateGroupBy {
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
}

export interface InvestmentPackageDtoAvgAggregate {
  id?: Maybe<Scalars['Float']>;
}

export interface InvestmentPackageDtoConnection {
  edges: Array<InvestmentPackageDtoEdge>;
  pageInfo: PageInfo;
}

export interface InvestmentPackageDtoCountAggregate {
  displayName?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
}

export interface InvestmentPackageDtoDeleteFilter {
  and?: InputMaybe<Array<InvestmentPackageDtoDeleteFilter>>;
  displayName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<InvestmentPackageDtoDeleteFilter>>;
}

export interface InvestmentPackageDtoDeleteResponse {
  benefitRate?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  displayName?: Maybe<Scalars['String']>;
  fundedRate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
}

export interface InvestmentPackageDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: InvestmentPackageDto;
}

export interface InvestmentPackageDtoFilter {
  and?: InputMaybe<Array<InvestmentPackageDtoFilter>>;
  displayName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<InvestmentPackageDtoFilter>>;
}

export interface InvestmentPackageDtoMaxAggregate {
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
}

export interface InvestmentPackageDtoMinAggregate {
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
}

export interface InvestmentPackageDtoSort {
  direction: SortDirection;
  field: InvestmentPackageDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
}

export enum InvestmentPackageDtoSortFields {
  DisplayName = 'displayName',
  Id = 'id'
}

export interface InvestmentPackageDtoSumAggregate {
  id?: Maybe<Scalars['Float']>;
}

export interface InvestmentPackageDtoUpdateFilter {
  and?: InputMaybe<Array<InvestmentPackageDtoUpdateFilter>>;
  displayName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<InvestmentPackageDtoUpdateFilter>>;
}

export interface InvestorRegistrationCreateDto {
  email: Scalars['String'];
  fund: Scalars['String'];
  job: Scalars['String'];
  method: Scalars['String'];
  phone: Scalars['String'];
  purpose: Scalars['String'];
}

export interface InvestorRegistrationDto {
  email: Scalars['String'];
  fund: Scalars['String'];
  id: Scalars['ID'];
  job: Scalars['String'];
  method: Scalars['String'];
  phone: Scalars['String'];
  promotedUid: Scalars['String'];
  purpose: Scalars['String'];
}

export interface InvestorRegistrationDtoAggregateGroupBy {
  id?: Maybe<Scalars['ID']>;
}

export interface InvestorRegistrationDtoConnection {
  edges: Array<InvestorRegistrationDtoEdge>;
  pageInfo: PageInfo;
}

export interface InvestorRegistrationDtoCountAggregate {
  id?: Maybe<Scalars['Int']>;
}

export interface InvestorRegistrationDtoDeleteResponse {
  email?: Maybe<Scalars['String']>;
  fund?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  job?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  promotedUid?: Maybe<Scalars['String']>;
  purpose?: Maybe<Scalars['String']>;
}

export interface InvestorRegistrationDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: InvestorRegistrationDto;
}

export interface InvestorRegistrationDtoFilter {
  and?: InputMaybe<Array<InvestorRegistrationDtoFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<InvestorRegistrationDtoFilter>>;
}

export interface InvestorRegistrationDtoMaxAggregate {
  id?: Maybe<Scalars['ID']>;
}

export interface InvestorRegistrationDtoMinAggregate {
  id?: Maybe<Scalars['ID']>;
}

export interface InvestorRegistrationDtoSort {
  direction: SortDirection;
  field: InvestorRegistrationDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
}

export enum InvestorRegistrationDtoSortFields {
  Id = 'id'
}

export interface MailCreateDto {
  id?: InputMaybe<Scalars['ID']>;
  template?: InputMaybe<MailTemplateSpecInputDto>;
  to?: InputMaybe<Array<Scalars['String']>>;
}

export interface MailDto {
  id: Scalars['ID'];
  template: MailTemplateSpecDto;
  to: Array<Scalars['String']>;
}

export interface MailTemplateDto {
  _serializedNode?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  subject: Scalars['String'];
  templateName: Scalars['String'];
}

export interface MailTemplateDtoAggregateGroupBy {
  id?: Maybe<Scalars['String']>;
  templateName?: Maybe<Scalars['String']>;
}

export interface MailTemplateDtoConnection {
  edges: Array<MailTemplateDtoEdge>;
  pageInfo: PageInfo;
}

export interface MailTemplateDtoCountAggregate {
  id?: Maybe<Scalars['Int']>;
  templateName?: Maybe<Scalars['Int']>;
}

export interface MailTemplateDtoDeleteFilter {
  and?: InputMaybe<Array<MailTemplateDtoDeleteFilter>>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MailTemplateDtoDeleteFilter>>;
  templateName?: InputMaybe<StringFieldComparison>;
}

export interface MailTemplateDtoDeleteResponse {
  _serializedNode?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  templateName?: Maybe<Scalars['String']>;
}

export interface MailTemplateDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: MailTemplateDto;
}

export interface MailTemplateDtoFilter {
  and?: InputMaybe<Array<MailTemplateDtoFilter>>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MailTemplateDtoFilter>>;
  templateName?: InputMaybe<StringFieldComparison>;
}

export interface MailTemplateDtoMaxAggregate {
  id?: Maybe<Scalars['String']>;
  templateName?: Maybe<Scalars['String']>;
}

export interface MailTemplateDtoMinAggregate {
  id?: Maybe<Scalars['String']>;
  templateName?: Maybe<Scalars['String']>;
}

export interface MailTemplateDtoSort {
  direction: SortDirection;
  field: MailTemplateDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
}

export enum MailTemplateDtoSortFields {
  Id = 'id',
  TemplateName = 'templateName'
}

export interface MailTemplateDtoUpdateFilter {
  and?: InputMaybe<Array<MailTemplateDtoUpdateFilter>>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MailTemplateDtoUpdateFilter>>;
  templateName?: InputMaybe<StringFieldComparison>;
}

export interface MailTemplateSpecDto {
  data: Scalars['JSON'];
  name: Scalars['String'];
}

export interface MailTemplateSpecInputDto {
  data: Scalars['JSON'];
  name: Scalars['String'];
}

export interface MediaDto extends IdInterface {
  filename: Scalars['String'];
  formatType: MediaFormatType;
  height: Scalars['Float'];
  id: Scalars['ID'];
  mimetype: Scalars['String'];
  path: Scalars['String'];
  preloadUrl: Scalars['String'];
  type: MediaType;
  width: Scalars['Float'];
}

export interface MediaDtoAggregateGroupBy {
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
}

export interface MediaDtoConnection {
  edges: Array<MediaDtoEdge>;
  pageInfo: PageInfo;
}

export interface MediaDtoCountAggregate {
  filename?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
}

export interface MediaDtoDeleteFilter {
  and?: InputMaybe<Array<MediaDtoDeleteFilter>>;
  filename?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MediaDtoDeleteFilter>>;
}

export interface MediaDtoDeleteResponse {
  filename?: Maybe<Scalars['String']>;
  formatType?: Maybe<MediaFormatType>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  mimetype?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  preloadUrl?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  width?: Maybe<Scalars['Float']>;
}

export interface MediaDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: MediaDto;
}

export interface MediaDtoFilter {
  and?: InputMaybe<Array<MediaDtoFilter>>;
  filename?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MediaDtoFilter>>;
}

export interface MediaDtoMaxAggregate {
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
}

export interface MediaDtoMinAggregate {
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
}

export interface MediaDtoSort {
  direction: SortDirection;
  field: MediaDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
}

export enum MediaDtoSortFields {
  Filename = 'filename',
  Id = 'id'
}

export interface MediaDtoUpdateFilter {
  and?: InputMaybe<Array<MediaDtoUpdateFilter>>;
  filename?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MediaDtoUpdateFilter>>;
}

export enum MediaFormatType {
  Image = 'IMAGE',
  Youtube = 'YOUTUBE'
}

export interface MediaInput {
  filename: Scalars['String'];
  formatType?: InputMaybe<MediaFormatType>;
  height?: InputMaybe<Scalars['Float']>;
  mimetype: Scalars['String'];
  path: Scalars['String'];
  preloadUrl?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<MediaType>;
  width?: InputMaybe<Scalars['Float']>;
}

export enum MediaType {
  Brand = 'BRAND',
  Hf = 'HF',
  Imglist = 'IMGLIST',
  Showcase = 'SHOWCASE'
}

export interface Mutation {
  addImagesToImageList: ImageList;
  addShowcasePkgsToShowcase: Showcase;
  createManyBrandDtos: Array<BrandDto>;
  createManyInvestmentPackageDtos: Array<InvestmentPackageDto>;
  createManyMailTemplateDtos: Array<MailTemplateDto>;
  createManyMediaDtos: Array<MediaDto>;
  createManyShowcaseInvestPkgDtos: Array<ShowcaseInvestPkgDto>;
  createOneBrandDto: BrandDto;
  createOneImageList: ImageList;
  createOneInvestmentPackageDto: InvestmentPackageDto;
  createOneInvestorRegistrationDto: InvestorRegistrationDto;
  createOneMailTemplateDto: MailTemplateDto;
  createOneMediaDto: MediaDto;
  createOnePreorder: PreorderResponseDto;
  createOneSetting: Scalars['Boolean'];
  createOneShowcase: Showcase;
  createOneShowcaseHighlightFeature: ShowcaseHighlightFeature;
  createOneShowcaseInvestPkgDto: ShowcaseInvestPkgDto;
  createOneUserDto: User;
  deleteManyBrandDtos: DeleteManyResponse;
  deleteManyInvestmentPackageDtos: DeleteManyResponse;
  deleteManyMailTemplateDtos: DeleteManyResponse;
  deleteManyMediaDtos: DeleteManyResponse;
  deleteManyPreorderDtos: DeleteManyResponse;
  deleteManyShowcaseInvestPkgDtos: DeleteManyResponse;
  deleteManyShowcases: DeleteManyResponse;
  deleteOneBrandDto: BrandDtoDeleteResponse;
  deleteOneCommentDto: CommentDtoDeleteResponse;
  deleteOneImageList: ImageListDeleteResponse;
  deleteOneInvestmentPackageDto: InvestmentPackageDtoDeleteResponse;
  deleteOneInvestorRegistrationDto: InvestorRegistrationDtoDeleteResponse;
  deleteOneMailTemplateDto: MailTemplateDtoDeleteResponse;
  deleteOneMediaDto: MediaDtoDeleteResponse;
  deleteOneMediaFromImageList: ImageList;
  deleteOnePrjUpdateDto: PrjUpdateDtoDeleteResponse;
  deleteOneShowcase: Scalars['Boolean'];
  deleteOneShowcaseHighlightFeature: ShowcaseHighlightFeatureDeleteResponse;
  deleteOneShowcaseInvestPkgDto: ShowcaseInvestPkgDtoDeleteResponse;
  insertOneMediaToImageList: ImageList;
  postAnonymousComment: CommentDto;
  postAuthorizedComment: CommentDto;
  postProjectUpdate: PrjUpdateDto;
  removeAuthorFromCommentDto: CommentDto;
  removeAuthorFromShowcase: Showcase;
  removeBrandFromShowcase: Showcase;
  removeImageFromShowcase: Showcase;
  removeImageFromShowcaseHighlightFeature: ShowcaseHighlightFeature;
  removeImagesFromImageList: ImageList;
  removeShowcasePkgsFromShowcase: Showcase;
  sendEmail: MailDto;
  sendNotification: Scalars['Boolean'];
  setAuthorOnCommentDto: CommentDto;
  setAuthorOnShowcase: Showcase;
  setBrandOnShowcase: Showcase;
  setImageOnShowcase: Showcase;
  setImageOnShowcaseHighlightFeature: ShowcaseHighlightFeature;
  setImagesOnImageList: ImageList;
  setShowcasePkgsOnShowcase: Showcase;
  subscribeToFcmTopic: Scalars['Boolean'];
  updateManyBrandDtos: UpdateManyResponse;
  updateManyInvestmentPackageDtos: UpdateManyResponse;
  updateManyMailTemplateDtos: UpdateManyResponse;
  updateManyMediaDtos: UpdateManyResponse;
  updateManyShowcaseInvestPkgDtos: UpdateManyResponse;
  updateOneBrandDto: BrandDto;
  updateOneCommentDto: CommentDto;
  updateOneImageList: ImageList;
  updateOneInvestmentPackageDto: InvestmentPackageDto;
  updateOneInvestorRegistrationDto: InvestorRegistrationDto;
  updateOneMailTemplateDto: MailTemplateDto;
  updateOneMediaDto: MediaDto;
  updateOnePrjUpdateDto: PrjUpdateDto;
  updateOneSetting: Scalars['Boolean'];
  updateOneShowcase: Scalars['Boolean'];
  updateOneShowcaseHighlightFeature: ShowcaseHighlightFeature;
  updateOneShowcaseInvestPkgDto: ShowcaseInvestPkgDto;
  updateOneUser: Scalars['Boolean'];
}


export interface MutationAddImagesToImageListArgs {
  input: AddImagesToImageListInput;
}


export interface MutationAddShowcasePkgsToShowcaseArgs {
  input: AddShowcasePkgsToShowcaseInput;
}


export interface MutationCreateManyBrandDtosArgs {
  input: CreateManyBrandDtosInput;
}


export interface MutationCreateManyInvestmentPackageDtosArgs {
  input: CreateManyInvestmentPackageDtosInput;
}


export interface MutationCreateManyMailTemplateDtosArgs {
  input: CreateManyMailTemplateDtosInput;
}


export interface MutationCreateManyMediaDtosArgs {
  input: CreateManyMediaDtosInput;
}


export interface MutationCreateManyShowcaseInvestPkgDtosArgs {
  input: CreateManyShowcaseInvestPkgDtosInput;
}


export interface MutationCreateOneBrandDtoArgs {
  input: CreateOneBrandDtoInput;
}


export interface MutationCreateOneImageListArgs {
  slug: Scalars['String'];
}


export interface MutationCreateOneInvestmentPackageDtoArgs {
  input: CreateOneInvestmentPackageDtoInput;
}


export interface MutationCreateOneInvestorRegistrationDtoArgs {
  input: InvestorRegistrationCreateDto;
}


export interface MutationCreateOneMailTemplateDtoArgs {
  input: CreateOneMailTemplateDtoInput;
}


export interface MutationCreateOneMediaDtoArgs {
  input: CreateOneMediaDtoInput;
}


export interface MutationCreateOnePreorderArgs {
  input?: InputMaybe<PreorderRequestInputDto>;
  slug: Scalars['String'];
}


export interface MutationCreateOneSettingArgs {
  input: SettingCreateDto;
}


export interface MutationCreateOneShowcaseArgs {
  input: ShowcaseCreateInputDto;
}


export interface MutationCreateOneShowcaseHighlightFeatureArgs {
  input: ShowcaseHfCreateInputDto;
  slug: Scalars['String'];
}


export interface MutationCreateOneShowcaseInvestPkgDtoArgs {
  input: CreateOneShowcaseInvestPkgDtoInput;
}


export interface MutationCreateOneUserDtoArgs {
  input: UserCreateInputDto;
}


export interface MutationDeleteManyBrandDtosArgs {
  input: DeleteManyBrandDtosInput;
}


export interface MutationDeleteManyInvestmentPackageDtosArgs {
  input: DeleteManyInvestmentPackageDtosInput;
}


export interface MutationDeleteManyMailTemplateDtosArgs {
  input: DeleteManyMailTemplateDtosInput;
}


export interface MutationDeleteManyMediaDtosArgs {
  input: DeleteManyMediaDtosInput;
}


export interface MutationDeleteManyPreorderDtosArgs {
  input: DeleteManyPreorderDtosInput;
}


export interface MutationDeleteManyShowcaseInvestPkgDtosArgs {
  input: DeleteManyShowcaseInvestPkgDtosInput;
}


export interface MutationDeleteManyShowcasesArgs {
  input: DeleteManyShowcasesInput;
}


export interface MutationDeleteOneBrandDtoArgs {
  input: DeleteOneBrandDtoInput;
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


export interface MutationDeleteOneInvestorRegistrationDtoArgs {
  input: DeleteOneInvestorRegistrationDtoInput;
}


export interface MutationDeleteOneMailTemplateDtoArgs {
  input: DeleteOneMailTemplateDtoInput;
}


export interface MutationDeleteOneMediaDtoArgs {
  input: DeleteOneMediaDtoInput;
}


export interface MutationDeleteOneMediaFromImageListArgs {
  id: Scalars['ID'];
  mediaId: Scalars['ID'];
}


export interface MutationDeleteOnePrjUpdateDtoArgs {
  input: DeleteOnePrjUpdateDtoInput;
}


export interface MutationDeleteOneShowcaseArgs {
  slug: Scalars['String'];
}


export interface MutationDeleteOneShowcaseHighlightFeatureArgs {
  input: DeleteOneShowcaseHighlightFeatureInput;
}


export interface MutationDeleteOneShowcaseInvestPkgDtoArgs {
  input: DeleteOneShowcaseInvestPkgDtoInput;
}


export interface MutationInsertOneMediaToImageListArgs {
  id: Scalars['ID'];
  input: MediaInput;
}


export interface MutationPostAnonymousCommentArgs {
  input: CommentCreateDto;
  slug: Scalars['String'];
}


export interface MutationPostAuthorizedCommentArgs {
  input: CommentCreateDto;
  slug: Scalars['String'];
}


export interface MutationPostProjectUpdateArgs {
  input: PrjUpdateCreateDto;
  slug: Scalars['String'];
}


export interface MutationRemoveAuthorFromCommentDtoArgs {
  input: RemoveAuthorFromCommentDtoInput;
}


export interface MutationRemoveAuthorFromShowcaseArgs {
  input: RemoveAuthorFromShowcaseInput;
}


export interface MutationRemoveBrandFromShowcaseArgs {
  input: RemoveBrandFromShowcaseInput;
}


export interface MutationRemoveImageFromShowcaseArgs {
  input: RemoveImageFromShowcaseInput;
}


export interface MutationRemoveImageFromShowcaseHighlightFeatureArgs {
  input: RemoveImageFromShowcaseHighlightFeatureInput;
}


export interface MutationRemoveImagesFromImageListArgs {
  input: RemoveImagesFromImageListInput;
}


export interface MutationRemoveShowcasePkgsFromShowcaseArgs {
  input: RemoveShowcasePkgsFromShowcaseInput;
}


export interface MutationSendEmailArgs {
  input: MailCreateDto;
}


export interface MutationSendNotificationArgs {
  payload: FcmPayloadDto;
  topic: Scalars['String'];
}


export interface MutationSetAuthorOnCommentDtoArgs {
  input: SetAuthorOnCommentDtoInput;
}


export interface MutationSetAuthorOnShowcaseArgs {
  input: SetAuthorOnShowcaseInput;
}


export interface MutationSetBrandOnShowcaseArgs {
  input: SetBrandOnShowcaseInput;
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


export interface MutationSetShowcasePkgsOnShowcaseArgs {
  input: SetShowcasePkgsOnShowcaseInput;
}


export interface MutationSubscribeToFcmTopicArgs {
  token: Scalars['String'];
  topic: Array<Scalars['String']>;
}


export interface MutationUpdateManyBrandDtosArgs {
  input: UpdateManyBrandDtosInput;
}


export interface MutationUpdateManyInvestmentPackageDtosArgs {
  input: UpdateManyInvestmentPackageDtosInput;
}


export interface MutationUpdateManyMailTemplateDtosArgs {
  input: UpdateManyMailTemplateDtosInput;
}


export interface MutationUpdateManyMediaDtosArgs {
  input: UpdateManyMediaDtosInput;
}


export interface MutationUpdateManyShowcaseInvestPkgDtosArgs {
  input: UpdateManyShowcaseInvestPkgDtosInput;
}


export interface MutationUpdateOneBrandDtoArgs {
  input: UpdateOneBrandDtoInput;
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


export interface MutationUpdateOneInvestorRegistrationDtoArgs {
  input: UpdateOneInvestorRegistrationDtoInput;
}


export interface MutationUpdateOneMailTemplateDtoArgs {
  input: UpdateOneMailTemplateDtoInput;
}


export interface MutationUpdateOneMediaDtoArgs {
  input: UpdateOneMediaDtoInput;
}


export interface MutationUpdateOnePrjUpdateDtoArgs {
  input: UpdateOnePrjUpdateDtoInput;
}


export interface MutationUpdateOneSettingArgs {
  input: SettingCreateDto;
}


export interface MutationUpdateOneShowcaseArgs {
  input: ShowcaseUpdateInputDto;
  slug: Scalars['String'];
}


export interface MutationUpdateOneShowcaseHighlightFeatureArgs {
  id: Scalars['ID'];
  input: ShowcaseHfUpdateInputDto;
}


export interface MutationUpdateOneShowcaseInvestPkgDtoArgs {
  input: UpdateOneShowcaseInvestPkgDtoInput;
}


export interface MutationUpdateOneUserArgs {
  input: UserUpdateInputDto;
  uid: Scalars['String'];
}

export interface NumberFieldComparison {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
}

export interface NumberFieldComparisonBetween {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
}

export interface PageInfo {
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
}

export interface PreorderDto {
  author?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  showcase: Showcase;
}

export interface PreorderDtoAggregateGroupBy {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
}

export interface PreorderDtoAvgAggregate {
  id?: Maybe<Scalars['Float']>;
}

export interface PreorderDtoConnection {
  edges: Array<PreorderDtoEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
}

export interface PreorderDtoCountAggregate {
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
}

export interface PreorderDtoDeleteFilter {
  and?: InputMaybe<Array<PreorderDtoDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PreorderDtoDeleteFilter>>;
}

export interface PreorderDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: PreorderDto;
}

export interface PreorderDtoFilter {
  and?: InputMaybe<Array<PreorderDtoFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PreorderDtoFilter>>;
}

export interface PreorderDtoMaxAggregate {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
}

export interface PreorderDtoMinAggregate {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
}

export interface PreorderDtoSort {
  direction: SortDirection;
  field: PreorderDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
}

export enum PreorderDtoSortFields {
  CreatedAt = 'createdAt',
  Id = 'id'
}

export interface PreorderDtoSumAggregate {
  id?: Maybe<Scalars['Float']>;
}

export interface PreorderRequestInputDto {
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
}

export interface PreorderResponseDto {
  createdAt: Scalars['DateTime'];
  customToken?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
}

export interface PrjUpdateCreateDto {
  content: Scalars['String'];
}

export interface PrjUpdateDto {
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
}

export interface PrjUpdateDtoAggregateGroupBy {
  id?: Maybe<Scalars['ID']>;
}

export interface PrjUpdateDtoAvgAggregate {
  id?: Maybe<Scalars['Float']>;
}

export interface PrjUpdateDtoCountAggregate {
  id?: Maybe<Scalars['Int']>;
}

export interface PrjUpdateDtoDeleteResponse {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
}

export interface PrjUpdateDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: PrjUpdateDto;
}

export interface PrjUpdateDtoFilter {
  and?: InputMaybe<Array<PrjUpdateDtoFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PrjUpdateDtoFilter>>;
}

export interface PrjUpdateDtoMaxAggregate {
  id?: Maybe<Scalars['ID']>;
}

export interface PrjUpdateDtoMinAggregate {
  id?: Maybe<Scalars['ID']>;
}

export interface PrjUpdateDtoSort {
  direction: SortDirection;
  field: PrjUpdateDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
}

export enum PrjUpdateDtoSortFields {
  Id = 'id'
}

export interface PrjUpdateDtoSumAggregate {
  id?: Maybe<Scalars['Float']>;
}

export enum PublishStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export interface PublishStatusFilterComparison {
  eq?: InputMaybe<PublishStatus>;
  gt?: InputMaybe<PublishStatus>;
  gte?: InputMaybe<PublishStatus>;
  iLike?: InputMaybe<PublishStatus>;
  in?: InputMaybe<Array<PublishStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<PublishStatus>;
  lt?: InputMaybe<PublishStatus>;
  lte?: InputMaybe<PublishStatus>;
  neq?: InputMaybe<PublishStatus>;
  notILike?: InputMaybe<PublishStatus>;
  notIn?: InputMaybe<Array<PublishStatus>>;
  notLike?: InputMaybe<PublishStatus>;
}

export interface Query {
  brandDto?: Maybe<BrandDto>;
  brandDtos: BrandDtoConnection;
  calculateInventoryStat: ShowcaseInvestorStatDto;
  commentDto?: Maybe<CommentDto>;
  currentUser: User;
  getAllUsers: Array<User>;
  getOneUser: User;
  investmentPackageDto?: Maybe<InvestmentPackageDto>;
  investmentPackageDtos: InvestmentPackageDtoConnection;
  investorRegistrationDto?: Maybe<InvestorRegistrationDto>;
  investorRegistrationDtos: InvestorRegistrationDtoConnection;
  mailTemplateDto?: Maybe<MailTemplateDto>;
  mailTemplateDtos: MailTemplateDtoConnection;
  mediaDto?: Maybe<MediaDto>;
  mediaDtos: MediaDtoConnection;
  preorderDto?: Maybe<PreorderDto>;
  preorderDtos: PreorderDtoConnection;
  preorders: PreorderDtoConnection;
  prjUpdateDto?: Maybe<PrjUpdateDto>;
  setting?: Maybe<SettingDto>;
  settings: Array<SettingDto>;
  showcase: Showcase;
  showcaseHighlightFeature?: Maybe<ShowcaseHighlightFeature>;
  showcaseInvestPkgDto?: Maybe<ShowcaseInvestPkgDto>;
  showcaseInvestPkgDtos: ShowcaseInvestPkgDtoConnection;
  showcases: ShowcaseConnection;
  slugs: Array<Scalars['String']>;
}


export interface QueryBrandDtoArgs {
  id: Scalars['ID'];
}


export interface QueryBrandDtosArgs {
  filter?: InputMaybe<BrandDtoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<BrandDtoSort>>;
}


export interface QueryCalculateInventoryStatArgs {
  showcase: ShowcaseForCalculateDto;
}


export interface QueryCommentDtoArgs {
  id: Scalars['ID'];
}


export interface QueryGetAllUsersArgs {
  isAdmin?: InputMaybe<Scalars['Boolean']>;
}


export interface QueryGetOneUserArgs {
  uid: Scalars['String'];
}


export interface QueryInvestmentPackageDtoArgs {
  id: Scalars['ID'];
}


export interface QueryInvestmentPackageDtosArgs {
  filter?: InputMaybe<InvestmentPackageDtoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<InvestmentPackageDtoSort>>;
}


export interface QueryInvestorRegistrationDtoArgs {
  id: Scalars['ID'];
}


export interface QueryInvestorRegistrationDtosArgs {
  filter?: InputMaybe<InvestorRegistrationDtoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<InvestorRegistrationDtoSort>>;
}


export interface QueryMailTemplateDtoArgs {
  id: Scalars['String'];
}


export interface QueryMailTemplateDtosArgs {
  filter?: InputMaybe<MailTemplateDtoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<MailTemplateDtoSort>>;
}


export interface QueryMediaDtoArgs {
  id: Scalars['ID'];
}


export interface QueryMediaDtosArgs {
  filter?: InputMaybe<MediaDtoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<MediaDtoSort>>;
}


export interface QueryPreorderDtoArgs {
  id: Scalars['ID'];
}


export interface QueryPreorderDtosArgs {
  filter?: InputMaybe<PreorderDtoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PreorderDtoSort>>;
}


export interface QueryPreordersArgs {
  filter?: InputMaybe<PreorderDtoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PreorderDtoSort>>;
}


export interface QueryPrjUpdateDtoArgs {
  id: Scalars['ID'];
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


export interface QueryShowcaseInvestPkgDtoArgs {
  id: Scalars['ID'];
}


export interface QueryShowcaseInvestPkgDtosArgs {
  filter?: InputMaybe<ShowcaseInvestPkgDtoFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShowcaseInvestPkgDtoSort>>;
}


export interface QueryShowcasesArgs {
  filter?: InputMaybe<ShowcaseFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShowcaseSort>>;
}

export interface RemoveAuthorFromCommentDtoInput {
  id: Scalars['ID'];
  relationId: Scalars['ID'];
}

export interface RemoveAuthorFromShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
}

export interface RemoveBrandFromShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
}

export interface RemoveImageFromShowcaseHighlightFeatureInput {
  id: Scalars['ID'];
  relationId: Scalars['ID'];
}

export interface RemoveImageFromShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
}

export interface RemoveImagesFromImageListInput {
  id: Scalars['ID'];
  relationIds: Array<Scalars['ID']>;
}

export interface RemoveShowcasePkgsFromShowcaseInput {
  id: Scalars['String'];
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

export interface SetBrandOnShowcaseInput {
  id: Scalars['String'];
  relationId: Scalars['ID'];
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

export interface SetShowcasePkgsOnShowcaseInput {
  id: Scalars['String'];
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
  brand: BrandDto;
  commentCount?: Maybe<Scalars['Float']>;
  comments: Array<CommentDto>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  expectedQuantity?: Maybe<ShowcasePrice>;
  expectedSaleAt?: Maybe<Scalars['DateTime']>;
  expectedSaleEndAt?: Maybe<Scalars['DateTime']>;
  expectedSalePrice?: Maybe<ShowcasePrice>;
  highlightFeatures: Array<ShowcaseHighlightFeature>;
  id: Scalars['ID'];
  image: MediaDto;
  imageLists: Array<ImageList>;
  inventory?: Maybe<ShowcaseInventoryDto>;
  investorStat?: Maybe<ShowcaseInvestorStatDto>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isPreordered?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  preorderCount?: Maybe<Scalars['Float']>;
  preorders: Array<PreorderDto>;
  publishStatus: PublishStatus;
  showcasePkgs: Array<ShowcaseInvestPkgDto>;
  slug: Scalars['String'];
  status: ShowcaseStatus;
  updatedAt: Scalars['DateTime'];
  updates: Array<PrjUpdateDto>;
  viewCount: Scalars['Float'];
}


export interface ShowcaseCommentsArgs {
  filter?: InputMaybe<CommentDtoFilter>;
  sorting?: InputMaybe<Array<CommentDtoSort>>;
}


export interface ShowcaseHighlightFeaturesArgs {
  filter?: InputMaybe<ShowcaseHighlightFeatureFilter>;
  sorting?: InputMaybe<Array<ShowcaseHighlightFeatureSort>>;
}


export interface ShowcasePreordersArgs {
  filter?: InputMaybe<PreorderDtoFilter>;
  sorting?: InputMaybe<Array<PreorderDtoSort>>;
}


export interface ShowcaseShowcasePkgsArgs {
  filter?: InputMaybe<ShowcaseInvestPkgDtoFilter>;
  sorting?: InputMaybe<Array<ShowcaseInvestPkgDtoSort>>;
}


export interface ShowcaseUpdatesArgs {
  filter?: InputMaybe<PrjUpdateDtoFilter>;
  sorting?: InputMaybe<Array<PrjUpdateDtoSort>>;
}

export interface ShowcaseAggregateGroupBy {
  commentCount?: Maybe<Scalars['Float']>;
  expectedSaleAt?: Maybe<Scalars['DateTime']>;
  expectedSaleEndAt?: Maybe<Scalars['DateTime']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  preorderCount?: Maybe<Scalars['Float']>;
  publishStatus?: Maybe<PublishStatus>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<ShowcaseStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Float']>;
}

export interface ShowcaseAvgAggregate {
  commentCount?: Maybe<Scalars['Float']>;
  preorderCount?: Maybe<Scalars['Float']>;
  viewCount?: Maybe<Scalars['Float']>;
}

export interface ShowcaseConnection {
  edges: Array<ShowcaseEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
}

export interface ShowcaseCountAggregate {
  commentCount?: Maybe<Scalars['Int']>;
  expectedSaleAt?: Maybe<Scalars['Int']>;
  expectedSaleEndAt?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  preorderCount?: Maybe<Scalars['Int']>;
  publishStatus?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  viewCount?: Maybe<Scalars['Int']>;
}

export interface ShowcaseCreateInputDto {
  description: Scalars['String'];
  expectedQuantity?: InputMaybe<ShowcasePriceInput>;
  expectedSaleAt?: InputMaybe<Scalars['DateTime']>;
  expectedSaleEndAt?: InputMaybe<Scalars['DateTime']>;
  expectedSalePrice?: InputMaybe<ShowcasePriceInput>;
  highlightFeatures?: InputMaybe<Array<ShowcaseHfCreateInputDto>>;
  id?: InputMaybe<Scalars['String']>;
  image: MediaInput;
  imageLists?: InputMaybe<Array<ImageListCreateDto>>;
  inventory?: InputMaybe<ShowcaseInventoryDtoInput>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  publishStatus?: InputMaybe<PublishStatus>;
  status: ShowcaseStatus;
  updates?: InputMaybe<Array<PrjUpdateCreateDto>>;
}

export interface ShowcaseDeleteFilter {
  and?: InputMaybe<Array<ShowcaseDeleteFilter>>;
  commentCount?: InputMaybe<NumberFieldComparison>;
  expectedSaleAt?: InputMaybe<DateFieldComparison>;
  expectedSaleEndAt?: InputMaybe<DateFieldComparison>;
  isFeatured?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShowcaseDeleteFilter>>;
  preorderCount?: InputMaybe<NumberFieldComparison>;
  publishStatus?: InputMaybe<PublishStatusFilterComparison>;
  slug?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<ShowcaseStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  viewCount?: InputMaybe<NumberFieldComparison>;
}

export interface ShowcaseEdge {
  cursor: Scalars['ConnectionCursor'];
  node: Showcase;
}

export interface ShowcaseFilter {
  and?: InputMaybe<Array<ShowcaseFilter>>;
  commentCount?: InputMaybe<NumberFieldComparison>;
  expectedSaleAt?: InputMaybe<DateFieldComparison>;
  expectedSaleEndAt?: InputMaybe<DateFieldComparison>;
  isFeatured?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShowcaseFilter>>;
  preorderCount?: InputMaybe<NumberFieldComparison>;
  publishStatus?: InputMaybe<PublishStatusFilterComparison>;
  slug?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<ShowcaseStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  viewCount?: InputMaybe<NumberFieldComparison>;
}

export interface ShowcaseForCalculateDto {
  expectedQuantity?: InputMaybe<ShowcasePriceInput>;
  expectedSaleAt?: InputMaybe<Scalars['DateTime']>;
  expectedSaleEndAt?: InputMaybe<Scalars['DateTime']>;
  expectedSalePrice?: InputMaybe<ShowcasePriceInput>;
  inventory?: InputMaybe<ShowcaseInventoryDtoInput>;
}

export interface ShowcaseHfCreateInputDto {
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  image: MediaInput;
  name: Scalars['String'];
}

export interface ShowcaseHfUpdateInputDto {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<MediaInput>;
  name?: InputMaybe<Scalars['String']>;
}

export interface ShowcaseHighlightFeature {
  description: Scalars['String'];
  id: Scalars['ID'];
  image: MediaDto;
  name: Scalars['String'];
}

export interface ShowcaseHighlightFeatureAggregateGroupBy {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}

export interface ShowcaseHighlightFeatureCountAggregate {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
}

export interface ShowcaseHighlightFeatureDeleteResponse {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}

export interface ShowcaseHighlightFeatureEdge {
  cursor: Scalars['ConnectionCursor'];
  node: ShowcaseHighlightFeature;
}

export interface ShowcaseHighlightFeatureFilter {
  and?: InputMaybe<Array<ShowcaseHighlightFeatureFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShowcaseHighlightFeatureFilter>>;
}

export interface ShowcaseHighlightFeatureMaxAggregate {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}

export interface ShowcaseHighlightFeatureMinAggregate {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}

export interface ShowcaseHighlightFeatureSort {
  direction: SortDirection;
  field: ShowcaseHighlightFeatureSortFields;
  nulls?: InputMaybe<SortNulls>;
}

export enum ShowcaseHighlightFeatureSortFields {
  Id = 'id',
  Name = 'name'
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

export interface ShowcaseInvestPkgDto {
  benefitRate: Scalars['Float'];
  count: Scalars['Float'];
  fundedRate: Scalars['Float'];
  pkg: InvestmentPackageDto;
}

export interface ShowcaseInvestPkgDtoAggregateGroupBy {
  showcaseId?: Maybe<Scalars['Float']>;
}

export interface ShowcaseInvestPkgDtoAvgAggregate {
  showcaseId?: Maybe<Scalars['Float']>;
}

export interface ShowcaseInvestPkgDtoConnection {
  edges: Array<ShowcaseInvestPkgDtoEdge>;
  pageInfo: PageInfo;
}

export interface ShowcaseInvestPkgDtoCountAggregate {
  showcaseId?: Maybe<Scalars['Int']>;
}

export interface ShowcaseInvestPkgDtoDeleteFilter {
  and?: InputMaybe<Array<ShowcaseInvestPkgDtoDeleteFilter>>;
  or?: InputMaybe<Array<ShowcaseInvestPkgDtoDeleteFilter>>;
  showcaseId?: InputMaybe<NumberFieldComparison>;
}

export interface ShowcaseInvestPkgDtoDeleteResponse {
  benefitRate?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  fundedRate?: Maybe<Scalars['Float']>;
}

export interface ShowcaseInvestPkgDtoEdge {
  cursor: Scalars['ConnectionCursor'];
  node: ShowcaseInvestPkgDto;
}

export interface ShowcaseInvestPkgDtoFilter {
  and?: InputMaybe<Array<ShowcaseInvestPkgDtoFilter>>;
  or?: InputMaybe<Array<ShowcaseInvestPkgDtoFilter>>;
  showcaseId?: InputMaybe<NumberFieldComparison>;
}

export interface ShowcaseInvestPkgDtoMaxAggregate {
  showcaseId?: Maybe<Scalars['Float']>;
}

export interface ShowcaseInvestPkgDtoMinAggregate {
  showcaseId?: Maybe<Scalars['Float']>;
}

export interface ShowcaseInvestPkgDtoSort {
  direction: SortDirection;
  field: ShowcaseInvestPkgDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
}

export enum ShowcaseInvestPkgDtoSortFields {
  ShowcaseId = 'showcaseId'
}

export interface ShowcaseInvestPkgDtoSumAggregate {
  showcaseId?: Maybe<Scalars['Float']>;
}

export interface ShowcaseInvestPkgDtoUpdateFilter {
  and?: InputMaybe<Array<ShowcaseInvestPkgDtoUpdateFilter>>;
  or?: InputMaybe<Array<ShowcaseInvestPkgDtoUpdateFilter>>;
  showcaseId?: InputMaybe<NumberFieldComparison>;
}

export interface ShowcaseInvestorPackageDto {
  firstYearBenefit: Scalars['String'];
  fund: Scalars['String'];
  package: InvestmentPackageDto;
}

export interface ShowcaseInvestorStatDto {
  adCost: Scalars['String'];
  adCostRate: Scalars['Float'];
  campaignDuration: Scalars['Float'];
  capitalizationCost: Scalars['String'];
  capitalizationRate: Scalars['Float'];
  expectedProfit: Scalars['String'];
  firstYearRevenue: Scalars['String'];
  growthRate: Scalars['Float'];
  initialCapital: Scalars['String'];
  operatingCost: Scalars['String'];
  operatingCostRate: Scalars['Float'];
  packages: Array<ShowcaseInvestorPackageDto>;
  revolvingInterval: Scalars['Float'];
  revolvingPerDay: Scalars['Float'];
  totalRevenue: Scalars['String'];
}

export interface ShowcaseMaxAggregate {
  commentCount?: Maybe<Scalars['Float']>;
  expectedSaleAt?: Maybe<Scalars['DateTime']>;
  expectedSaleEndAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  preorderCount?: Maybe<Scalars['Float']>;
  publishStatus?: Maybe<PublishStatus>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<ShowcaseStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Float']>;
}

export interface ShowcaseMinAggregate {
  commentCount?: Maybe<Scalars['Float']>;
  expectedSaleAt?: Maybe<Scalars['DateTime']>;
  expectedSaleEndAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  preorderCount?: Maybe<Scalars['Float']>;
  publishStatus?: Maybe<PublishStatus>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<ShowcaseStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  viewCount?: Maybe<Scalars['Float']>;
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
  nulls?: InputMaybe<SortNulls>;
}

export enum ShowcaseSortFields {
  CommentCount = 'commentCount',
  ExpectedSaleAt = 'expectedSaleAt',
  ExpectedSaleEndAt = 'expectedSaleEndAt',
  IsFeatured = 'isFeatured',
  Name = 'name',
  PreorderCount = 'preorderCount',
  PublishStatus = 'publishStatus',
  Slug = 'slug',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  ViewCount = 'viewCount'
}

export enum ShowcaseStatus {
  Coming = 'COMING',
  Idea = 'IDEA',
  Showcase = 'SHOWCASE'
}

export interface ShowcaseStatusFilterComparison {
  eq?: InputMaybe<ShowcaseStatus>;
  gt?: InputMaybe<ShowcaseStatus>;
  gte?: InputMaybe<ShowcaseStatus>;
  iLike?: InputMaybe<ShowcaseStatus>;
  in?: InputMaybe<Array<ShowcaseStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ShowcaseStatus>;
  lt?: InputMaybe<ShowcaseStatus>;
  lte?: InputMaybe<ShowcaseStatus>;
  neq?: InputMaybe<ShowcaseStatus>;
  notILike?: InputMaybe<ShowcaseStatus>;
  notIn?: InputMaybe<Array<ShowcaseStatus>>;
  notLike?: InputMaybe<ShowcaseStatus>;
}

export interface ShowcaseSumAggregate {
  commentCount?: Maybe<Scalars['Float']>;
  preorderCount?: Maybe<Scalars['Float']>;
  viewCount?: Maybe<Scalars['Float']>;
}

export interface ShowcaseUpdateInputDto {
  authorUid?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  expectedQuantity?: InputMaybe<ShowcasePriceInput>;
  expectedSaleAt?: InputMaybe<Scalars['DateTime']>;
  expectedSaleEndAt?: InputMaybe<Scalars['DateTime']>;
  expectedSalePrice?: InputMaybe<ShowcasePriceInput>;
  highlightFeatures?: InputMaybe<Array<ShowcaseHfCreateInputDto>>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<MediaInput>;
  imageLists?: InputMaybe<Array<ImageListCreateDto>>;
  inventory?: InputMaybe<ShowcaseInventoryDtoInput>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  publishStatus?: InputMaybe<PublishStatus>;
  status?: InputMaybe<ShowcaseStatus>;
  updates?: InputMaybe<Array<PrjUpdateCreateDto>>;
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
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
}

export interface UpdateCommentDto {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  isTopComment?: InputMaybe<Scalars['Boolean']>;
  rate?: InputMaybe<Array<CommentRateEnum>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface UpdateImageList {
  id?: InputMaybe<Scalars['ID']>;
}

export interface UpdateInvestmentPackageDto {
  benefitRate?: InputMaybe<Scalars['Float']>;
  count?: InputMaybe<Scalars['Float']>;
  displayName?: InputMaybe<Scalars['String']>;
  fundedRate?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
}

export interface UpdateInvestorRegistrationDto {
  email?: InputMaybe<Scalars['String']>;
  fund?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  job?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  promotedUid?: InputMaybe<Scalars['String']>;
  purpose?: InputMaybe<Scalars['String']>;
}

export interface UpdateMailTemplateDto {
  _serializedNode?: InputMaybe<Scalars['String']>;
  html?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  templateName?: InputMaybe<Scalars['String']>;
}

export interface UpdateManyBrandDtosInput {
  filter: BrandDtoUpdateFilter;
  update: BrandUpdateInputDto;
}

export interface UpdateManyInvestmentPackageDtosInput {
  filter: InvestmentPackageDtoUpdateFilter;
  update: UpdateInvestmentPackageDto;
}

export interface UpdateManyMailTemplateDtosInput {
  filter: MailTemplateDtoUpdateFilter;
  update: UpdateMailTemplateDto;
}

export interface UpdateManyMediaDtosInput {
  filter: MediaDtoUpdateFilter;
  update: UpdateMediaDto;
}

export interface UpdateManyResponse {
  updatedCount: Scalars['Int'];
}

export interface UpdateManyShowcaseInvestPkgDtosInput {
  filter: ShowcaseInvestPkgDtoUpdateFilter;
  update: UpdateShowcaseInvestPkgDto;
}

export interface UpdateMediaDto {
  filename?: InputMaybe<Scalars['String']>;
  formatType?: InputMaybe<MediaFormatType>;
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  mimetype?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  preloadUrl?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<MediaType>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface UpdateOneBrandDtoInput {
  id: Scalars['ID'];
  update: BrandUpdateInputDto;
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

export interface UpdateOneInvestorRegistrationDtoInput {
  id: Scalars['ID'];
  update: UpdateInvestorRegistrationDto;
}

export interface UpdateOneMailTemplateDtoInput {
  id: Scalars['String'];
  update: UpdateMailTemplateDto;
}

export interface UpdateOneMediaDtoInput {
  id: Scalars['ID'];
  update: UpdateMediaDto;
}

export interface UpdateOnePrjUpdateDtoInput {
  id: Scalars['ID'];
  update: UpdatePrjUpdateDto;
}

export interface UpdateOneShowcaseInvestPkgDtoInput {
  id: Scalars['ID'];
  update: UpdateShowcaseInvestPkgDto;
}

export interface UpdatePrjUpdateDto {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
}

export interface UpdateShowcaseInvestPkgDto {
  benefitRate?: InputMaybe<Scalars['Float']>;
  count?: InputMaybe<Scalars['Float']>;
  fundedRate?: InputMaybe<Scalars['Float']>;
}

export interface User {
  approvalStatus: UserStatusEnum;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  photoURL: Scalars['String'];
  providedData?: Maybe<Array<AuthProviderInfoDto>>;
  role: AuthRoleType;
  showcases: ShowcaseConnection;
  uid: Scalars['ID'];
}

export interface UserCreateInputDto {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photoURL?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<AuthRoleType>;
}

export enum UserStatusEnum {
  ApprovedCreator = 'APPROVED_CREATOR',
  ApprovedInvestor = 'APPROVED_INVESTOR',
  PendingCreator = 'PENDING_CREATOR',
  PendingInvestor = 'PENDING_INVESTOR'
}

export interface UserUpdateInputDto {
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photoURL?: InputMaybe<Scalars['String']>;
  providerToLink?: InputMaybe<AuthProviderInfoInputDto>;
  role?: InputMaybe<AuthRoleType>;
}

export type CreateShowcaseMutationVariables = Exact<{
  input: ShowcaseCreateInputDto;
}>;


export type CreateShowcaseMutation = { createOneShowcase: { name: string, slug: string } };

export type AllUpdatesInShowcaseQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type AllUpdatesInShowcaseQuery = { showcase: { slug: string, updates: Array<{ id: string, content: string, createdAt: any }> } };

export type OneUpdateInShowcaseQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OneUpdateInShowcaseQuery = { update?: { id: string, content: string, createdAt: any } | undefined };

export type PostAnUpdateInShowcaseMutationVariables = Exact<{
  slug: Scalars['String'];
  input: PrjUpdateCreateDto;
}>;


export type PostAnUpdateInShowcaseMutation = { postProjectUpdate: { id: string } };

export type UpdateOneUpdateInShowcaseMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdatePrjUpdateDto;
}>;


export type UpdateOneUpdateInShowcaseMutation = { updateOnePrjUpdateDto: { id: string } };

export type MediaFragment = { id: string, path: string, preloadUrl: string, width: number, height: number };

export type HighlightFeatureFragment = { id: string, name: string, description: string, image: { id: string, path: string, preloadUrl: string, width: number, height: number } };

export type ShowcaseHfFragment = { highlightFeatures: Array<{ id: string, name: string, description: string, image: { id: string, path: string, preloadUrl: string, width: number, height: number } }> };

export type ShowcaseInvestorStatFragment = { investorStat?: { totalRevenue: string, firstYearRevenue: string, campaignDuration: number, growthRate: number, adCostRate: number, adCost: string, operatingCostRate: number, operatingCost: string, initialCapital: string, revolvingInterval: number, revolvingPerDay: number, packages: Array<{ fund: string, firstYearBenefit: string, package: { id: string, displayName: string, fundedRate: number, benefitRate: number, count: number } }> } | undefined };

export type ShowcaseDetailFragment = { id: string, slug: string, name: string, status: ShowcaseStatus, description: string, expectedSaleAt?: any | undefined, expectedSaleEndAt?: any | undefined, publishStatus: PublishStatus, updatedAt: any, createdAt: any, author: { email: string, name: string }, brand: { name: string, description: string }, image: { id: string, path: string, preloadUrl: string, width: number, height: number }, expectedSalePrice?: { regular: number, pioneer: number, preorder: number, promo: number } | undefined, expectedQuantity?: { pioneer: number, promo: number, preorder: number, regular: number } | undefined, imageLists: Array<{ id: string, images: Array<{ id: string, path: string, preloadUrl: string, width: number, height: number }> }> };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { banner?: { value: any } | undefined, featured: { edges: Array<{ node: { id: string, name: string, slug: string, status: ShowcaseStatus, createdAt: any, expectedSaleAt?: any | undefined, image: { id: string, path: string, preloadUrl: string, width: number, height: number }, expectedSalePrice?: { regular: number, pioneer: number, preorder: number, promo: number } | undefined } }> } };

export type IndexPageClientQueryVariables = Exact<{
  filter: ShowcaseFilter;
  cursor?: InputMaybe<Scalars['ConnectionCursor']>;
}>;


export type IndexPageClientQuery = { showcases: { pageInfo: { hasNextPage?: boolean | undefined, startCursor?: any | undefined, endCursor?: any | undefined }, edges: Array<{ node: { id: string, name: string, slug: string, status: ShowcaseStatus, createdAt: any, image: { id: string, path: string, preloadUrl: string, width: number, height: number } } }> } };

export type DraftShowcasesQueryVariables = Exact<{ [key: string]: never; }>;


export type DraftShowcasesQuery = { showcases: { edges: Array<{ node: { slug: string, name: string, image: { path: string } } }> } };

export type InvestmentPackagesQueryVariables = Exact<{ [key: string]: never; }>;


export type InvestmentPackagesQuery = { investmentPackageDtos: { edges: Array<{ node: { id: string, displayName: string, fundedRate: number, benefitRate: number, count: number } }> } };

export type ShowcasePortalQueryVariables = Exact<{ [key: string]: never; }>;


export type ShowcasePortalQuery = { showcases: { pageInfo: { hasNextPage?: boolean | undefined, endCursor?: any | undefined }, edges: Array<{ node: { id: string, name: string, slug: string, status: ShowcaseStatus, createdAt: any, expectedSaleAt?: any | undefined, image: { path: string, preloadUrl: string, height: number, width: number }, expectedSalePrice?: { regular: number, pioneer: number, preorder: number, promo: number } | undefined } }> } };

export type ShowcasesQueryVariables = Exact<{
  filter?: InputMaybe<ShowcaseFilter>;
  paging: CursorPaging;
}>;


export type ShowcasesQuery = { showcases: { pageInfo: { hasNextPage?: boolean | undefined, endCursor?: any | undefined }, edges: Array<{ node: { id: string, name: string, slug: string, status: ShowcaseStatus, createdAt: any, image: { id: string, path: string, preloadUrl: string, width: number, height: number } } }> } };

export type SlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type SlugsQuery = { slugs: Array<string> };

export type QueryCommentsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type QueryCommentsQuery = { showcase: { slug: string, comments: Array<{ id: string, content: string, rate: Array<CommentRateEnum>, isTopComment: boolean, author?: { email: string, name: string } | undefined }> } };

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

export type ShowcaseDetailQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ShowcaseDetailQuery = { showcase: { isPreordered?: boolean | undefined, viewCount: number, preorderCount?: number | undefined, id: string, slug: string, name: string, status: ShowcaseStatus, description: string, expectedSaleAt?: any | undefined, expectedSaleEndAt?: any | undefined, publishStatus: PublishStatus, updatedAt: any, createdAt: any, updates: Array<{ id: string, content: string, createdAt: any }>, author: { email: string, name: string }, brand: { name: string, description: string }, image: { id: string, path: string, preloadUrl: string, width: number, height: number }, expectedSalePrice?: { regular: number, pioneer: number, preorder: number, promo: number } | undefined, expectedQuantity?: { pioneer: number, promo: number, preorder: number, regular: number } | undefined, imageLists: Array<{ id: string, images: Array<{ id: string, path: string, preloadUrl: string, width: number, height: number }> }>, highlightFeatures: Array<{ id: string, name: string, description: string, image: { id: string, path: string, preloadUrl: string, width: number, height: number } }>, investorStat?: { totalRevenue: string, firstYearRevenue: string, campaignDuration: number, growthRate: number, adCostRate: number, adCost: string, operatingCostRate: number, operatingCost: string, initialCapital: string, revolvingInterval: number, revolvingPerDay: number, packages: Array<{ fund: string, firstYearBenefit: string, package: { id: string, displayName: string, fundedRate: number, benefitRate: number, count: number } }> } | undefined } };

export type ShowcasePreviewQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ShowcasePreviewQuery = { showcase: { id: string, slug: string, name: string, status: ShowcaseStatus, description: string, isPreordered?: boolean | undefined, author: { email: string, name: string }, brand: { name: string }, image: { id: string, path: string, preloadUrl: string, width: number, height: number }, expectedSalePrice?: { regular: number, pioneer: number, preorder: number, promo: number } | undefined } };

export type ShowcaseRelatedsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ShowcaseRelatedsQuery = { showcases: { edges: Array<{ node: { id: string, slug: string, name: string, status: ShowcaseStatus, createdAt: any, image: { id: string, path: string, preloadUrl: string, width: number, height: number } } }> } };

export type ShowcaseForUpdateQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ShowcaseForUpdateQuery = { showcase: { slug: string, id: string, name: string, status: ShowcaseStatus, description: string, expectedSaleAt?: any | undefined, expectedSaleEndAt?: any | undefined, publishStatus: PublishStatus, updatedAt: any, createdAt: any, author: { email: string, name: string }, brand: { name: string, description: string }, image: { id: string, path: string, preloadUrl: string, width: number, height: number }, expectedSalePrice?: { regular: number, pioneer: number, preorder: number, promo: number } | undefined, expectedQuantity?: { pioneer: number, promo: number, preorder: number, regular: number } | undefined, imageLists: Array<{ id: string, images: Array<{ id: string, path: string, preloadUrl: string, width: number, height: number }> }> } };

export type GetHighlightFeaturesOnShowcaseQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetHighlightFeaturesOnShowcaseQuery = { showcase: { slug: string, highlightFeatures: Array<{ id: string, name: string, description: string, image: { id: string, path: string, preloadUrl: string, width: number, height: number } }> } };

export type GetOneHighlightFeatureQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOneHighlightFeatureQuery = { showcaseHighlightFeature?: { id: string, name: string, description: string, image: { id: string, path: string, preloadUrl: string, width: number, height: number } } | undefined };

export type CreateOneHighlightFeatureMutationVariables = Exact<{
  slug: Scalars['String'];
  input: ShowcaseHfCreateInputDto;
}>;


export type CreateOneHighlightFeatureMutation = { createOneShowcaseHighlightFeature: { id: string } };

export type UpdateOneHighlightFeatureMutationVariables = Exact<{
  id: Scalars['ID'];
  input: ShowcaseHfUpdateInputDto;
}>;


export type UpdateOneHighlightFeatureMutation = { updateOneShowcaseHighlightFeature: { id: string } };

export type DeleteOneHighlightFeatureMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteOneHighlightFeatureMutation = { deleteOneShowcaseHighlightFeature: { id?: string | undefined } };

export type PreorderCartQueryVariables = Exact<{ [key: string]: never; }>;


export type PreorderCartQuery = { preorders: { edges: Array<{ node: { showcase: { id: string, slug: string, name: string, status: ShowcaseStatus, image: { id: string, path: string, preloadUrl: string, width: number, height: number }, expectedSalePrice?: { regular: number, pioneer: number } | undefined } } }> } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { currentUser: { email: string, name: string, role: AuthRoleType, approvalStatus: UserStatusEnum } };

export type SubscribeFcmMutationVariables = Exact<{
  token: Scalars['String'];
  topic: Array<Scalars['String']> | Scalars['String'];
}>;


export type SubscribeFcmMutation = { subscribeToFcmTopic: boolean };

export type SubmitPreorderMutationVariables = Exact<{
  slug: Scalars['String'];
  input?: InputMaybe<PreorderRequestInputDto>;
}>;


export type SubmitPreorderMutation = { createOnePreorder: { id: string, customToken?: string | undefined } };

export const MediaFragmentDoc = gql`
    fragment Media on MediaDto {
  id
  path
  preloadUrl
  width
  height
}
    `;
export const HighlightFeatureFragmentDoc = gql`
    fragment HighlightFeature on ShowcaseHighlightFeature {
  id
  name
  description
  image {
    ...Media
  }
}
    `;
export const ShowcaseHfFragmentDoc = gql`
    fragment ShowcaseHF on Showcase {
  highlightFeatures {
    ...HighlightFeature
  }
}
    `;
export const ShowcaseInvestorStatFragmentDoc = gql`
    fragment ShowcaseInvestorStat on Showcase {
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
    packages {
      package {
        id
        displayName
        fundedRate
        benefitRate
        count
      }
      fund
      firstYearBenefit
    }
  }
}
    `;
export const ShowcaseDetailFragmentDoc = gql`
    fragment ShowcaseDetail on Showcase {
  id
  slug
  name
  author {
    email
    name
  }
  brand {
    name
    description
  }
  status
  image {
    ...Media
  }
  description
  expectedSalePrice {
    regular
    pioneer
    preorder
    promo
  }
  expectedQuantity {
    pioneer
    promo
    preorder
    regular
  }
  expectedSaleAt
  expectedSaleEndAt
  imageLists {
    id
    images {
      ...Media
    }
  }
  publishStatus
  status
  updatedAt
  createdAt
}
    `;
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
export const AllUpdatesInShowcaseDocument = gql`
    query AllUpdatesInShowcase($slug: String!) {
  showcase(slug: $slug) {
    slug
    updates {
      id
      content
      createdAt
    }
  }
}
    `;

/**
 * __useAllUpdatesInShowcaseQuery__
 *
 * To run a query within a React component, call `useAllUpdatesInShowcaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUpdatesInShowcaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUpdatesInShowcaseQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAllUpdatesInShowcaseQuery(baseOptions: Apollo.QueryHookOptions<AllUpdatesInShowcaseQuery, AllUpdatesInShowcaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUpdatesInShowcaseQuery, AllUpdatesInShowcaseQueryVariables>(AllUpdatesInShowcaseDocument, options);
      }
export function useAllUpdatesInShowcaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUpdatesInShowcaseQuery, AllUpdatesInShowcaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUpdatesInShowcaseQuery, AllUpdatesInShowcaseQueryVariables>(AllUpdatesInShowcaseDocument, options);
        }
export type AllUpdatesInShowcaseQueryHookResult = ReturnType<typeof useAllUpdatesInShowcaseQuery>;
export type AllUpdatesInShowcaseLazyQueryHookResult = ReturnType<typeof useAllUpdatesInShowcaseLazyQuery>;
export type AllUpdatesInShowcaseQueryResult = Apollo.QueryResult<AllUpdatesInShowcaseQuery, AllUpdatesInShowcaseQueryVariables>;
export function refetchAllUpdatesInShowcaseQuery(variables: AllUpdatesInShowcaseQueryVariables) {
      return { query: AllUpdatesInShowcaseDocument, variables: variables }
    }
export const OneUpdateInShowcaseDocument = gql`
    query OneUpdateInShowcase($id: ID!) {
  update: prjUpdateDto(id: $id) {
    id
    content
    createdAt
  }
}
    `;

/**
 * __useOneUpdateInShowcaseQuery__
 *
 * To run a query within a React component, call `useOneUpdateInShowcaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useOneUpdateInShowcaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOneUpdateInShowcaseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOneUpdateInShowcaseQuery(baseOptions: Apollo.QueryHookOptions<OneUpdateInShowcaseQuery, OneUpdateInShowcaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OneUpdateInShowcaseQuery, OneUpdateInShowcaseQueryVariables>(OneUpdateInShowcaseDocument, options);
      }
export function useOneUpdateInShowcaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OneUpdateInShowcaseQuery, OneUpdateInShowcaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OneUpdateInShowcaseQuery, OneUpdateInShowcaseQueryVariables>(OneUpdateInShowcaseDocument, options);
        }
export type OneUpdateInShowcaseQueryHookResult = ReturnType<typeof useOneUpdateInShowcaseQuery>;
export type OneUpdateInShowcaseLazyQueryHookResult = ReturnType<typeof useOneUpdateInShowcaseLazyQuery>;
export type OneUpdateInShowcaseQueryResult = Apollo.QueryResult<OneUpdateInShowcaseQuery, OneUpdateInShowcaseQueryVariables>;
export function refetchOneUpdateInShowcaseQuery(variables: OneUpdateInShowcaseQueryVariables) {
      return { query: OneUpdateInShowcaseDocument, variables: variables }
    }
export const PostAnUpdateInShowcaseDocument = gql`
    mutation PostAnUpdateInShowcase($slug: String!, $input: PrjUpdateCreateDto!) {
  postProjectUpdate(slug: $slug, input: $input) {
    id
  }
}
    `;
export type PostAnUpdateInShowcaseMutationFn = Apollo.MutationFunction<PostAnUpdateInShowcaseMutation, PostAnUpdateInShowcaseMutationVariables>;

/**
 * __usePostAnUpdateInShowcaseMutation__
 *
 * To run a mutation, you first call `usePostAnUpdateInShowcaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAnUpdateInShowcaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAnUpdateInShowcaseMutation, { data, loading, error }] = usePostAnUpdateInShowcaseMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostAnUpdateInShowcaseMutation(baseOptions?: Apollo.MutationHookOptions<PostAnUpdateInShowcaseMutation, PostAnUpdateInShowcaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostAnUpdateInShowcaseMutation, PostAnUpdateInShowcaseMutationVariables>(PostAnUpdateInShowcaseDocument, options);
      }
export type PostAnUpdateInShowcaseMutationHookResult = ReturnType<typeof usePostAnUpdateInShowcaseMutation>;
export type PostAnUpdateInShowcaseMutationResult = Apollo.MutationResult<PostAnUpdateInShowcaseMutation>;
export type PostAnUpdateInShowcaseMutationOptions = Apollo.BaseMutationOptions<PostAnUpdateInShowcaseMutation, PostAnUpdateInShowcaseMutationVariables>;
export const UpdateOneUpdateInShowcaseDocument = gql`
    mutation UpdateOneUpdateInShowcase($id: ID!, $input: UpdatePrjUpdateDto!) {
  updateOnePrjUpdateDto(input: {id: $id, update: $input}) {
    id
  }
}
    `;
export type UpdateOneUpdateInShowcaseMutationFn = Apollo.MutationFunction<UpdateOneUpdateInShowcaseMutation, UpdateOneUpdateInShowcaseMutationVariables>;

/**
 * __useUpdateOneUpdateInShowcaseMutation__
 *
 * To run a mutation, you first call `useUpdateOneUpdateInShowcaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUpdateInShowcaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUpdateInShowcaseMutation, { data, loading, error }] = useUpdateOneUpdateInShowcaseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneUpdateInShowcaseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneUpdateInShowcaseMutation, UpdateOneUpdateInShowcaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneUpdateInShowcaseMutation, UpdateOneUpdateInShowcaseMutationVariables>(UpdateOneUpdateInShowcaseDocument, options);
      }
export type UpdateOneUpdateInShowcaseMutationHookResult = ReturnType<typeof useUpdateOneUpdateInShowcaseMutation>;
export type UpdateOneUpdateInShowcaseMutationResult = Apollo.MutationResult<UpdateOneUpdateInShowcaseMutation>;
export type UpdateOneUpdateInShowcaseMutationOptions = Apollo.BaseMutationOptions<UpdateOneUpdateInShowcaseMutation, UpdateOneUpdateInShowcaseMutationVariables>;
export const IndexPageDocument = gql`
    query IndexPage {
  banner: setting(key: "common:banner") {
    value
  }
  featured: showcases(
    filter: {isFeatured: {is: true}, publishStatus: {eq: PUBLISHED}}
  ) @connection(filter: {isFeatured: {is: true}, publishStatus: {eq: PUBLISHED}}) {
    edges {
      node {
        id
        name
        slug
        status
        image {
          ...Media
        }
        createdAt
        expectedSaleAt
        expectedSalePrice {
          regular
          pioneer
          preorder
          promo
        }
      }
    }
  }
}
    ${MediaFragmentDoc}`;

/**
 * __useIndexPageQuery__
 *
 * To run a query within a React component, call `useIndexPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndexPageQuery(baseOptions?: Apollo.QueryHookOptions<IndexPageQuery, IndexPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IndexPageQuery, IndexPageQueryVariables>(IndexPageDocument, options);
      }
export function useIndexPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndexPageQuery, IndexPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IndexPageQuery, IndexPageQueryVariables>(IndexPageDocument, options);
        }
export type IndexPageQueryHookResult = ReturnType<typeof useIndexPageQuery>;
export type IndexPageLazyQueryHookResult = ReturnType<typeof useIndexPageLazyQuery>;
export type IndexPageQueryResult = Apollo.QueryResult<IndexPageQuery, IndexPageQueryVariables>;
export function refetchIndexPageQuery(variables?: IndexPageQueryVariables) {
      return { query: IndexPageDocument, variables: variables }
    }
export const IndexPageClientDocument = gql`
    query IndexPageClient($filter: ShowcaseFilter!, $cursor: ConnectionCursor) {
  showcases(
    filter: {and: [$filter, {isFeatured: {is: false}, publishStatus: {eq: PUBLISHED}}]}
    paging: {first: 10, after: $cursor}
  ) @connection(filter: $filter) {
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        name
        slug
        status
        image {
          ...Media
        }
        createdAt
      }
    }
  }
}
    ${MediaFragmentDoc}`;

/**
 * __useIndexPageClientQuery__
 *
 * To run a query within a React component, call `useIndexPageClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexPageClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexPageClientQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useIndexPageClientQuery(baseOptions: Apollo.QueryHookOptions<IndexPageClientQuery, IndexPageClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IndexPageClientQuery, IndexPageClientQueryVariables>(IndexPageClientDocument, options);
      }
export function useIndexPageClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndexPageClientQuery, IndexPageClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IndexPageClientQuery, IndexPageClientQueryVariables>(IndexPageClientDocument, options);
        }
export type IndexPageClientQueryHookResult = ReturnType<typeof useIndexPageClientQuery>;
export type IndexPageClientLazyQueryHookResult = ReturnType<typeof useIndexPageClientLazyQuery>;
export type IndexPageClientQueryResult = Apollo.QueryResult<IndexPageClientQuery, IndexPageClientQueryVariables>;
export function refetchIndexPageClientQuery(variables: IndexPageClientQueryVariables) {
      return { query: IndexPageClientDocument, variables: variables }
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
export const InvestmentPackagesDocument = gql`
    query InvestmentPackages {
  investmentPackageDtos {
    edges {
      node {
        id
        displayName
        fundedRate
        benefitRate
        count
      }
    }
  }
}
    `;

/**
 * __useInvestmentPackagesQuery__
 *
 * To run a query within a React component, call `useInvestmentPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvestmentPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvestmentPackagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useInvestmentPackagesQuery(baseOptions?: Apollo.QueryHookOptions<InvestmentPackagesQuery, InvestmentPackagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvestmentPackagesQuery, InvestmentPackagesQueryVariables>(InvestmentPackagesDocument, options);
      }
export function useInvestmentPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvestmentPackagesQuery, InvestmentPackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvestmentPackagesQuery, InvestmentPackagesQueryVariables>(InvestmentPackagesDocument, options);
        }
export type InvestmentPackagesQueryHookResult = ReturnType<typeof useInvestmentPackagesQuery>;
export type InvestmentPackagesLazyQueryHookResult = ReturnType<typeof useInvestmentPackagesLazyQuery>;
export type InvestmentPackagesQueryResult = Apollo.QueryResult<InvestmentPackagesQuery, InvestmentPackagesQueryVariables>;
export function refetchInvestmentPackagesQuery(variables?: InvestmentPackagesQueryVariables) {
      return { query: InvestmentPackagesDocument, variables: variables }
    }
export const ShowcasePortalDocument = gql`
    query ShowcasePortal {
  showcases(paging: {first: 10}, filter: {isFeatured: {is: true}}) {
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
          height
          width
        }
        createdAt
        expectedSaleAt
        expectedSalePrice {
          regular
          pioneer
          preorder
          promo
        }
      }
    }
  }
}
    `;

/**
 * __useShowcasePortalQuery__
 *
 * To run a query within a React component, call `useShowcasePortalQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowcasePortalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowcasePortalQuery({
 *   variables: {
 *   },
 * });
 */
export function useShowcasePortalQuery(baseOptions?: Apollo.QueryHookOptions<ShowcasePortalQuery, ShowcasePortalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowcasePortalQuery, ShowcasePortalQueryVariables>(ShowcasePortalDocument, options);
      }
export function useShowcasePortalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowcasePortalQuery, ShowcasePortalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowcasePortalQuery, ShowcasePortalQueryVariables>(ShowcasePortalDocument, options);
        }
export type ShowcasePortalQueryHookResult = ReturnType<typeof useShowcasePortalQuery>;
export type ShowcasePortalLazyQueryHookResult = ReturnType<typeof useShowcasePortalLazyQuery>;
export type ShowcasePortalQueryResult = Apollo.QueryResult<ShowcasePortalQuery, ShowcasePortalQueryVariables>;
export function refetchShowcasePortalQuery(variables?: ShowcasePortalQueryVariables) {
      return { query: ShowcasePortalDocument, variables: variables }
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
          ...Media
        }
        createdAt
      }
    }
  }
}
    ${MediaFragmentDoc}`;

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
export const QueryCommentsDocument = gql`
    query QueryComments($slug: String!) {
  showcase(slug: $slug) {
    slug
    comments {
      id
      author {
        email
        name
      }
      content
      rate
      isTopComment
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
export const ShowcaseDetailDocument = gql`
    query ShowcaseDetail($slug: String!) {
  showcase(slug: $slug) {
    ...ShowcaseDetail
    ...ShowcaseHF
    ...ShowcaseInvestorStat
    updates {
      id
      content
      createdAt
    }
    isPreordered
    viewCount
    preorderCount
  }
}
    ${ShowcaseDetailFragmentDoc}
${MediaFragmentDoc}
${ShowcaseHfFragmentDoc}
${HighlightFeatureFragmentDoc}
${ShowcaseInvestorStatFragmentDoc}`;

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
    id
    slug
    name
    author {
      email
      name
    }
    brand {
      name
    }
    status
    image {
      ...Media
    }
    description
    expectedSalePrice {
      regular
      pioneer
      preorder
      promo
    }
    isPreordered
  }
}
    ${MediaFragmentDoc}`;

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
export const ShowcaseRelatedsDocument = gql`
    query ShowcaseRelateds($slug: String!) {
  showcases(
    filter: {and: [{slug: {neq: $slug}}, {slug: {notLike: "ci-test%"}}, {publishStatus: {eq: PUBLISHED}}]}
  ) {
    edges {
      node {
        id
        slug
        name
        status
        image {
          ...Media
        }
        createdAt
      }
    }
  }
}
    ${MediaFragmentDoc}`;

/**
 * __useShowcaseRelatedsQuery__
 *
 * To run a query within a React component, call `useShowcaseRelatedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowcaseRelatedsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowcaseRelatedsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useShowcaseRelatedsQuery(baseOptions: Apollo.QueryHookOptions<ShowcaseRelatedsQuery, ShowcaseRelatedsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowcaseRelatedsQuery, ShowcaseRelatedsQueryVariables>(ShowcaseRelatedsDocument, options);
      }
export function useShowcaseRelatedsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowcaseRelatedsQuery, ShowcaseRelatedsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowcaseRelatedsQuery, ShowcaseRelatedsQueryVariables>(ShowcaseRelatedsDocument, options);
        }
export type ShowcaseRelatedsQueryHookResult = ReturnType<typeof useShowcaseRelatedsQuery>;
export type ShowcaseRelatedsLazyQueryHookResult = ReturnType<typeof useShowcaseRelatedsLazyQuery>;
export type ShowcaseRelatedsQueryResult = Apollo.QueryResult<ShowcaseRelatedsQuery, ShowcaseRelatedsQueryVariables>;
export function refetchShowcaseRelatedsQuery(variables: ShowcaseRelatedsQueryVariables) {
      return { query: ShowcaseRelatedsDocument, variables: variables }
    }
export const ShowcaseForUpdateDocument = gql`
    query ShowcaseForUpdate($slug: String!) {
  showcase(slug: $slug) {
    slug
    ...ShowcaseDetail
  }
}
    ${ShowcaseDetailFragmentDoc}
${MediaFragmentDoc}`;

/**
 * __useShowcaseForUpdateQuery__
 *
 * To run a query within a React component, call `useShowcaseForUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowcaseForUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowcaseForUpdateQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useShowcaseForUpdateQuery(baseOptions: Apollo.QueryHookOptions<ShowcaseForUpdateQuery, ShowcaseForUpdateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowcaseForUpdateQuery, ShowcaseForUpdateQueryVariables>(ShowcaseForUpdateDocument, options);
      }
export function useShowcaseForUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowcaseForUpdateQuery, ShowcaseForUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowcaseForUpdateQuery, ShowcaseForUpdateQueryVariables>(ShowcaseForUpdateDocument, options);
        }
export type ShowcaseForUpdateQueryHookResult = ReturnType<typeof useShowcaseForUpdateQuery>;
export type ShowcaseForUpdateLazyQueryHookResult = ReturnType<typeof useShowcaseForUpdateLazyQuery>;
export type ShowcaseForUpdateQueryResult = Apollo.QueryResult<ShowcaseForUpdateQuery, ShowcaseForUpdateQueryVariables>;
export function refetchShowcaseForUpdateQuery(variables: ShowcaseForUpdateQueryVariables) {
      return { query: ShowcaseForUpdateDocument, variables: variables }
    }
export const GetHighlightFeaturesOnShowcaseDocument = gql`
    query GetHighlightFeaturesOnShowcase($slug: String!) {
  showcase(slug: $slug) {
    slug
    ...ShowcaseHF
  }
}
    ${ShowcaseHfFragmentDoc}
${HighlightFeatureFragmentDoc}
${MediaFragmentDoc}`;

/**
 * __useGetHighlightFeaturesOnShowcaseQuery__
 *
 * To run a query within a React component, call `useGetHighlightFeaturesOnShowcaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHighlightFeaturesOnShowcaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHighlightFeaturesOnShowcaseQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetHighlightFeaturesOnShowcaseQuery(baseOptions: Apollo.QueryHookOptions<GetHighlightFeaturesOnShowcaseQuery, GetHighlightFeaturesOnShowcaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHighlightFeaturesOnShowcaseQuery, GetHighlightFeaturesOnShowcaseQueryVariables>(GetHighlightFeaturesOnShowcaseDocument, options);
      }
export function useGetHighlightFeaturesOnShowcaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHighlightFeaturesOnShowcaseQuery, GetHighlightFeaturesOnShowcaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHighlightFeaturesOnShowcaseQuery, GetHighlightFeaturesOnShowcaseQueryVariables>(GetHighlightFeaturesOnShowcaseDocument, options);
        }
export type GetHighlightFeaturesOnShowcaseQueryHookResult = ReturnType<typeof useGetHighlightFeaturesOnShowcaseQuery>;
export type GetHighlightFeaturesOnShowcaseLazyQueryHookResult = ReturnType<typeof useGetHighlightFeaturesOnShowcaseLazyQuery>;
export type GetHighlightFeaturesOnShowcaseQueryResult = Apollo.QueryResult<GetHighlightFeaturesOnShowcaseQuery, GetHighlightFeaturesOnShowcaseQueryVariables>;
export function refetchGetHighlightFeaturesOnShowcaseQuery(variables: GetHighlightFeaturesOnShowcaseQueryVariables) {
      return { query: GetHighlightFeaturesOnShowcaseDocument, variables: variables }
    }
export const GetOneHighlightFeatureDocument = gql`
    query GetOneHighlightFeature($id: ID!) {
  showcaseHighlightFeature(id: $id) {
    ...HighlightFeature
  }
}
    ${HighlightFeatureFragmentDoc}
${MediaFragmentDoc}`;

/**
 * __useGetOneHighlightFeatureQuery__
 *
 * To run a query within a React component, call `useGetOneHighlightFeatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneHighlightFeatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneHighlightFeatureQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneHighlightFeatureQuery(baseOptions: Apollo.QueryHookOptions<GetOneHighlightFeatureQuery, GetOneHighlightFeatureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneHighlightFeatureQuery, GetOneHighlightFeatureQueryVariables>(GetOneHighlightFeatureDocument, options);
      }
export function useGetOneHighlightFeatureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneHighlightFeatureQuery, GetOneHighlightFeatureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneHighlightFeatureQuery, GetOneHighlightFeatureQueryVariables>(GetOneHighlightFeatureDocument, options);
        }
export type GetOneHighlightFeatureQueryHookResult = ReturnType<typeof useGetOneHighlightFeatureQuery>;
export type GetOneHighlightFeatureLazyQueryHookResult = ReturnType<typeof useGetOneHighlightFeatureLazyQuery>;
export type GetOneHighlightFeatureQueryResult = Apollo.QueryResult<GetOneHighlightFeatureQuery, GetOneHighlightFeatureQueryVariables>;
export function refetchGetOneHighlightFeatureQuery(variables: GetOneHighlightFeatureQueryVariables) {
      return { query: GetOneHighlightFeatureDocument, variables: variables }
    }
export const CreateOneHighlightFeatureDocument = gql`
    mutation CreateOneHighlightFeature($slug: String!, $input: ShowcaseHFCreateInputDto!) {
  createOneShowcaseHighlightFeature(slug: $slug, input: $input) {
    id
  }
}
    `;
export type CreateOneHighlightFeatureMutationFn = Apollo.MutationFunction<CreateOneHighlightFeatureMutation, CreateOneHighlightFeatureMutationVariables>;

/**
 * __useCreateOneHighlightFeatureMutation__
 *
 * To run a mutation, you first call `useCreateOneHighlightFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneHighlightFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneHighlightFeatureMutation, { data, loading, error }] = useCreateOneHighlightFeatureMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneHighlightFeatureMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneHighlightFeatureMutation, CreateOneHighlightFeatureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneHighlightFeatureMutation, CreateOneHighlightFeatureMutationVariables>(CreateOneHighlightFeatureDocument, options);
      }
export type CreateOneHighlightFeatureMutationHookResult = ReturnType<typeof useCreateOneHighlightFeatureMutation>;
export type CreateOneHighlightFeatureMutationResult = Apollo.MutationResult<CreateOneHighlightFeatureMutation>;
export type CreateOneHighlightFeatureMutationOptions = Apollo.BaseMutationOptions<CreateOneHighlightFeatureMutation, CreateOneHighlightFeatureMutationVariables>;
export const UpdateOneHighlightFeatureDocument = gql`
    mutation UpdateOneHighlightFeature($id: ID!, $input: ShowcaseHFUpdateInputDto!) {
  updateOneShowcaseHighlightFeature(id: $id, input: $input) {
    id
  }
}
    `;
export type UpdateOneHighlightFeatureMutationFn = Apollo.MutationFunction<UpdateOneHighlightFeatureMutation, UpdateOneHighlightFeatureMutationVariables>;

/**
 * __useUpdateOneHighlightFeatureMutation__
 *
 * To run a mutation, you first call `useUpdateOneHighlightFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneHighlightFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneHighlightFeatureMutation, { data, loading, error }] = useUpdateOneHighlightFeatureMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneHighlightFeatureMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneHighlightFeatureMutation, UpdateOneHighlightFeatureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneHighlightFeatureMutation, UpdateOneHighlightFeatureMutationVariables>(UpdateOneHighlightFeatureDocument, options);
      }
export type UpdateOneHighlightFeatureMutationHookResult = ReturnType<typeof useUpdateOneHighlightFeatureMutation>;
export type UpdateOneHighlightFeatureMutationResult = Apollo.MutationResult<UpdateOneHighlightFeatureMutation>;
export type UpdateOneHighlightFeatureMutationOptions = Apollo.BaseMutationOptions<UpdateOneHighlightFeatureMutation, UpdateOneHighlightFeatureMutationVariables>;
export const DeleteOneHighlightFeatureDocument = gql`
    mutation DeleteOneHighlightFeature($id: ID!) {
  deleteOneShowcaseHighlightFeature(input: {id: $id}) {
    id
  }
}
    `;
export type DeleteOneHighlightFeatureMutationFn = Apollo.MutationFunction<DeleteOneHighlightFeatureMutation, DeleteOneHighlightFeatureMutationVariables>;

/**
 * __useDeleteOneHighlightFeatureMutation__
 *
 * To run a mutation, you first call `useDeleteOneHighlightFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneHighlightFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneHighlightFeatureMutation, { data, loading, error }] = useDeleteOneHighlightFeatureMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOneHighlightFeatureMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneHighlightFeatureMutation, DeleteOneHighlightFeatureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneHighlightFeatureMutation, DeleteOneHighlightFeatureMutationVariables>(DeleteOneHighlightFeatureDocument, options);
      }
export type DeleteOneHighlightFeatureMutationHookResult = ReturnType<typeof useDeleteOneHighlightFeatureMutation>;
export type DeleteOneHighlightFeatureMutationResult = Apollo.MutationResult<DeleteOneHighlightFeatureMutation>;
export type DeleteOneHighlightFeatureMutationOptions = Apollo.BaseMutationOptions<DeleteOneHighlightFeatureMutation, DeleteOneHighlightFeatureMutationVariables>;
export const PreorderCartDocument = gql`
    query PreorderCart {
  preorders {
    edges {
      node {
        showcase {
          id
          slug
          name
          status
          image {
            ...Media
          }
          expectedSalePrice {
            regular
            pioneer
          }
        }
      }
    }
  }
}
    ${MediaFragmentDoc}`;

/**
 * __usePreorderCartQuery__
 *
 * To run a query within a React component, call `usePreorderCartQuery` and pass it any options that fit your needs.
 * When your component renders, `usePreorderCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePreorderCartQuery({
 *   variables: {
 *   },
 * });
 */
export function usePreorderCartQuery(baseOptions?: Apollo.QueryHookOptions<PreorderCartQuery, PreorderCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PreorderCartQuery, PreorderCartQueryVariables>(PreorderCartDocument, options);
      }
export function usePreorderCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PreorderCartQuery, PreorderCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PreorderCartQuery, PreorderCartQueryVariables>(PreorderCartDocument, options);
        }
export type PreorderCartQueryHookResult = ReturnType<typeof usePreorderCartQuery>;
export type PreorderCartLazyQueryHookResult = ReturnType<typeof usePreorderCartLazyQuery>;
export type PreorderCartQueryResult = Apollo.QueryResult<PreorderCartQuery, PreorderCartQueryVariables>;
export function refetchPreorderCartQuery(variables?: PreorderCartQueryVariables) {
      return { query: PreorderCartDocument, variables: variables }
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
export const SubscribeFcmDocument = gql`
    mutation SubscribeFcm($token: String!, $topic: [String!]!) {
  subscribeToFcmTopic(token: $token, topic: $topic)
}
    `;
export type SubscribeFcmMutationFn = Apollo.MutationFunction<SubscribeFcmMutation, SubscribeFcmMutationVariables>;

/**
 * __useSubscribeFcmMutation__
 *
 * To run a mutation, you first call `useSubscribeFcmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeFcmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeFcmMutation, { data, loading, error }] = useSubscribeFcmMutation({
 *   variables: {
 *      token: // value for 'token'
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useSubscribeFcmMutation(baseOptions?: Apollo.MutationHookOptions<SubscribeFcmMutation, SubscribeFcmMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubscribeFcmMutation, SubscribeFcmMutationVariables>(SubscribeFcmDocument, options);
      }
export type SubscribeFcmMutationHookResult = ReturnType<typeof useSubscribeFcmMutation>;
export type SubscribeFcmMutationResult = Apollo.MutationResult<SubscribeFcmMutation>;
export type SubscribeFcmMutationOptions = Apollo.BaseMutationOptions<SubscribeFcmMutation, SubscribeFcmMutationVariables>;
export const SubmitPreorderDocument = gql`
    mutation SubmitPreorder($slug: String!, $input: PreorderRequestInputDto) {
  createOnePreorder(slug: $slug, input: $input) {
    id
    customToken
  }
}
    `;
export type SubmitPreorderMutationFn = Apollo.MutationFunction<SubmitPreorderMutation, SubmitPreorderMutationVariables>;

/**
 * __useSubmitPreorderMutation__
 *
 * To run a mutation, you first call `useSubmitPreorderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitPreorderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitPreorderMutation, { data, loading, error }] = useSubmitPreorderMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitPreorderMutation(baseOptions?: Apollo.MutationHookOptions<SubmitPreorderMutation, SubmitPreorderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitPreorderMutation, SubmitPreorderMutationVariables>(SubmitPreorderDocument, options);
      }
export type SubmitPreorderMutationHookResult = ReturnType<typeof useSubmitPreorderMutation>;
export type SubmitPreorderMutationResult = Apollo.MutationResult<SubmitPreorderMutation>;
export type SubmitPreorderMutationOptions = Apollo.BaseMutationOptions<SubmitPreorderMutation, SubmitPreorderMutationVariables>;