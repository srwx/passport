import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
  width: 100%;
  height: 65px;
  background-color: #d3d3d3;
  display: flex;
  align-items: center;
`

export const NavLeft = styled.div`
  flex: 80%;
`

export const NavRight = styled.div`
  flex: 20%;
`

export const Menu = styled(Link)`
  text-decoration: none;
  margin: 0 30px;
`
