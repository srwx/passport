import { Wrapper, NavLeft, NavRight, Menu } from "./Navbar.styles"

export default function Navbar() {
  return (
    <Wrapper>
      <NavLeft>
        <Menu to="/">Home</Menu>
        <Menu to="/public">Public page</Menu>
        <Menu to="/private">Private page</Menu>
      </NavLeft>
      <NavRight>
        <Menu to="/signup">Sign Up</Menu>
        <Menu to="/signin">Sign In</Menu>
      </NavRight>
    </Wrapper>
  )
}
