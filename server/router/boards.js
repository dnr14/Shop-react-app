import express from "express";
import multer from "multer";
import Indexes from "../mongodb/models/Indexes";
import Boards from "../mongodb/models/Boards";
import fs from "fs";
import path from "path";

const STATIC_PATH = "./public/uploads/";

const limits = {
  fieldNameSize: 200, // 필드명 사이즈 최대값 (기본값 100bytes)
  filedSize: 1024 * 1024, // 필드 사이즈 값 설정 (기본값 1MB)
  fields: 5, // 파일 형식이 아닌 필드의 최대 개수 (기본 값 무제한)
  fileSize: 16777216, //multipart 형식 폼에서 최대 파일 사이즈(bytes) "16MB 설정" (기본 값 무제한)
  files: 2, //multipart 형식 폼에서 파일 필드 최대 개수 (기본 값 무제한)
};

const fileFilter = (req, file, callback) => {
  const typeArray = file.mimetype.split("/");
  const fileType = typeArray[1]; // 이미지 확장자 추출

  //이미지 확장자 구분 검사
  if (fileType === "jpg" || fileType === "jpeg" || fileType === "png") {
    callback(null, true);
  } else {
    return callback({ message: "*.jpg, *.jpeg, *.png 파일만 업로드가 가능합니다." }, false);
  }
};

const router = express.Router();
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, STATIC_PATH);
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
  limits,
  fileFilter,
}).single("photo");

// 게시글 생성
router.post("/", (req, res) => {
  upload(req, res, err => {
    if (err) {
      res.status(503).json({ message: err.message });
      return;
    }
    const { comment, id, password, gender } = req.body;

    // console.log("폼에 정의된 필드명 : ", fieldname);
    // console.log("사용자가 업로드한 파일 명 : ", originalname);
    // console.log("파일의 엔코딩 타입 : ", encoding);
    // console.log("파일의 Mime 타입 : ", mimetype);
    // console.log("파일이 저장된 폴더 : ", destination);
    // console.log("destinatin에 저장된 파일 명 : ", filename);
    // console.log("업로드된 파일의 전체 경로 ", path);
    // console.log("파일의 바이트(byte 사이즈)", size);

    if (req.file === undefined || req.file === "undefined") {
      (async () => {
        try {
          const indexes = await Indexes.findOne().where("name").equals("boards");
          if (indexes === null) {
            throw new Error("인덱스가 없습니다.");
          }

          const boards = new Boards({
            boardsId: indexes.currentIndex,
            createId: id,
            password: password,
            createAt: new Date().toLocaleString("ko-KR"),
            body: comment,
            fileName: ``,
            format: ``,
            originalFileName: ``,
            gender: gender,
          });

          const result = await boards.save();
          res.status(200).json({ result });

          await Indexes.updateOne(
            { name: "boards" },
            {
              $set: { currentIndex: indexes.currentIndex + 1 },
            },
          );
        } catch (error) {
          res.status(400).json({ message: error });
        }
      })();
    } else {
      // const { fieldname, originalname, encoding, mimetype, destination, filename, path, size } = req.file;
      const { originalname, mimetype, filename } = req.file;

      (async () => {
        try {
          const indexes = await Indexes.findOne().where("name").equals("boards");
          if (indexes === null) {
            throw new Error("인덱스가 없습니다.");
          }

          const boards = new Boards({
            boardsId: indexes.currentIndex,
            createId: id,
            password: password,
            createAt: new Date().toLocaleString(),
            body: comment,
            fileName: `${filename}`,
            format: `${mimetype.split("/")[1]}`,
            originalFileName: `${originalname}`,
            gender: gender,
          });

          const result = await boards.save();

          await Indexes.updateOne(
            { name: "boards" },
            {
              $set: { currentIndex: indexes.currentIndex + 1 },
            },
          );

          res.status(200).json({ result });
        } catch (error) {
          console.log(error);
          fs.unlink(`${STATIC_PATH}${filename}`, err => {
            if (err === null) {
              res.status(503).json({ message: " 서버에서 오류" });
            } else {
              res.status(503).json({ message: " 파일 삭제에서 오류" });
            }
          });
        }
      })();
    }
  });
});

// 게시글 가져오기
router.get("/", async (req, res) => {
  try {
    const boards = await Boards.find().sort({ boardsId: "desc" }).limit(5).select("-password -_id -__v");

    res.json({ boards });
  } catch (error) {
    res.json({ error });
  }
});

// 추가로 가져오기
router.get("/:boardsId", async (req, res) => {
  const boardsId = req.params.boardsId;
  console.log(boardsId);
  try {
    const boards = await Boards.find()
      .where("boardsId")
      .lt(boardsId)
      .sort({ boardsId: "desc" })
      .limit(5)
      .select("-password -_id -__v");

    res.json({ boards });
  } catch (error) {
    console.log(error);
  }
});

// 게시판 삭제
router.delete("/:boardsId", async (req, res) => {
  const boardsId = req.params.boardsId;
  const pwd = req.body.password;

  try {
    const boards = await Boards.findOne().where("boardsId").equals(boardsId);

    if (!boards.authenticate(pwd)) {
      const e = new Error("비밀번호가 틀립니다.");
      e.status = 403;
      throw e;
    }

    if (boards === null) {
      const e = new Error("이미 삭제 된 게시판입니다.");
      e.status = 404;
      e.redirect = true;
      throw e;
    }
    const result = await Boards.findOneAndRemove().where("boardsId").equals(boardsId).select("-_id -password -__v");

    const { fileName } = result;
    if (fileName) {
      fs.unlink(`${STATIC_PATH}${fileName}`, err =>
        err === null ? res.json({ board: result }) : res.status(503).json({ message: " 파일 삭제에서 오류" }),
      );
    } else {
      res.json({ board: result });
    }
  } catch (error) {
    const { status } = error;
    if (error.redirect) {
      return res.redirect("/");
    }
    if (status) {
      res.status(status).json({ message: error.message });
    } else {
      res.json({ message: error.message });
    }
  }
});

// 게시판 수정
router.put("/:boardsId", async (req, res) => {
  try {
    const { password } = req.body;
    const { body } = req.body;
    const { boardsId } = req.params;
    console.log(boardsId, body, password);
    const boards = await Boards.findOne().where("boardsId").equals(boardsId);

    if (boards === null) {
      const error = new Error("없는 게시물입니다.");
      error.status = 400;
      throw error;
    }

    if (!boards.authenticate(password)) {
      const error = new Error("비밀번호가 틀립니다.");
      error.status = 403;
      throw error;
    }
    const result = await Boards.findOneAndUpdate(
      { boardsId },
      {
        $set: { body },
      },
      { new: true },
    ).select("-_id -__v -password");

    res.json({ board: result });
  } catch (error) {
    console.log(error);
    const { status } = error;
    if (status) {
      return res.status(status).json({ message: error.message });
    }
    res.json({ error });
  }
});

export default router;
