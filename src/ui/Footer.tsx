import styled from 'styled-components'
import IconButton from './IconButton'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
  padding: 2rem 5rem;
  gap: 1.5rem;
  background-color: #777;
`

const FooterText = styled.p`
  font-size: 0.8rem;
`

const ExternalMedia = styled.div`
  display: flex;
  gap: 1rem;
`

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Footer() {
  return (
    <StyledFooter>
      <Copyright>
        <FooterText>&copy; Joseph Peart {new Date().getFullYear()}</FooterText>
        {/* <FooterText>{new Date().getFullYear()}</FooterText> */}
      </Copyright>
      <ExternalMedia>
        <IconButton portal='github' />
        <IconButton portal='linkedin' />
      </ExternalMedia>
    </StyledFooter>
  )
}

export default Footer
