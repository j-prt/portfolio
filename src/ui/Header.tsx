import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem; */
  /* border-bottom: 1px solid #000; */
  background-color: transparent;
  color: var(--color-accent);
`

const HeaderContainer = styled.div`
  display: flex;
  max-width: 70rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
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
