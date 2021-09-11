import express from 'express';
import path from 'path';
import logger from './middleware/logger';
import db from './mongodb/db';
import usersRouter from './router/users';
import authRouter from './router/auth';

const app = express();
const PORT = process.env.PORT || 5000;
const root = path.join(__dirname, "/html");

db();
app.use(logger());
app.use(express.json());
app.use(express.static(root));
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
// app.use("/", (_, res) => res.sendFile('index.html', { root }));
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
