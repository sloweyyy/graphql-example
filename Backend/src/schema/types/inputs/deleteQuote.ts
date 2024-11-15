import { GraphQLInputObjectType, GraphQLNonNull, GraphQLInt } from "graphql";

const deleteQuoteInput = new GraphQLInputObjectType({
  name: "deleteQuoteInput",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
});

export default deleteQuoteInput;
