import styled from 'styled-components'

const StyledContactMini = styled.section`
  height: 30rem;
  background-image: radial-gradient(
    farthest-corner at 25% 5%,
    var(--color-main-med),
    var(--color-main-dark),
    var(--color-main-med)
  );
`

const ContactContainer = styled.div`
  max-width: var(--home-max-width);
  padding: var(--home-padding);
  gap: 1.5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: var(--color-accent);
`

const ContactHeader = styled.div``

const ContactForm = styled.div`
  height: 20rem;
  width: 30rem;
  padding: 1rem;
  border: 0.5px solid var(--color-accent);
  box-shadow: 0rem 0rem 0.5rem 0rem var(--color-accent);
  background-color: rgba(9, 24, 12, 0.5);
  border-radius: var(--border-radius-md);
`

function ContactMini() {
  return (
    <StyledContactMini>
      <ContactContainer>
        <ContactHeader>Questions?</ContactHeader>
        <ContactForm>Form go here</ContactForm>
      </ContactContainer>
    </StyledContactMini>
  )
}

export default ContactMini
