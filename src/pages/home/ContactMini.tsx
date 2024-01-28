import styled from 'styled-components'

const ContactContainer = styled.section`
  height: 30rem;
  background-image: radial-gradient(
    farthest-corner at 25% 5%,
    var(--color-main-med),
    var(--color-main-dark),
    var(--color-main-med)
  );
`

const Contact = styled.div`
  max-width: 70rem;
  padding: 2rem 4rem;
`

function ContactMini() {
  return (
    <ContactContainer>
      <Contact>ContactMini</Contact>
    </ContactContainer>
  )
}

export default ContactMini
