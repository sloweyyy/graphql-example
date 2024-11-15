import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

const newQuote = new GraphQLInputObjectType({
  name: "NewQuote",
  fields: {
    authorId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

export default newQuote;
