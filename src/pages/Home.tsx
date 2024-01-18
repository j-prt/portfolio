import styled from 'styled-components'

const HeroContainer = styled.div`
  height: 100vh;
  background-color: #aaa;
  display: flex;
`

const HeroBox = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  /* justify-content: space-between; */
  background-color: #888;
`

const ProfileBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  flex: 1 1 0;
`

const Img = styled.img`
  grid-column: 1/3;
  display: block;
  width: 16rem;
  border-radius: 50%;
  transform: translateY(-3rem);
`
const About = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  align-items: center;
`

const H1 = styled.p`
  grid-column: 2 / 4;
  font-size: 4rem;
  /* align-self: center; */
  margin: auto;
  z-index: 1;
`
const H2 = styled.p`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`

const H3 = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const AboutText = styled.p`
  max-width: 20rem;
  margin-left: 3rem;
  margin-bottom: 1rem;
`

const CTABox = styled.div`
  display: flex;
  gap: 0.5rem;
`

function Home() {
  return (
    <HeroContainer>
      <HeroBox>
        <ProfileBox>
          <H1>nameee</H1>
          <H1>namee</H1>
          <Img src='./public/cat.jpg' alt='Profile image' />
        </ProfileBox>
        <About>
          <H2>Job title!</H2>
          <H3>Subtitle(s)!</H3>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis iusto
            perferendis recusandae saepe accusamus quam ratione possimus earum ducimus, ipsam velit
            porro suscipit, delectus illo, soluta molestias.
          </AboutText>
          <CTABox>
            <button>CTA</button>
            <button>Learn more</button>
          </CTABox>
        </About>
      </HeroBox>
    </HeroContainer>
  )
}

export default Home
