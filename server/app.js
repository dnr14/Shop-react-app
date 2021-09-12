import express from 'express';
import path from 'path';
import logger from './middleware/logger';
import db from './mongodb/db';
import usersRouter from './router/users';
import authRouter from './router/auth';

const app = express();
const PORT = process.env.PORT || 5000;
const ROOT = path.join(__dirname, "/public");

db();
app.use(logger());
app.use(express.json());
app.use(express.static(ROOT));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token');
  next();
});

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/", (_, res) => res.sendFile(`${ROOT}/index.html`));
app.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`));
