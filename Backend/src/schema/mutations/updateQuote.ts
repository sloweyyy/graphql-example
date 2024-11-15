import { GraphQLNonNull } from "graphql";
import Context from "../../context/Context";
import updateQuote from "../types/inputs/updateQuote";

export default function (types) {
  return {
    type: types.Quote,
    args: {
      input: {
        type: new GraphQLNonNull(updateQuote),
      },
    },
    resolve: async (_, { input }, context: Context): Promise<any> => {
      return context.repositories.quote.update(input);
    },
  };
}
