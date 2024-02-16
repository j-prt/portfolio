import styled from 'styled-components'
import ContactForm from '../../ui/ContactForm'
import { device } from '../../styles/media'

const StyledContactMini = styled.section`
  height: 70rem;
  background-image: radial-gradient(
    farthest-corner at 25% 5%,
    var(--color-main-med),
    var(--color-main-dark),
    var(--color-main-med)
  );
`

const ContactContainer = styled.div`
  max-width: var(--home-max-width);
  margin: 0 auto;
  gap: 1.5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 12rem 1rem 2rem;

  gap: 5rem;

  color: var(--color-accent);

  @media ${device.xs} {
    padding: 12rem 2rem 2rem;
  }

  @media ${device.md} {
    flex-direction: row;
    padding: 18rem 2rem 2rem;
  }

  @media ${device.lg} {
  }
`

const ContactHeader = styled.h1`
  font-family: 'Zilla Slab', serif;
  font-weight: 500;
  font-style: italic;
  font-size: 3rem;
  letter-spacing: 1.2px;
`

const ContactInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  gap: 2rem;
`

const ContactAbout = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.8px;
`

function ContactMini() {
  return (
    <StyledContactMini>
      <ContactContainer>
        <ContactInfoBox>
          <ContactHeader>Contact</ContactHeader>
          <ContactAbout>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus modi placeat,
            vitae sequi maxime, iure laborum?
          </ContactAbout>
        </ContactInfoBox>
        <ContactForm />
      </ContactContainer>
    </StyledContactMini>
  )
}

export default ContactMini
