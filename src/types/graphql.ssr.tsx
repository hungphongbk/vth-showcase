import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient , ApolloClientContext} from '../api/apollo';

export async function getServerPageAllUpdatesInShowcase
    (options: Omit<Apollo.QueryOptions<Types.AllUpdatesInShowcaseQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.AllUpdatesInShowcaseQuery>({ ...options, query: Operations.AllUpdatesInShowcaseDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useAllUpdatesInShowcase = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.AllUpdatesInShowcaseQuery, Types.AllUpdatesInShowcaseQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.AllUpdatesInShowcaseDocument, options);
};
export type PageAllUpdatesInShowcaseComp = React.FC<{data?: Types.AllUpdatesInShowcaseQuery, error?: Apollo.ApolloError}>;
export const withPageAllUpdatesInShowcase = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.AllUpdatesInShowcaseQuery, Types.AllUpdatesInShowcaseQueryVariables>) => (WrappedComponent:PageAllUpdatesInShowcaseComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.AllUpdatesInShowcaseDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrAllUpdatesInShowcase = {
      getServerPage: getServerPageAllUpdatesInShowcase,
      withPage: withPageAllUpdatesInShowcase,
      usePage: useAllUpdatesInShowcase,
    }
export async function getServerPageOneUpdateInShowcase
    (options: Omit<Apollo.QueryOptions<Types.OneUpdateInShowcaseQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.OneUpdateInShowcaseQuery>({ ...options, query: Operations.OneUpdateInShowcaseDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useOneUpdateInShowcase = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.OneUpdateInShowcaseQuery, Types.OneUpdateInShowcaseQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.OneUpdateInShowcaseDocument, options);
};
export type PageOneUpdateInShowcaseComp = React.FC<{data?: Types.OneUpdateInShowcaseQuery, error?: Apollo.ApolloError}>;
export const withPageOneUpdateInShowcase = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.OneUpdateInShowcaseQuery, Types.OneUpdateInShowcaseQueryVariables>) => (WrappedComponent:PageOneUpdateInShowcaseComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.OneUpdateInShowcaseDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrOneUpdateInShowcase = {
      getServerPage: getServerPageOneUpdateInShowcase,
      withPage: withPageOneUpdateInShowcase,
      usePage: useOneUpdateInShowcase,
    }


export async function getServerPageIndex
    (options: Omit<Apollo.QueryOptions<Types.IndexPageQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.IndexPageQuery>({ ...options, query: Operations.IndexPageDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useIndex = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.IndexPageQuery, Types.IndexPageQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.IndexPageDocument, options);
};
export type PageIndexComp = React.FC<{data?: Types.IndexPageQuery, error?: Apollo.ApolloError}>;
export const withPageIndex = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.IndexPageQuery, Types.IndexPageQueryVariables>) => (WrappedComponent:PageIndexComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.IndexPageDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrIndex = {
      getServerPage: getServerPageIndex,
      withPage: withPageIndex,
      usePage: useIndex,
    }
export async function getServerPageIndexClient
    (options: Omit<Apollo.QueryOptions<Types.IndexPageClientQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.IndexPageClientQuery>({ ...options, query: Operations.IndexPageClientDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useIndexClient = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.IndexPageClientQuery, Types.IndexPageClientQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.IndexPageClientDocument, options);
};
export type PageIndexClientComp = React.FC<{data?: Types.IndexPageClientQuery, error?: Apollo.ApolloError}>;
export const withPageIndexClient = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.IndexPageClientQuery, Types.IndexPageClientQueryVariables>) => (WrappedComponent:PageIndexClientComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.IndexPageClientDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrIndexClient = {
      getServerPage: getServerPageIndexClient,
      withPage: withPageIndexClient,
      usePage: useIndexClient,
    }
export async function getServerPageDraftShowcases
    (options: Omit<Apollo.QueryOptions<Types.DraftShowcasesQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.DraftShowcasesQuery>({ ...options, query: Operations.DraftShowcasesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useDraftShowcases = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.DraftShowcasesQuery, Types.DraftShowcasesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.DraftShowcasesDocument, options);
};
export type PageDraftShowcasesComp = React.FC<{data?: Types.DraftShowcasesQuery, error?: Apollo.ApolloError}>;
export const withPageDraftShowcases = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.DraftShowcasesQuery, Types.DraftShowcasesQueryVariables>) => (WrappedComponent:PageDraftShowcasesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.DraftShowcasesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrDraftShowcases = {
      getServerPage: getServerPageDraftShowcases,
      withPage: withPageDraftShowcases,
      usePage: useDraftShowcases,
    }
export async function getServerPageInvestmentPackages
    (options: Omit<Apollo.QueryOptions<Types.InvestmentPackagesQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.InvestmentPackagesQuery>({ ...options, query: Operations.InvestmentPackagesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useInvestmentPackages = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.InvestmentPackagesQuery, Types.InvestmentPackagesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.InvestmentPackagesDocument, options);
};
export type PageInvestmentPackagesComp = React.FC<{data?: Types.InvestmentPackagesQuery, error?: Apollo.ApolloError}>;
export const withPageInvestmentPackages = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.InvestmentPackagesQuery, Types.InvestmentPackagesQueryVariables>) => (WrappedComponent:PageInvestmentPackagesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.InvestmentPackagesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrInvestmentPackages = {
      getServerPage: getServerPageInvestmentPackages,
      withPage: withPageInvestmentPackages,
      usePage: useInvestmentPackages,
    }
export async function getServerPageShowcasePortal
    (options: Omit<Apollo.QueryOptions<Types.ShowcasePortalQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ShowcasePortalQuery>({ ...options, query: Operations.ShowcasePortalDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useShowcasePortal = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcasePortalQuery, Types.ShowcasePortalQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ShowcasePortalDocument, options);
};
export type PageShowcasePortalComp = React.FC<{data?: Types.ShowcasePortalQuery, error?: Apollo.ApolloError}>;
export const withPageShowcasePortal = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcasePortalQuery, Types.ShowcasePortalQueryVariables>) => (WrappedComponent:PageShowcasePortalComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ShowcasePortalDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrShowcasePortal = {
      getServerPage: getServerPageShowcasePortal,
      withPage: withPageShowcasePortal,
      usePage: useShowcasePortal,
    }
export async function getServerPageShowcases
    (options: Omit<Apollo.QueryOptions<Types.ShowcasesQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ShowcasesQuery>({ ...options, query: Operations.ShowcasesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useShowcases = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcasesQuery, Types.ShowcasesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ShowcasesDocument, options);
};
export type PageShowcasesComp = React.FC<{data?: Types.ShowcasesQuery, error?: Apollo.ApolloError}>;
export const withPageShowcases = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcasesQuery, Types.ShowcasesQueryVariables>) => (WrappedComponent:PageShowcasesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ShowcasesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrShowcases = {
      getServerPage: getServerPageShowcases,
      withPage: withPageShowcases,
      usePage: useShowcases,
    }
export async function getServerPageSlugs
    (options: Omit<Apollo.QueryOptions<Types.SlugsQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.SlugsQuery>({ ...options, query: Operations.SlugsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useSlugs = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.SlugsQuery, Types.SlugsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.SlugsDocument, options);
};
export type PageSlugsComp = React.FC<{data?: Types.SlugsQuery, error?: Apollo.ApolloError}>;
export const withPageSlugs = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.SlugsQuery, Types.SlugsQueryVariables>) => (WrappedComponent:PageSlugsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.SlugsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrSlugs = {
      getServerPage: getServerPageSlugs,
      withPage: withPageSlugs,
      usePage: useSlugs,
    }
export async function getServerPageComments
    (options: Omit<Apollo.QueryOptions<Types.QueryCommentsQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.QueryCommentsQuery>({ ...options, query: Operations.QueryCommentsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useComments = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.QueryCommentsQuery, Types.QueryCommentsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.QueryCommentsDocument, options);
};
export type PageCommentsComp = React.FC<{data?: Types.QueryCommentsQuery, error?: Apollo.ApolloError}>;
export const withPageComments = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.QueryCommentsQuery, Types.QueryCommentsQueryVariables>) => (WrappedComponent:PageCommentsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.QueryCommentsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrComments = {
      getServerPage: getServerPageComments,
      withPage: withPageComments,
      usePage: useComments,
    }


export async function getServerPageShowcaseDetail
    (options: Omit<Apollo.QueryOptions<Types.ShowcaseDetailQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ShowcaseDetailQuery>({ ...options, query: Operations.ShowcaseDetailDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useShowcaseDetail = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcaseDetailQuery, Types.ShowcaseDetailQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ShowcaseDetailDocument, options);
};
export type PageShowcaseDetailComp = React.FC<{data?: Types.ShowcaseDetailQuery, error?: Apollo.ApolloError}>;
export const withPageShowcaseDetail = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcaseDetailQuery, Types.ShowcaseDetailQueryVariables>) => (WrappedComponent:PageShowcaseDetailComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ShowcaseDetailDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrShowcaseDetail = {
      getServerPage: getServerPageShowcaseDetail,
      withPage: withPageShowcaseDetail,
      usePage: useShowcaseDetail,
    }
export async function getServerPageShowcasePreview
    (options: Omit<Apollo.QueryOptions<Types.ShowcasePreviewQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ShowcasePreviewQuery>({ ...options, query: Operations.ShowcasePreviewDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useShowcasePreview = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcasePreviewQuery, Types.ShowcasePreviewQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ShowcasePreviewDocument, options);
};
export type PageShowcasePreviewComp = React.FC<{data?: Types.ShowcasePreviewQuery, error?: Apollo.ApolloError}>;
export const withPageShowcasePreview = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcasePreviewQuery, Types.ShowcasePreviewQueryVariables>) => (WrappedComponent:PageShowcasePreviewComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ShowcasePreviewDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrShowcasePreview = {
      getServerPage: getServerPageShowcasePreview,
      withPage: withPageShowcasePreview,
      usePage: useShowcasePreview,
    }
export async function getServerPageShowcaseRelateds
    (options: Omit<Apollo.QueryOptions<Types.ShowcaseRelatedsQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ShowcaseRelatedsQuery>({ ...options, query: Operations.ShowcaseRelatedsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useShowcaseRelateds = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcaseRelatedsQuery, Types.ShowcaseRelatedsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ShowcaseRelatedsDocument, options);
};
export type PageShowcaseRelatedsComp = React.FC<{data?: Types.ShowcaseRelatedsQuery, error?: Apollo.ApolloError}>;
export const withPageShowcaseRelateds = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcaseRelatedsQuery, Types.ShowcaseRelatedsQueryVariables>) => (WrappedComponent:PageShowcaseRelatedsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ShowcaseRelatedsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrShowcaseRelateds = {
      getServerPage: getServerPageShowcaseRelateds,
      withPage: withPageShowcaseRelateds,
      usePage: useShowcaseRelateds,
    }
export async function getServerPageShowcaseForUpdate
    (options: Omit<Apollo.QueryOptions<Types.ShowcaseForUpdateQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ShowcaseForUpdateQuery>({ ...options, query: Operations.ShowcaseForUpdateDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useShowcaseForUpdate = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcaseForUpdateQuery, Types.ShowcaseForUpdateQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ShowcaseForUpdateDocument, options);
};
export type PageShowcaseForUpdateComp = React.FC<{data?: Types.ShowcaseForUpdateQuery, error?: Apollo.ApolloError}>;
export const withPageShowcaseForUpdate = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ShowcaseForUpdateQuery, Types.ShowcaseForUpdateQueryVariables>) => (WrappedComponent:PageShowcaseForUpdateComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ShowcaseForUpdateDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrShowcaseForUpdate = {
      getServerPage: getServerPageShowcaseForUpdate,
      withPage: withPageShowcaseForUpdate,
      usePage: useShowcaseForUpdate,
    }
export async function getServerPageGetHighlightFeaturesOnShowcase
    (options: Omit<Apollo.QueryOptions<Types.GetHighlightFeaturesOnShowcaseQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetHighlightFeaturesOnShowcaseQuery>({ ...options, query: Operations.GetHighlightFeaturesOnShowcaseDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetHighlightFeaturesOnShowcase = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetHighlightFeaturesOnShowcaseQuery, Types.GetHighlightFeaturesOnShowcaseQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetHighlightFeaturesOnShowcaseDocument, options);
};
export type PageGetHighlightFeaturesOnShowcaseComp = React.FC<{data?: Types.GetHighlightFeaturesOnShowcaseQuery, error?: Apollo.ApolloError}>;
export const withPageGetHighlightFeaturesOnShowcase = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetHighlightFeaturesOnShowcaseQuery, Types.GetHighlightFeaturesOnShowcaseQueryVariables>) => (WrappedComponent:PageGetHighlightFeaturesOnShowcaseComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetHighlightFeaturesOnShowcaseDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetHighlightFeaturesOnShowcase = {
      getServerPage: getServerPageGetHighlightFeaturesOnShowcase,
      withPage: withPageGetHighlightFeaturesOnShowcase,
      usePage: useGetHighlightFeaturesOnShowcase,
    }
export async function getServerPageGetOneHighlightFeature
    (options: Omit<Apollo.QueryOptions<Types.GetOneHighlightFeatureQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetOneHighlightFeatureQuery>({ ...options, query: Operations.GetOneHighlightFeatureDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetOneHighlightFeature = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetOneHighlightFeatureQuery, Types.GetOneHighlightFeatureQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetOneHighlightFeatureDocument, options);
};
export type PageGetOneHighlightFeatureComp = React.FC<{data?: Types.GetOneHighlightFeatureQuery, error?: Apollo.ApolloError}>;
export const withPageGetOneHighlightFeature = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetOneHighlightFeatureQuery, Types.GetOneHighlightFeatureQueryVariables>) => (WrappedComponent:PageGetOneHighlightFeatureComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetOneHighlightFeatureDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetOneHighlightFeature = {
      getServerPage: getServerPageGetOneHighlightFeature,
      withPage: withPageGetOneHighlightFeature,
      usePage: useGetOneHighlightFeature,
    }



export async function getServerPagePreorderCart
    (options: Omit<Apollo.QueryOptions<Types.PreorderCartQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.PreorderCartQuery>({ ...options, query: Operations.PreorderCartDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const usePreorderCart = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.PreorderCartQuery, Types.PreorderCartQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.PreorderCartDocument, options);
};
export type PagePreorderCartComp = React.FC<{data?: Types.PreorderCartQuery, error?: Apollo.ApolloError}>;
export const withPagePreorderCart = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.PreorderCartQuery, Types.PreorderCartQueryVariables>) => (WrappedComponent:PagePreorderCartComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.PreorderCartDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrPreorderCart = {
      getServerPage: getServerPagePreorderCart,
      withPage: withPagePreorderCart,
      usePage: usePreorderCart,
    }
export async function getServerPageCurrentUser
    (options: Omit<Apollo.QueryOptions<Types.CurrentUserQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.CurrentUserQuery>({ ...options, query: Operations.CurrentUserDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useCurrentUser = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.CurrentUserDocument, options);
};
export type PageCurrentUserComp = React.FC<{data?: Types.CurrentUserQuery, error?: Apollo.ApolloError}>;
export const withPageCurrentUser = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>) => (WrappedComponent:PageCurrentUserComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.CurrentUserDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrCurrentUser = {
      getServerPage: getServerPageCurrentUser,
      withPage: withPageCurrentUser,
      usePage: useCurrentUser,
    }

