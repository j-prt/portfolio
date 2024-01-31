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
  padding: 4rem 2rem;
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

const ContactForm = styled.form`
  height: 20rem;
  width: 30rem;
  padding: 1rem;
  border: 1px solid var(--color-accent);
  box-shadow: 0rem 0rem 0.4rem 0rem var(--color-accent);
  background-color: rgba(9, 24, 12, 0.5);
  border-radius: var(--border-radius-md);
`

const FormRow = styled.div``

const Label = styled.label``

const Input = styled.input``

const TextArea = styled.textarea``

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
        <ContactForm>
          <FormRow>
            <Label>Name</Label>
            <Input />
          </FormRow>
          <FormRow>
            <Label>Email</Label>
            <Input />
          </FormRow>
          <FormRow>
            <Label>Message</Label>
            <TextArea />
          </FormRow>
        </ContactForm>
      </ContactContainer>
    </StyledContactMini>
  )
}

export default ContactMini
