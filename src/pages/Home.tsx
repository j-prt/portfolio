import styled from 'styled-components'
import Button from '../ui/Button'

const HeroContainer = styled.div`
  height: 100vh;
  background-image: radial-gradient(
    farthest-corner at 5% 70%,
    var(--color-main-med),
    var(--color-main-dark),
    var(--color-main-med)
  );
`

const HeroBox = styled.div`
  max-width: 70rem;
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
  width: 100%;
  height: 16rem;
  border-radius: 8px;
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
`

const H1 = styled.h1`
  grid-column: 2 / 4;
  font-size: 4.5rem;
  font-family: 'Prompt', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
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
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 500;
  color: var(--color-accent);
`

const H3 = styled.p`
  font-size: 0.8rem;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 300;
  letter-spacing: 4.5px;
  color: var(--color-accent-dark);

  margin-bottom: 1.5rem;
`

const AboutText = styled.p`
  max-width: 20rem;
  margin-left: 3rem;
  margin-bottom: 1rem;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 300;
  color: var(--color-accent);
`

const CTABox = styled.div`
  display: flex;
  gap: 0.8rem;
`

function Home() {
  return (
    <HeroContainer>
      <HeroBox>
        <ProfileBox>
          <H1>Joseph</H1>
          <H1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Peart</H1>
          <Img />
        </ProfileBox>
        <About>
          <H2>Software Developer</H2>
          <H3>AI | DATA | WEB</H3>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis iusto
            perferendis recusandae saepe accusamus quam ratione possimus earum ducimus, ipsam velit
            porro suscipit, delectus illo, soluta molestias.
          </AboutText>
          <CTABox>
            <Button onPress={() => {}} styleType='primary'>
              Contact
            </Button>
            <Button onPress={() => {}} styleType='secondary'>
              Learn More
            </Button>
          </CTABox>
        </About>
      </HeroBox>
    </HeroContainer>
  )
}

export default Home
