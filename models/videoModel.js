const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: [true, 'A video must have a topic'],
    trim: true,
  },
  title: {
    type: String,
    required: [true, 'A video must have a title'],
    unique: true,
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'A video must have an author'],
    trim: true,
  },
  // body: {
  //   type: String,
  // },
  url: {
    type: String,
    required: [true, 'A video must have an url'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'A video must have an descripion'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tags: {
    type: [String],
    default: ['tag1', 'tag2'],
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model('Video', videoSchema);
