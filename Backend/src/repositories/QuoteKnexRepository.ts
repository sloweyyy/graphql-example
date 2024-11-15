import database from "../database";
import logger from "../logger";

export default class QuoteKnexRepository implements QuoteRepository {
  private quotesList: Quote[] = [];

  public async get(id: number): Promise<Quote> {
    logger.debug(`${this.constructor.name}.get`, { id });

    return database.select().from("quote").where("id", id).first();
  }

  public async find(params: QuoteRepository.FindParameters): Promise<Quote[]> {
    logger.debug(`${this.constructor.name}.find`, { params });

    const { first, after, authorId, query } = params;

    return database
      .select()
      .from("quote")
      .modify((queryBuilder) => {
        if (typeof after !== "undefined" && after !== null) {
          queryBuilder.offset(after);
        }

        if (typeof authorId !== "undefined" && authorId !== null) {
          queryBuilder.where("authorId", authorId);
        }

        if (typeof query !== "undefined" && query !== null) {
          queryBuilder.where("text", "like", `%${query}%`);
        }
      })
      .limit(first);
  }

  public async count(params: QuoteRepository.CountParameters): Promise<number> {
    logger.debug(`${this.constructor.name}.count`, { params });

    const { authorId, query } = params;

    return database
      .count({ count: "*" })
      .from("quote")
      .modify((queryBuilder) => {
        if (typeof authorId !== "undefined" && authorId !== null) {
          queryBuilder.where("authorId", authorId);
        }

        if (typeof query !== "undefined" && query !== null) {
          queryBuilder.where("text", "like", `%${query}%`);
        }
      })
      .first()
      .then((result) => result.count);
  }

  public async create(params: {
    authorId: number;
    text: string;
  }): Promise<Quote> {
    logger.debug(`${this.constructor.name}.create`, { params });

    const [id] = await database("quote").insert({
      authorId: params.authorId,
      text: params.text,
      createdAt: new Date(),
    });

    return this.get(id);
  }

  public async update(params: {
    id: number;
    authorId?: number;
    text?: string;
  }): Promise<Quote> {
    logger.debug(`${this.constructor.name}.update`, { params });

    await database("quote").where("id", params.id).update({
      authorId: params.authorId,
      text: params.text,
      updatedAt: new Date(),
    });

    return this.get(params.id);
  }

  public async delete(id: number): Promise<Quote> {
    logger.debug(`${this.constructor.name}.delete`, { id });

    const quote = await this.get(id);

    await database("quote").where("id", id).delete();

    return quote;
  }
}
