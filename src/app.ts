import connectionDataBase from './database/config';
import express from 'express';
const app = express();

app.use(express.json());

connectionDataBase();

export default app;