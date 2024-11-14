import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import pageInfo from '../pageInfo';

export default function(types) {
  return new GraphQLObjectType({
    name: 'QuoteConnection',
    fields: {
      totalCount: {
        description: 'Identifies the total count of items in the connection.',
        type: new GraphQLNonNull(GraphQLInt),
      },
      edges: {
        description: 'A list of edges.',
        type: new GraphQLList(types.QuoteEdge),
      },
      pageInfo: {
        type: new GraphQLNonNull(pageInfo),
      },
    },
  });
}