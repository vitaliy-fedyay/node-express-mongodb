const express = require('express')
const Admin = require('../models/Admin')
const router = express.Router()

router.post('/admin-auth', async (req, res) => {
  //Checking admin success and send token
  try {
    const { login, password } = req.body
    const admin = await Admin.findInCollection(login, password)
    if (!admin) {
      return res.status(401).send({ error: 'Login failed!' })
    }
    const token = await admin.generateAuthToken()
    res.send({ token })
  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/create-admin', async (req, res) => {
  //create a new admin
  try {
    const admin = new Admin(req.body)
    await admin.save()
    res.status(201).send('New admin create!')
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router