import express from "express";
import multer from 'multer';
const router = express.Router();
const upload = multer({
  dest: __dirname + '/uploads/', // 이미지 업로드 경로
})

// 게시글 생성
router.post('/', upload.single('photo'), async (req, res) => {

  const { comment, id, password } = req.body;

  console.log(comment, id, password);


  const { fieldname, originalname, encoding, mimetype, destination, filename, path, size } = req.file

  console.log("폼에 정의된 필드명 : ", fieldname);
  console.log("사용자가 업로드한 파일 명 : ", originalname);
  console.log("파일의 엔코딩 타입 : ", encoding);
  console.log("파일의 Mime 타입 : ", mimetype);
  console.log("파일이 저장된 폴더 : ", destination);
  console.log("destinatin에 저장된 파일 명 : ", filename);
  console.log("업로드된 파일의 전체 경로 ", path);
  console.log("파일의 바이트(byte 사이즈)", size);


  res.send("테스트");

});

export default router;