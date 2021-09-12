import express from 'express';
import Users from "../mongodb/models/Users";

const router = express.Router();

router.post("/login", async (req, res) => {

  const { id, password } = req.body;

  const user = await Users.findOne({ id, password });
  console.log(user);

  if (user !== null) {
    res.status(200).json({ message: "성공" })
  } else if (user === null) {
    res.status(401).json({ message: "유효한 값이 아닙니다." });
  }

});
// // res.writeHead(503, { 'Content-type': 'application/json; charset=euc-kr' });
// res.write(JSON.stringify({ message: "실패" }))
// res.end();

export default router;