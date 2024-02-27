import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    animeId: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Comment', CommentSchema);
