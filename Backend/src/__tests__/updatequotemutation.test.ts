import request from "supertest";
import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import context from "../context";
import schema from "../schema";
import database from "../database";

afterAll(() => {
  return database.destroy();
});

test("updateQuote mutation", async () => {
  const app = express();

  app.use(
    "/graphql",
    createHandler({
      context: context as any,
      schema,
    })
  );

  const query = `
    mutation {
      updateQuote(input: {
        id: 1, // ID của quote cần cập nhật
        text: "Đây là một quote đã được cập nhật."
      }) {
        id
        _id
        text
        author {
          id
          _id
          firstName
          lastName
        }
      }
    }
  `;

  const response = await request(app)
    .post("/graphql")
    .type("json")
    .send(JSON.stringify({ query }));

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.text)).toEqual({
    data: {
      updateQuote: {
        id: expect.any(String),
        _id: expect.any(String),
        text: "Đây là một quote đã được cập nhật.",
        author: {
          id: "YXV0aG9yLTE=",
          _id: "1",
          firstName: "John",
          lastName: "Johnson",
        },
      },
    },
  });
});
