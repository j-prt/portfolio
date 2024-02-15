import styled from 'styled-components'
import Button from '../../ui/Button'
import ButtonBox from '../../ui/ButtonBox'
import FullScreenBackground from '../../ui/FullScreenBackground'
import SubTitle from '../../ui/SubTitle'
import { device } from '../../styles/media'

const HeroBox = styled.div`
  max-width: var(--home-max-width);
  height: 90%;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;

  @media ${device.xs} {
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    gap: 3rem;
  }

  @media ${device.md} {
    flex-direction: row;
  }
`

const BrandBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  flex: 1 1 0;
  @media ${device.xs} {
    grid-template-columns: 1fr 1fr 0.5fr;
  }

  @media ${device.md} {
  }
`

const Img = styled.div`
  grid-column: 1/3;
  width: 28rem;
  height: 18rem;
  border-radius: var(--border-radius-md);
  background-image: linear-gradient(rgba(9, 24, 12, 0.35), rgba(9, 24, 12, 0.35)),
    url('./public/cat3.jpg');
  background-size: cover;
  background-position: center;

  box-shadow: -1rem 1rem 0rem var(--color-accent);

  @media ${device.xs} {
    width: 20rem;
    height: 14rem;
    transform: translate(3rem, -1.5rem);
  }

  @media ${device.md} {
    transform: translate(3rem, -1.5rem);
  }

  @media ${device.lg} {
    width: 28rem;
    height: 18rem;
  }
`
const About = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  align-items: center;

  @media ${device.xs} {
    gap: 0.5rem;
  }

  @media ${device.lg} {
    gap: 0.8rem;
  }
`

const H1 = styled.h1`
  grid-column: 2 / 4;
  font-size: 5rem;
  font-family: 'Zilla Slab', serif;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 3.5px;
  line-height: 0.8;
  color: var(--color-accent);
  text-shadow: 0 2.4rem 3.2rem rgba(255, 255, 255, 0.25);
  z-index: 1;

  @media ${device.xs} {
    font-size: 4rem;
  }

  @media ${device.lg} {
    font-size: 5rem;
  }
`
const H2 = styled.p`
  font-weight: 500;
  color: var(--color-accent);

  @media ${device.xs} {
    font-size: 2rem;
    margin-bottom: 0;
  }

  @media ${device.lg} {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`

const H3 = styled(SubTitle)`
  margin-bottom: 1.5rem;

  @media ${device.xs} {
    margin-bottom: 1rem;
  }

  @media ${device.lg} {
    margin-bottom: 1.5rem;
  }
`

const AboutText = styled.p`
  max-width: 30rem;
  color: var(--color-accent);

  @media ${device.xs} {
    margin-left: 0;
    margin-bottom: 0.5rem;
  }

  @media ${device.lg} {
    margin-bottom: 1rem;
  }
`

function Hero() {
  return (
    <FullScreenBackground>
      <HeroBox>
        <BrandBox>
          <H1>Joseph</H1>
          <H1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Peart</H1>
          <Img />
        </BrandBox>
        <About>
          <H2>Software Developer</H2>
          <H3 size='small'>AI | DATA | WEB</H3>
          <AboutText>
            Hey! I&apos;m Joseph. I&apos;m a software developer with a passion for people and
            product. I love building — web apps, machine learning systems, automations to make my
            life easier — there&apos;s nothing better than getting a project up and running.
            I&apos;m always looking to grow my skills, take on new challenges, and share what
            I&apos;ve been learning.
            <br />
            <br />
            If you&apos;re interested in working together, curious about what I do, or even just
            want to chat, you can use the contact form below or connect with me on LinkedIn. ✌︎
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
