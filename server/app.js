import express from "express";
import path from "path";
import logger from "./middleware/logger.js";
import db from "./mongodb/db.js";
import usersRouter from "./router/users.js";
import authRouter from "./router/auth.js";
import boardsRouter from "./router/boards.js";
const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 5000;
const ROOT = path.join(__dirname, "/public");
const IMG_PATH = `${ROOT}/uploads/`;

db();
app.use(logger());
app.use(express.json());
app.use(express.static(ROOT));
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/boards", boardsRouter);
app.use("/public/:imgname", (req, res) => {
  res.set("Cache-Control", "public, max-age=3600");
  res.sendFile(`${IMG_PATH}${req.params.imgname}`);
});
app.use("*", (_, res) => res.sendFile(`${ROOT}/index.html`));
app.listen(PORT, () => console.log(`app listening at port ${PORT}`));
