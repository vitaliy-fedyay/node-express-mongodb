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

postSchema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const post = this
  next()
})


const Post = mongoose.model('Post', postSchema)

module.exports = Post