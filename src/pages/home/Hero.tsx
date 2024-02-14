import styled from 'styled-components'
import Button from '../../ui/Button'
import ButtonBox from '../../ui/ButtonBox'
import FullScreenBackground from '../../ui/FullScreenBackground'
import SubTitle from '../../ui/SubTitle'

const HeroBox = styled.div`
  max-width: var(--home-max-width);
  height: 90%;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
`

const ProfileBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  flex: 1 1 0;
`

const Img = styled.div`
  grid-column: 1/3;
  width: 24rem;
  height: 16rem;
  border-radius: var(--border-radius-md);
  background-image: linear-gradient(rgba(9, 24, 12, 0.35), rgba(9, 24, 12, 0.35)),
    url('./public/cat3.jpg');
  background-size: cover;
  background-position: center;
  transform: translate(3rem, -1.5rem);
  box-shadow: -1rem 1rem 0rem var(--color-accent);
`
const About = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  align-items: center;
  gap: 0.8rem;
`

const H1 = styled.h1`
  grid-column: 2 / 4;
  font-size: 4.5rem;
  font-family: 'Zilla Slab', serif;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 3.5px;
  line-height: 0.8;
  color: var(--color-accent);
  text-shadow: 0 2.4rem 3.2rem rgba(255, 255, 255, 0.25);
  z-index: 1;
`
const H2 = styled.p`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-accent);
`

const H3 = styled(SubTitle)`
  margin-bottom: 1.5rem;
`

const AboutText = styled.p`
  max-width: 30rem;
  margin-left: 3rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
`

function Hero() {
  return (
    <FullScreenBackground>
      <HeroBox>
        <ProfileBox>
          <H1>Joseph</H1>
          <H1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Peart</H1>
          <Img />
        </ProfileBox>
        <About>
          <H2>Software Developer</H2>
          <H3 size='small'>AI | DATA | WEB</H3>
          <AboutText>
            Hey! I’m Joseph. I’m a software developer with a passion for people and product. I love
            building — web apps, machine learning systems, automations to make my life easier —
            there’s nothing better than getting a project up and running. I’m always looking to grow
            my skills, take on new challenges, and share what I’ve been learning.
            <br />
            <br />
            If you’re interested in working together, curious about what I do, or even just want to
            chat, you can use the contact form below or connect with me on LinkedIn. ✌︎
          </AboutText>
          <ButtonBox>
            <Button onPress={() => {}} $styleType='primary'>
              Contact
            </Button>
            <Button onPress={() => {}} $styleType='secondary'>
              Learn More
            </Button>
          </ButtonBox>
        </About>
      </HeroBox>
    </FullScreenBackground>
  )
}

export default Hero
