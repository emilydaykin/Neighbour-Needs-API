import express from 'express';
import cors from 'cors';
import { port } from './config/environment.js';
import router from './config/router.js';
import mongoSanitize from 'express-mongo-sanitize';
import { connectToDb } from './db/helpers.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
app.use(cors()); // we're telling it: "this is an open api"
app.use(express.json());
app.use(mongoSanitize());
app.use(
  mongoSanitize({
    replaceWith: '_'
  })
);
app.use('/api', router);

app.use(errorHandler);

async function runServer() {
  await connectToDb();
  app.listen(port, () => console.log(`Backend API is listening on port ${port}`));
}

runServer();
