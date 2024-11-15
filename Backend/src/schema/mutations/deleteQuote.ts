import { GraphQLNonNull } from "graphql";
import Context from "../../context/Context";
import deleteQuoteInput from "../types/inputs/deleteQuote";

export default function (types) {
  return {
    type: types.Quote,
    args: {
      input: {
        type: new GraphQLNonNull(deleteQuoteInput),
      },
    },
    resolve: async (_, { input }, context: Context): Promise<any> => {
      return context.repositories.quote.delete(input.id);
    },
  };
}
