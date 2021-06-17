const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: [true, 'An article must have a topic'],
    trim: true,
  },
  title: {
    type: String,
    required: [true, 'An article must have a title'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'An article must have an descripion'],
    trim: true,
  },
  img: {
    type: String,
    required: [true, 'A source must have an image'],
    trim: true,
  },
  url: {
    type: String,
    required: [true, 'A source must have an url'],
    trim: true,
  },
});
module.exports = mongoose.model('Source', sourceSchema);
