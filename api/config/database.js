// =============================================== Connect to MongoDB ===============================================

const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`Connected to MongoDB...`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB
