const User = require('../model/User.model')
const Bcrypt = require('bcryptjs')
const blizzardApi = require('./blizzardApi/blizzardApi')
const getUserFromDb = async (username : String) => {
  return User.findOne({ username: username })
}

const createUserInDb = async (user : any) => {
  const newUser = new User(user)
  await newUser.save()
  return user
}

const checkIfAlreadyExist = async (username : String, email : String) => {
  const user = await User.findOne({ $or: [{ email: email }, { username: username }] })
  if (user) {
    console.log(user.email + ' ' + user.username)
    if (user.email === email || user.username === username) {
      return true
    }
  }
  return false
}

const getMount = async() => {
  let api = new blizzardApi()
  await api.init("d51577f11551459c898710354b0a0ecd", "KQLcSCQeESolbb1ouyRAN9sCtTQqOGLG")
  return await api.wowGameData.getMount(85)
}

const checkAuth = async (email : String, password : String) => {
  const user = await User.findOne({
    $or: [
      { email: email },
      { password: Bcrypt.hashSync(password, 10) }
    ]
  })
  if (user) {
    console.log(user.email + ' ' + user.username)
    if (user.email === email || user.username === email) {
      return user
    }
  }
  return null
}

module.exports = { getMount, getUserFromDb, createUserInDb, checkIfAlreadyExist, checkAuth }
