import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import Context from '../../context/Context';
import { formatDate } from '../../utils/functions';

export default function(types) {
  return new GraphQLObjectType({
    name: 'Quote',
    description: 'A quote from an author',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'Globally unique ID of the quote',
        resolve: (obj: Quote): string => {
          return Buffer.from(`quote-${obj.id}`).toString('base64');
        },
      },
      _id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'Database ID of the quote',
        resolve: (obj: Quote): number => {
          return obj.id;
        },
      },
      text: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The text of the quote',
        resolve: (obj: Quote): string => {
          return obj.text;
        },
      },
      author: {
        type: types.Author,
        description: 'Author of the quote',
        resolve: (obj: Quote, args, context: Context): Promise<Author> => {
          return context.loaders.author.load(obj.authorId);
        },
      },
      createdAt: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The date when the quote was created',
        resolve: (obj: Quote): string => {
          return formatDate(new Date(obj.createdAt));
        },
      },
    }),
  });
}