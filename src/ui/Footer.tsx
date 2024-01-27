import styled from 'styled-components'
import IconButton from './IconButton'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding: 2rem 4rem;
  background-color: #777;
`

const FooterText = styled.p`
  font-size: 0.8rem;
`

const ExternalMedia = styled.div`
  display: flex;
  gap: 1.5rem;
`

function Footer() {
  return (
    <StyledFooter>
      <FooterText>&copy; Joseph Peart.</FooterText>
      <ExternalMedia>
        <IconButton portal='github' />
        <IconButton portal='linkedin' />
      </ExternalMedia>
    </StyledFooter>
  )
}

export default Footer
