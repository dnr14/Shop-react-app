import express from 'express';
import Users from "../mongodb/models/Users";
import verifyToken from "../middleware/verifyToken";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const JWT_TIME = "30m";



router.post("/login", async (req, res) => {
  const { id, password } = req.body;
  const user = await Users.findOne({ id }).select({ password: 1 });

  try {

    if (id === undefined || id === null || password === undefined || password === null) {
      const error = new Error("잘못된 값입니다.");
      error.status = 403;
      throw error;
    }

    //아이디가 틀렸을때
    if (!user) {
      const error = new Error("없는 아이디 입니다.");
      error.status = 403;
      throw error;
    } else {
      if (!user.authenticate(password)) {
        const error = new Error("비밀번호가 틀립니다.");
        error.status = 403;
        throw error;
      }
    }

    const payload = {
      userInfo: {
        id: user.id,
        email: user.email
      }
    }

    const tokenOption = {
      expiresIn: JWT_TIME, // 10분
      issuer: 'localhost',
    }

    const access_token = jwt.sign(payload, process.env.JWT_SECRET, tokenOption);
    res.status(200).json({ success: true, error: null, access_token });

  } catch (error) {
    res.status(`${error.status}`).json({
      success: false,
      access_token: null,
      error: error.message,
    });
  }

});

router.get('/verify', verifyToken, (req, res) => {
  res.json(req.decoded);
});





// // res.writeHead(503, { 'Content-type': 'application/json; charset=euc-kr' });
// res.write(JSON.stringify({ message: "실패" }))
// res.end();

export default router;