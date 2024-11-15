import express from 'express';
import { createHandler, } from 'graphql-http/lib/use/express';
import responseTime from './middlewares/reponseTime';
import cors from './middlewares/cors';
import context from './context';
import schema from './schema';
import playgroundMiddleware from 'graphql-playground-middleware-express'

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseTime);
app.use(cors);

app.all('/graphql', createHandler({
  schema,
  context: context as any,
}));

app.get('/playground', playgroundMiddleware({ endpoint: '/graphql' })); 


export default app;

