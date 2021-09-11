import { Redirect } from "react-router-dom"
// Styles
import { Logo, Wrapper, Text } from "./SignupMenu.styles"

export default function SignupMenu(props) {
  return (
    <Wrapper onClick={() => (window.location = props.url)}>
      <Logo src={props.logo} alt="logo-signup-type" />
      <Text>{props.text}</Text>
    </Wrapper>
  )
}
