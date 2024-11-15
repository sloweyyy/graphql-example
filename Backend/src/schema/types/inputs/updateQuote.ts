import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from "graphql";

const updateQuote = new GraphQLInputObjectType({
  name: "UpdateQuote",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    authorId: {
      type: GraphQLInt,
    },
    text: {
      type: GraphQLString,
    },
  },
});

export default updateQuote;
