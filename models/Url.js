const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Url', UrlSchema);
