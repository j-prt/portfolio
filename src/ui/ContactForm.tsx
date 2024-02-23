import styled, { css } from 'styled-components'
import Button from './Button'
import { device } from '../styles/media'
import { FieldErrors, FieldValues, useForm } from 'react-hook-form'
import { MESSAGE_LIMIT } from '../utils/constants'

interface SCFProps {
  size?: 'small' | 'large'
}

const sizes = {
  small: css`
    height: 30rem;
    max-width: 35rem;
    width: 100%;
  `,
  large: css`
    height: 30rem;
    max-width: 50rem;
    width: 100%;
  `,
}

const StyledContactForm = styled.form<SCFProps>`
  ${props => sizes[props.size || 'small']}
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
  gap: 1rem;

  @media ${device.xs} {
    gap: 1rem;
  }

  @media ${device.sm} {
    gap: 3rem;
  }
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
  width: 100%;
  /* display: inline; */
`

const TextArea = styled.textarea`
  background-color: var(--color-main-lightest);
  border-radius: var(--border-radius-xs);
  height: 12rem;
  border: none;
  resize: none;
`

function ContactForm({ size }: SCFProps) {
  const { register, handleSubmit, watch, reset, formState } = useForm()
  const { errors } = formState
  const messageText = watch('message', '')

  function onSubmit(data: FieldValues) {
    reset()
    console.log(data)
  }
  function onError(errors: FieldErrors<FieldValues>) {
    console.log(errors)
  }
  if (errors) console.log(errors)

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit, onError)} size={size}>
      <AdjacentRows>
        <FormRow>
          <Label>First Name</Label>
          <Input
            type='text'
            id='firstname'
            disabled={false}
            {...register('firstname', {
              required: '!!',
            })}
          />
        </FormRow>
        <FormRow>
          <Label>Last Name</Label>
          <Input
            type='text'
            id='lastname'
            disabled={false}
            {...register('lastname', {
              required: '!!',
            })}
          />
        </FormRow>
      </AdjacentRows>
      <FormRow>
        <Label>Email</Label>
        <Input
          type='email'
          id='email'
          disabled={false}
          {...register('email', {
            required: '!!',
          })}
        />
      </FormRow>
      <FormRow>
        <Label>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>What&apos;s up?</span>
            <span>
              {messageText.length} / {MESSAGE_LIMIT}
            </span>
          </div>
        </Label>
        <TextArea
          id='message'
          defaultValue=''
          disabled={false}
          {...register('message', {
            required: '!!',
            validate: (value: string) => value.length <= MESSAGE_LIMIT,
          })}
        />
      </FormRow>
      <Button $size='large' $hoverEffect='simple'>
        Submit
      </Button>
    </StyledContactForm>
  )
}

export default ContactForm
