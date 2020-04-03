const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

router.post('/create', async (req, res) => {
  //create a new post
  try {
    const post = new Post(req.body)
    await post.save()
    res.status(201).send('New post create!')
  } catch (error) {
    res.status(400).send(error)
  }
})

router.get('/admin-posts', async (req, res) => {
  //get all posts
  try {
    const posts = await Post.find()
    res.status(200).send(posts)
  }
  catch (error) {
    res.status(400).send(error)
  }
})

router.post('/admin-post', async (req, res) => {
  //get post
  try {
    const { _id } = req.body
    const post = await Post.findById(_id)
    res.status(200).send(post)
  }
  catch (error) {
    res.status(400).send(error)
  }
})

router.post('/admin-post-delete', async (req, res) => {
  //delete post
  try {
    const { _id } = req.body
    const post = await Post.findByIdAndRemove(_id)
    res.status(200).send(post)
  }
  catch (error) {
    res.status(400).send(error)
  }
})

router.post('/admin-post-update', async (req, res) => {
  //update post
  const { _id, title, content, author } = req.body
  await Post.findByIdAndUpdate({ _id }, { title, content, author }, { new: true })
    .then(post => {
      res.status(200).send(post)
    })
    .catch(error => res.status(400).send(error)
    )
})

module.exports = router