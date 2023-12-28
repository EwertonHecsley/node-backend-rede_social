import connectionDataBase from './database/config';
import express from 'express';
import router from './router';
const app = express();

app.use(express.json());

connectionDataBase();

app.use(router);

export default app;