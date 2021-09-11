import SignupMenu from "../components/SignupMenu"

export default function Signup() {
  return (
    <>
      <SignupMenu
        logo="https://e7.pngegg.com/pngimages/249/19/png-clipart-google-logo-g-suite-google-guava-google-plus-company-text.png"
        text="Sign up with Google"
        url="http://localhost:3001/api/auth/google"
      />
      <SignupMenu
        logo={`https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png`}
        text="Sign up with Facebook"
      />
    </>
  )
}
