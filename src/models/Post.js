const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

postSchema.pre('save', async function (next) {
  //change and save a new post 
  next()
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post