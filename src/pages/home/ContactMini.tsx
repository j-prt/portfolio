import styled from 'styled-components'
import Button from '../../ui/Button'

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
  height: 30rem;
  width: 35rem;
  padding: 1.5rem;
  border: 1px solid var(--color-accent);
  box-shadow: 0rem 0rem 0.4rem 0rem var(--color-accent);
  background-color: rgba(9, 24, 12, 0.5);
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.8rem;
  color: var(--color-accent-dark);
`

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.4rem;

  div > & {
    flex-grow: 1;
  }

  /* justify-items: center; */
  /* grid-template-columns: 4rem 1fr 4rem 1fr; */
`
const AdjacentRows = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
`

const Label = styled.label`
  /* justify-self: center; */
  font-weight: 500;
  letter-spacing: 0.5px;
`

const Input = styled.input`
  background-color: var(--color-main-white);
  border-radius: var(--border-radius-xs);
  height: 1.8rem;
  border: none;
`

const TextArea = styled.textarea`
  background-color: var(--color-main-lightest);
  border-radius: var(--border-radius-xs);
  height: 12rem;
  border: none;
`
// const FormButton = styled.button`
//   padding: 0.5rem 1rem;
//   font-size: 1.1rem;
//   border-radius: var(--border-radius-sm);
//   border: none;
//   transition: all 0.3s;
//   background-color: var(--color-accent);
//   color: var(--color-accent-darkest);
//   border: 1px solid var(--color-accent);
//   width: 50%;
//   align-self: center;
// `

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
          <AdjacentRows>
            <FormRow>
              <Label>First Name</Label>
              <Input />
            </FormRow>
            <FormRow>
              <Label>Last Name</Label>
              <Input />
            </FormRow>
          </AdjacentRows>
          <FormRow>
            <Label>Email</Label>
            <Input />
          </FormRow>
          <FormRow>
            <Label>What&apos;s up?</Label>
            <TextArea />
          </FormRow>
          <Button
            onPress={e => {
              e.preventDefault()
            }}
            size='large'
            hoverEffect='simple'
          >
            Submit
          </Button>
        </ContactForm>
      </ContactContainer>
    </StyledContactMini>
  )
}

export default ContactMini
