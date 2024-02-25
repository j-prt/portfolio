import styled from 'styled-components'
import FullScreenBackground from '../ui/FullScreenBackground'
import ContactForm from '../ui/ContactForm'
import MainContainer from '../ui/MainContainer'
import HeadingSimple from '../ui/HeadingSimple'
import ExternalLink from '../ui/ExternalLink'
import { URLS } from '../utils/constants'

const AboutImg = styled.div`
  width: 100%;
  max-width: 32rem;
  aspect-ratio: 32/20;
  border-radius: var(--border-radius-md);
  background-image: linear-gradient(rgba(9, 24, 12, 0.35), rgba(9, 24, 12, 0.35)),
    url('/about999.webp');
  background-size: cover;
  background-position: center;
  box-shadow: 1rem 1rem 0rem var(--color-accent);
  transform: translateX(-0.5rem);
`

const AboutText = styled.p`
  max-width: 45rem;
`
const AboutTitle = styled(HeadingSimple)`
  font-size: 4rem;
`

function About() {
  return (
    <FullScreenBackground size='long'>
      <MainContainer>
        <AboutTitle>About</AboutTitle>
        <AboutImg />
        <AboutText>
          Hey again! Joseph here. I&apos;m a software developer specializing in machine learning and
          data science. Western Canada born and raised; currently living in Westbank, BC.
          <br />
          <br />
          Since 2022, I&apos;ve been working as a data science instructor for Concordia
          University&apos;s Data Science Bootcamp, where I teach data science and computer science
          to diverse students from a wide variety of backgrounds and experience levels.
          <br />
          <br />
          Before that, I spent 5 years in retail management, moving through 3 stores across BC. I
          learned a lot about working with people, building teams, and complex interdependent
          systems (running a store is actually like asynchronous programming). And managing data. So
          much data. In the end, that&apos;s what inspired my career switch.
          <br />
          <br />
          In my free time I like playing board games with my wife or video games with my cats. In
          summer, we enjoy local nature and local wineries in (almost) equal measure.
          <br />
          <br />
          <br />
          Drop me a line using the contact form below, send me an{' '}
          <ExternalLink href='mailto:joe.peart.dev@gmail.com'>email</ExternalLink> or connect with
          me on{' '}
          <ExternalLink href={URLS.linkedin} target='_blank' rel='noreferrer'>
            LinkedIn
          </ExternalLink>
          !
        </AboutText>
        <ContactForm size='large' />
      </MainContainer>
    </FullScreenBackground>
  )
}

export default About
