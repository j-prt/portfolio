import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #000;
  color: transparent;
`
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
`

const NavItem = styled.li`
  list-style: none;
`

function Header() {
  return (
    <StyledHeader>
      <div>LOGO</div>
      <NavList>
        <NavItem>
          <Link to={'blog'}>Blog</Link>
        </NavItem>
        <NavItem>
          <Link to={'projects'}>Projects</Link>
        </NavItem>
        <NavItem>
          <Link to={'contact'}>Contact</Link>
        </NavItem>
      </NavList>
    </StyledHeader>
  )
}

export default Header
