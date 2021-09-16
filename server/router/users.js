import express from "express";
import verifyToken from "../middleware/verifyToken";
import Users from "../mongodb/models/Users";

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

router.get("/info", verifyToken, (req, res) => {
  res.json(req.decoded);
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