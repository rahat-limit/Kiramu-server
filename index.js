import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { registerValidation, loginValidation, commentCreateValidation } from './validations.js';

import { handleValidationErrors, checkAuth } from './utils/index.js';
import { CommentController, UserController, AnimeController } from './controllers/index.js';

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['*'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/profile', checkAuth, UserController.getMe);

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.post('/anime/:id/comments', checkAuth, commentCreateValidation, CommentController.postComment);

app.patch('/profile', checkAuth, UserController.updateProfile);


app.listen(1000, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server is running on port 1000');
});
