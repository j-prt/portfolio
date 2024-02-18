import styled from 'styled-components'
import FullScreenBackground from '../ui/FullScreenBackground'
import ContactForm from '../ui/ContactForm'
import MainContainer from '../ui/MainContainer'
import HeadingSimple from '../ui/HeadingSimple'

const AboutText = styled.p`
  max-width: 50rem;
`
const AboutTitle = styled(HeadingSimple)`
  font-size: 4rem;
`

function About() {
  return (
    <FullScreenBackground size='long'>
      <MainContainer>
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
      </MainContainer>
    </FullScreenBackground>
  )
}

export default About
