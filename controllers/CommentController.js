import dotenv from 'dotenv';
dotenv.config();

import CommentSchema from '../models/Comment.js';

export const postComment = async (req, res) => {
  try {
    const { animeId, username, avatarUrl, comment } = req.body;

    const doc = new CommentSchema({
      animeId,
      username,
      avatarUrl,
      comment
    })

    const newComment = await doc.save();

    const {...commentData} = newComment._doc;

    res.json(commentData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Произошла ошибка при добавлении комментария' });
  }
};

// export const getComment = async (req, res) => {
//   try {
//     console.log(req.userId);
//     const user = await UserSchema.findById(req.userId);

//     if (!user) {
//       return res.status(404).json({
//         message: 'Пользовательн не найден',
//       });
//     }

//     const { passwordHash, ...userData } = user._doc;

//     res.json(userData);
//   } catch (err) {
//     console.log(err);
//     res.status(404).json({
//       message: 'Нет доступа',
//     });
//   }
// };

// export const updateProfile = async (req, res) => {
//   try {
//     const { bio } = req.body; 

//     const user = await UserSchema.findByIdAndUpdate(req.userId, { bio }, { new: true });

//     if (!user) {
//       return res.status(404).json({
//         message: 'Пользователь не найден',
//       });
//     }

//     const { passwordHash, ...userData } = user._doc;

//     res.json(userData);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: 'Произошла ошибка при обновлении профиля',
//     });
//   }
// };