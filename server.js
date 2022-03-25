import express from 'express';
import { port } from './config/environment.js';
import router from './config/router.js';
import mongoSanitize from 'express-mongo-sanitize';
import { connectToDb } from './db/helpers.js';

const app = express();
app.use(express.json());
app.use(mongoSanitize());
app.use(
  mongoSanitize({
    replaceWith: '_'
  })
);
app.use('/api', router);

async function runServer() {
  await connectToDb;
  app.listen(port, () => console.log(`App is listening on port ${port}`));
}

runServer();
