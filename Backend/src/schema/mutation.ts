import { GraphQLObjectType } from "graphql";
import types from "./types";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createAuthor: types.CreateAuthor,
    deleteAuthor: types.DeleteAuthor,
    createQuote: types.CreateQuote,
    deleteQuote: types.DeleteQuote,
    updateQuote: types.UpdateQuote,
  }),
});

export default mutation;
