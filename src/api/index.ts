export * from "./apollo";
import * as apiService from "../service/graphql.service";

export { apiService };

export { default as queryShowcases } from "./queryShowcases.graphql";
export { default as queryShowcasePreview } from "./queryShowcasePreview.graphql";
export { default as queryBanner } from "./queryBanner.graphql";

export { default as mutationCreateMedia } from "./createMedia.graphql";
export { default as mutationDeleteMedia } from "./deleteMedia.graphql";
export { default as mutationCreateShowcase } from "./createShowcase.graphql";

export { default as postAnonymousComment } from "./postAnonymousComment.graphql";
export { default as postAuthorizedComment } from "./postAuthorizedComment.graphql";
export { default as queryComments } from "./queryComments.graphql";
