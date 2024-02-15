import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = (
    req.headers.authorization ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNjN2I4NjlmMGY4YjQ0N2QwY2I1NDAiLCJpYXQiOjE3MDc4OTk4MDQsImV4cCI6MTcxMDQ5MTgwNH0.7EmVKuDqqSIcDvEzVktAnkJZq7bOLYXluElBCYSZ5DI'
  ).replace(/Bearer\s?/, '');

  if (token) {
    try {
      console.log(req.userId);
      const decoded = jwt.verify(token, 'secret123');

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
