import { GraphQLNonNull } from "graphql";
import Context from "../../context/Context";
import newQuote from "../types/inputs/newQuote";

export default function (types) {
  return {
    type: types.Quote,
    args: {
      input: {
        type: new GraphQLNonNull(newQuote),
      },
    },
    resolve: async (_, { input }, context: Context): Promise<any> => {
      return context.repositories.quote.create(input);
    },
  };
}
