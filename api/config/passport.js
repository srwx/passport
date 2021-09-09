const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require("mongoose")
const UserGoogle = require("../models/UserGoogle")

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log(`--------------------------------------`)
        console.log(profile)
      }
    )
  )

  passport.serializeUser((user, done) => done(null, user.id))

  passport.deserializeUser((id, done) => {
    UserGoogle.findById(id, (err, user) => done(err, user))
  })
}
