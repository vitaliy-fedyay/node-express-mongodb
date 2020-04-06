const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const adminSchema = mongoose.Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

adminSchema.pre('save', async function (next) {
  //change and save a new admin data 
  next()
})

adminSchema.methods.generateAuthToken = async function () {
  // generate an auth token for the admin
  const admin = this
  const token = jwt.sign({ _id: admin._id }, process.env.JWT_KEY)
  await admin.save()
  return token
}

adminSchema.statics.findInCollection = async (email, password) => {
  // search by login
  const admin = await Admin.findOne({ login })
  if (!admin) {
    throw new Error({ error: 'Invalid login' })
  }
  const isPasswordMatch = await bcrypt.compare(password, admin.password)
  if (!isPasswordMatch) {
    throw new Error({ error: 'Invalid login' })
  }
  return admin
}

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin