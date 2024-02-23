import styled from 'styled-components'
import IconButton from './IconButton'
import { device } from '../styles/media'

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
  width: 100%;
  padding: 2rem 2rem;
  gap: 1.5rem;
  background-color: transparent;

  @media ${device.sm} {
    font-size: 3.2rem;
    padding: 2rem 4rem;
  }
`

const FooterText = styled.p`
  font-size: 0.8rem;
`

const ExternalMedia = styled.div`
  display: flex;
  color: var(--color-accent-dark);
  gap: 1rem;
`

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-accent-dark);
`

function Footer() {
  return (
    <StyledFooter>
      <Copyright>
        <FooterText>&copy; Joseph Peart {new Date().getFullYear()}</FooterText>
      </Copyright>
      <ExternalMedia>
        <IconButton portal='github' />
        <IconButton portal='linkedin' />
      </ExternalMedia>
    </StyledFooter>
  )
}

export default Footer
