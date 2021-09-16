import jwt from 'jsonwebtoken';

export default function verifyToken(req, res, next) {
  try {
    const token = req.headers['authorization'];

    if (!token) {
      res.redirect("/");
      // return res.status(403).json({
      //   success: false,
      //   message: '토큰이 없습니다.'
      // });
    }
    // 요청 헤더에 저장된 토큰(req.headers.authorization)과 비밀키를 사용하여 토큰 반환
    req.decoded = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  }

  // 인증 실패
  catch (error) {
    // 유효기간이 초과된 경우
    if (error.name === 'TokenExpiredError') {
      return res.status(419).json({
        success: false,
        message: '토큰이 만료되었습니다.'
      });
    }

    // 토큰의 비밀키가 일치하지 않는 경우
    return res.status(401).json({
      success: false,
      message: '유효하지 않은 토큰입니다.'
    });
  }
}