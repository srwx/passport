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
      // Call this function after user select gmail account
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstname: profile.name.givenName,
          lastname: profile.name.familyName,
          image: profile.photos[0].value,
        }
        try {
          let user = await UserGoogle.findOne({ googleId: newUser.googleId })

          if (user) {
            // this google account already registered
            done(null, user)
          } else {
            // this google account not register
            user = await UserGoogle.create(newUser)
            done(null, user)
          }
        } catch (err) {
          console.log(err)
        }
      }
    )
  )

  passport.serializeUser((user, done) => done(null, user.id))

  passport.deserializeUser((id, done) => {
    UserGoogle.findById(id, (err, user) => done(err, user))
  })
}
