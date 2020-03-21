const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  author: {
    type: String
  },
  date: {
    type: Date
  }
})


const Post = mongoose.model('Post', postSchema)

module.exports = Post