import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default (req, res, next) => {
  const token = req.headers.authorization;

  const jwtSecret = process.env.JWT_SECRET;

  if (token) {
    try {
      console.log(req.userId);
      const decoded = jwt.verify(token, jwtSecret);

      req.userId = decoded._id;
      next();
    } catch (e) {
      return res.status(403).json({
        message: 'Нет доступа',
      });
    }
  } else {
    return res.status(403).json({
      message: 'Нет доступа',
    });
  }
};
