import author from "./types/author";
import quote from "./types/quote";
import authorConnection from "./types/connections/authorConnection";
import quoteConnection from "./types/connections/quoteConnection";
import authorEdge from "./types/edges/authorEdge";
import quoteEdge from "./types/edges/quoteEdge";
import createAuthor from "./mutations/createAuthor";
import deleteAuthor from "./mutations/deleteAuthor";
import createQuote from "./mutations/createQuote";
import updateQuote from "./mutations/updateQuote";
import deleteQuote from "./mutations/deleteQuote";

export default {
  get Author() {
    if (typeof this._authorType === "undefined") {
      this._authorType = author(this);
    }
    return this._authorType;
  },

  get Quote() {
    if (typeof this._quoteType === "undefined") {
      this._quoteType = quote(this);
    }

    return this._quoteType;
  },

  get AuthorConnection() {
    if (typeof this._authorConnectionType === "undefined") {
      this._authorConnectionType = authorConnection(this);
    }
    return this._authorConnectionType;
  },

  get QuoteConnection() {
    if (typeof this._quoteConnectionType === "undefined") {
      this._quoteConnectionType = quoteConnection(this);
    }
    return this._quoteConnectionType;
  },

  get AuthorEdge() {
    if (typeof this._authorEdgeType === "undefined") {
      this._authorEdgeType = authorEdge(this);
    }
    return this._authorEdgeType;
  },

  get QuoteEdge() {
    if (typeof this._quoteEdgeType === "undefined") {
      this._quoteEdgeType = quoteEdge(this);
    }
    return this._quoteEdgeType;
  },

  get CreateAuthor() {
    if (typeof this._createAuthorMutation === "undefined") {
      this._createAuthorMutation = createAuthor(this);
    }
    return this._createAuthorMutation;
  },

  get DeleteAuthor() {
    if (typeof this._deleteAuthorMutation === "undefined") {
      this._deleteAuthorMutation = deleteAuthor(this);
    }
    return this._deleteAuthorMutation;
  },

  get CreateQuote() {
    if (typeof this._createQuoteMutation === "undefined") {
      this._createQuoteMutation = createQuote(this);
    }
    return this._createQuoteMutation;
  },

  get UpdateQuote() {
    if (typeof this._updateQuoteMutation === "undefined") {
      this._updateQuoteMutation = updateQuote(this);
    }
    return this._updateQuoteMutation;
  },

  get DeleteQuote() {
    if (typeof this._deleteQuoteMutation === "undefined") {
      this._deleteQuoteMutation = deleteQuote(this);
    }
    return this._deleteQuoteMutation;
  },
};
