const mongoose = require("mongoose")

const userGoogleSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
})

module.exports = mongoose.model("UserGoogle", userGoogleSchema)
