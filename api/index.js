const express = require("express")
const connectDB = require("./config/database")
const passport = require("passport")
const session = require("express-session")
require("dotenv").config()

// Route
const GoogleAuthRoute = require("./routes/GoogleAuth")

const app = express()

// Connect to MongoDB
connectDB()

// Passport config
require("./config/passport")(passport)

// Sessions (***Always above passport middleware***)
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Route middleware
app.use("/api/auth", GoogleAuthRoute)

app.listen(3001, () => console.log(`Server started at port 3001...`))
