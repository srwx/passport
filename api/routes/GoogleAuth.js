const router = require("express").Router()
const passport = require("passport")

// Login with google account
router.get("/google", passport.authenticate("google", { scope: ["profile"] }))

// Google callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.send(`Login success`) // Login success
  }
)

module.exports = router
