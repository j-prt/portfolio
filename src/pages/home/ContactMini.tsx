import styled from 'styled-components'
import ContactForm from '../../ui/ContactForm'

const StyledContactMini = styled.section`
  height: 50rem;
  background-image: radial-gradient(
    farthest-corner at 25% 5%,
    var(--color-main-med),
    var(--color-main-dark),
    var(--color-main-med)
  );
`

const ContactContainer = styled.div`
  max-width: var(--home-max-width);
  padding: 8rem 2rem;
  margin: 0 auto;
  gap: 1.5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: var(--color-accent);
`

const ContactHeader = styled.h1`
  font-family: 'Zilla Slab', serif;
  font-weight: 500;
  font-style: italic;
  font-size: 2.5rem;
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
