import express from "express";
import verifyToken from "../middleware/verifyToken";
import Users from "../mongodb/models/Users";
import bcrypt from 'bcrypt-nodejs';

const l = console.log;

const router = express.Router();

router.post('/', async (req, res) => {
  const { id, email, password } = req.body;
  const user = new Users({
    id,
    email,
    password
  });

  try {

    // doc이 없다면 null 반환
    const userID = await Users.findOne()
      .where('id')
      .equals(id)
      .select('-_id id');

    if (userID) {
      const error = new Error("이미 존재하는 ID입니다.");
      error.status = 409;
      throw error;
    }

    if (!userID) {
      const returned = await user.save();
      res.status(200).json({ message: "memberShip create success" });
      log(returned);
    }


  } catch (error) {
    const status = error.status === 409 ? error.status : 503;
    res.status(`${status}`).json({ message: `${error}` });
  }
});

router.get("/me", verifyToken, (req, res) => {
  res.json(req.decoded);
});

// update
router.put("/", verifyToken, async (req, res) => {

  const { id, currentPassword, newPassword } = req.body;

  const user = await Users.findOne({ id }).select({ password: 1 });

  try {
    if (!user.authenticate(currentPassword)) {
      const error = new Error("비밀번호가 다릅니다.");
      error.status = 409;
      throw error;
    }
    await Users.updateOne({ id }, {
      "$set": { "password": bcrypt.hashSync(newPassword) }
    });
    res.json({ success: "비밀번호가 변경되었습니다." });
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
});

//delete
router.delete("/:id", verifyToken, async (req, res) => {

  l(req.params.id)

  try {
    const { id } = req.params;
    if (id === null || id === undefined) {
      const error = new Error("입력이 잘 못 되었습니다.");
      error.status = 409;
      throw error;
    }
    const r = await Users.deleteOne({ id });
    if (r.deletedCount === 1) {
      res.json({ message: "아이디가 삭제 되었습니다." });
      return;
    }
  } catch (error) {
    if (error.status) {
      res.status(error.status).json({ message: error.message })
      return;
    }
    res.json({ message: "서버 에러" });
  }
});


const log = (doc) => {
  let message = "";
  const o = doc[`_doc`];
  const keys = Object.keys(o);
  keys.forEach((key, idx) => {
    idx !== keys.length - 1
      ? message += ` ${key} = ${o[key]}, `
      : message += ` ${key} = ${o[key]}`;
  });
  console.log(message);
}


module.exports = router;