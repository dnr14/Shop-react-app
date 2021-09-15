import express from 'express';
import Users from "../mongodb/models/Users";
import verifyToken from "../middleware/verifyToken";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

const resultJson = {
  success: false,
  error: {
    message: null
  },
  token: null
}

router.post("/login", async (req, res) => {

  const { id, password } = req.body;
  let isError = false;
  const user = await Users.findOne({ id }).select({ password: 1 });

  if (id === undefined || id === null) {
    resultJson.error = {
      meassge: "잘못된 값입니다."
    }
    res.status(403).json(resultJson);
  }
  if (password === undefined || password === null) {
    resultJson.error = {
      meassge: "잘못된 값입니다."
    }
    res.status(403).json(resultJson);
  }


  //아이디가 틀렸을때
  if (!user) {
    isError = true;
    resultJson.error.message = {
      id: "아이디가 틀립니다.",
      password: "비밀번호가 틀립니다."
    }
  }

  if (user) {
    // 비밀번호가 틀렸을때
    if (!user.authenticate(password)) {
      isError = true;
      resultJson.error.message = {
        ...resultJson.error.message,
        password: "비밀번호가 틀립니다."
      }
    }
  }


  if (isError) {
    res.status(403).json(resultJson);
  }

  if (!isError) {

    const token = jwt.sign({
      id,
    }, process.env.JWT_SECRET, {
      expiresIn: '1m', // 1분
      issuer: '토큰발급자',
    });

    if (user) {
      res.status(200).json({ ...resultJson, success: true, token });
    }
  }
  res.send("없어")

});

router.get('/verify', verifyToken, (req, res) => {
  res.json(req.decoded);
});


// // res.writeHead(503, { 'Content-type': 'application/json; charset=euc-kr' });
// res.write(JSON.stringify({ message: "실패" }))
// res.end();

export default router;