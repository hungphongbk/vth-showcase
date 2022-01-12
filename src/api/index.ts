export * from "./apollo";
import * as apiService from "../service/graphql.service";

export { apiService };

export { default as mutationCreateShowcase } from "./createShowcase.graphql";

export { default as postAnonymousComment } from "./postAnonymousComment.graphql";
export { default as postAuthorizedComment } from "./postAuthorizedComment.graphql";
