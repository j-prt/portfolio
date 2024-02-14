import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: transparent;
  backdrop-filter: blur(3px);
  color: var(--color-accent);
  z-index: 999;
`

const HeaderContainer = styled.div`
  display: flex;
  max-width: 80rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  margin: 0 auto;
`

const Logo = styled(Link)`
  font-family: 'Train One';
  font-size: 1.5rem;
`
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  margin: 0;
`

const NavItem = styled.li`
  list-style: none;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 300;
`

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo to='/'>JP</Logo>
        <NavList>
          <NavItem>
            <Link to={'blog'}>Blog</Link>
          </NavItem>
          <NavItem>
            <Link to={'projects'}>Projects</Link>
          </NavItem>
          <NavItem>
            <Link to={'about'}>About</Link>
          </NavItem>
        </NavList>
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
