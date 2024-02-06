import styled from 'styled-components'
import FullScreenBackground from '../ui/FullScreenBackground'
import ContactForm from '../ui/ContactForm'

const AboutContainer = styled.div`
  padding: 6rem 2rem;
  margin: 0 auto;
  max-width: var(--home-max-width);
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  color: var(--color-accent);
`

const AboutText = styled.p``
const AboutTitle = styled.h1`
  font-size: 3rem;
`

function About() {
  return (
    <FullScreenBackground size='long'>
      <AboutContainer>
        <AboutTitle>a yo wassup </AboutTitle>
        <AboutText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit quibusdam
          ratione assumenda modi asperiores, molestiae et doloremque eaque delectus, odit, aliquam
          natus deserunt dolorum repudiandae omnis voluptate cupiditate consequuntur. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Error, illo! Placeat excepturi eveniet sint
          nulla harum dignissimos facilis reiciendis ducimus tenetur ut. Odit voluptate impedit
          eaque ipsum necessitatibus libero recusandae? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Minus harum veniam fugiat culpa sit a, voluptas quidem pariatur ad
          corrupti exercitationem aut reiciendis deleniti laborum. Ipsam quod cupiditate quo animi?
        </AboutText>
        <ContactForm size='large' />
      </AboutContainer>
    </FullScreenBackground>
  )
}

export default About
