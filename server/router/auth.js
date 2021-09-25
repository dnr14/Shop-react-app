import express from 'express';
import Users from "../mongodb/models/Users";
import verifyToken from "../middleware/verifyToken";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt-nodejs';
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

    if (error.status) {
      res.status(`${error.status}`).json({
        success: false,
        access_token: null,
        error: error.message,
      });
    } else {
      res.json({ error: "서버 에러" });
    }

  }
});

router.get('/search/:email', async (req, res) => {

  const { email } = req.params;

  try {
    if (!String(email).trim()) {
      console.log("데이터가없다")
      const error = new Error("잘못된 요청입니다.");
      error.status = 400;
      throw error;
    }

    const user = await Users
      .findOne()
      .where('email')
      .equals(email)
      .select("-_id")

    if (!user) {
      const error = new Error("없는 이메일입니다.");
      error.status = 409;
      throw error;
    }

    res.json({
      success: true,
      user
    })
  } catch (error) {
    const { status } = error;

    if (status) {
      res.status(status).send({ message: error.message });
    } else {
      res.json({ message: error });
    }
  }



});
router.post('/search', async (req, res) => {
  try {
    const { id, email } = req.body;
    if (!id || !email) {
      const error = new Error("잘못된 요청입니다.");
      error.status = 400;
      throw error;
    }

    const user = await Users.findOne()
      .where("id")
      .equals(id)
      .where('email')
      .equals(email).
      select("-_id")


    if (!user) {
      const error = new Error("없는 정보 입니다.");
      error.status = 409;
      throw error;
    }


    res.json({ success: true, user });

  } catch (error) {
    const { status } = error;
    if (status) {
      res.status(status).json({ message: error.message });
    } else {
      res.json({ message: error.message });
    }
  }


});
router.put('/search', async (req, res) => {
  try {
    const { id, email, newPassword } = req.body;
    const reuslt = await Users.updateOne({ id, email }, {
      "$set": { "password": bcrypt.hashSync(newPassword) }
    })

    if (reuslt.matchedCount === 0) {
      const error = new Error("비밀번호 변경에 실패했습니다.");
      error.status = 409;
      throw error;
    }
    res.json({ success: true, message: "비밀번호 변경에 성공했습니다." });

  } catch (error) {

    res.status(error.status).send(error.message);

  }
});

//유효한 토큰인지 검증 해 준다.
router.get('/verify', verifyToken, (req, res) => {
  res.json(req.decoded);
});





// // res.writeHead(503, { 'Content-type': 'application/json; charset=euc-kr' });
// res.write(JSON.stringify({ message: "실패" }))
// res.end();

export default router;