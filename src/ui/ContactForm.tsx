import styled from 'styled-components'
import Button from './Button'

const StyledContactForm = styled.form`
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
`
const AdjacentRows = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
`

const Label = styled.label`
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

function ContactForm() {
  return (
    <StyledContactForm>
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
    </StyledContactForm>
  )
}

export default ContactForm
