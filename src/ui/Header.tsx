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

const Logo = styled.div`
  color: var(--color-accent);
  font-family: 'Train One';
  font-size: 1.5rem;
`
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  /* padding: 2rem 4rem; */
  margin: 0;
  /* background-color: #fff; */
`

const NavItem = styled.li`
  list-style: none;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 300;
  color: var(--color-accent);
`

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo>JP</Logo>
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
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
