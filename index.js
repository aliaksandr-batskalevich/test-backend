import express from 'express';
import dotenv from 'dotenv';
import testRouter from './roters/test.router.js';
import logMiddleware from './middlewares/log.middleware.js';
import errorsMiddleware from './middlewares/errors.middleware.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.use(logMiddleware);
app.use('/test', testRouter);
app.use(errorsMiddleware);

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));