import styled, { css } from 'styled-components'
import Button from './Button'
import { device } from '../styles/media'
import { FieldError, FieldErrors, FieldValues, useForm } from 'react-hook-form'
import { MESSAGE_LIMIT } from '../utils/constants'
import { IoAlertCircleOutline, IoClose } from 'react-icons/io5'
import { useSendMessage } from '../hooks/useSendMessage'
import { useState } from 'react'

interface SCFProps {
  size?: 'small' | 'large'
}

interface LabelProps {
  $error: FieldError | undefined
}

interface FormTypes {
  firstname: string
  lastname: string
  email: string
  message: string
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
  position: relative;
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

const Label = styled.label<LabelProps>`
  font-weight: 500;
  letter-spacing: 0.5px;

  ${props =>
    props.$error &&
    css`
      & + input,
      & + textarea,
      &:active {
        outline: 2px solid red;
        outline-offset: 2px;
      }
    `}
`

const Input = styled.input`
  background-color: var(--color-main-white);
  border-radius: var(--border-radius-xs);
  height: 1.8rem;
  border: none;
  width: 100%;
`

const TextArea = styled.textarea`
  background-color: var(--color-main-lightest);
  border-radius: var(--border-radius-xs);
  height: 12rem;
  border: none;
  resize: none;
`

interface FormReplacementProps {
  $visible: boolean | null
}

const FormReplacement = styled.div<FormReplacementProps>`
  position: absolute;
  top: 2%;
  left: 2%;
  background-color: rgba(19, 124, 112, 0.9);
  border-radius: var(--border-radius-sm);
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  height: 96%;
  width: 96%;
  transition: all 0.5s;

  ${props =>
    props.$visible
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
`

const FormXOut = styled.div`
  position: absolute;
  font-size: 2rem;
  right: 5%;
  top: 5%;
  color: var(--color-accent);
  cursor: pointer;
`

function ContactForm({ size }: SCFProps) {
  const { register, handleSubmit, watch, formState } = useForm<FormTypes>()
  const { sendMessage, isSending } = useSendMessage()
  const [formSuccess, setFormSuccess] = useState<boolean | undefined>()
  const { errors } = formState

  const messageText = watch('message', '')
  const disabledInput = isSending || formSuccess || formSuccess == false

  function onSubmit(data: FieldValues) {
    console.log('pre sendmessage')
    sendMessage(data)
      .then(() => {
        setFormSuccess(true)
      })
      .catch(() => setFormSuccess(false))
  }
  function onError(errors: FieldErrors<FieldValues>) {
    console.log(errors)
  }

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit, onError)} size={size}>
      <FormReplacement $visible={formSuccess || formSuccess === false}>
        {!formSuccess ? (
          <>
            <FormXOut
              tabIndex={0}
              onClick={() => {
                setFormSuccess(undefined)
              }}
            >
              <IoClose />
            </FormXOut>
            <p>
              Something went wrong!
              <br />
              Maybe try again?
            </p>
          </>
        ) : (
          <p>
            Your message has been sent! <br /> I&apos;ll get back to you as soon as possible.
          </p>
        )}
      </FormReplacement>
      <AdjacentRows>
        <FormRow>
          <Label $error={errors?.firstname}>
            First Name&nbsp;{errors?.firstname && <IoAlertCircleOutline />}
          </Label>
          <Input
            type='text'
            id='firstname'
            disabled={disabledInput}
            {...register('firstname', {
              required: '!!',
            })}
          />
        </FormRow>
        <FormRow>
          <Label $error={errors?.lastname}>
            Last Name&nbsp;{errors?.lastname && <IoAlertCircleOutline />}
          </Label>
          <Input
            type='text'
            id='lastname'
            disabled={disabledInput}
            {...register('lastname', {
              required: '!!',
            })}
          />
        </FormRow>
      </AdjacentRows>
      <FormRow>
        <Label $error={errors?.email}>Email&nbsp;{errors?.email && <IoAlertCircleOutline />}</Label>
        <Input
          // type='email'
          id='email'
          disabled={disabledInput}
          {...register('email', {
            required: '!!',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
      </FormRow>
      <FormRow>
        <Label $error={errors?.message}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>What&apos;s up?</span>
            <span>
              {errors?.message && <IoAlertCircleOutline />}&nbsp;
              {messageText.length} / {MESSAGE_LIMIT}
            </span>
          </div>
        </Label>
        <TextArea
          id='message'
          defaultValue=''
          disabled={disabledInput}
          {...register('message', {
            required: '!!',
            validate: (value: string) => value.length <= MESSAGE_LIMIT,
          })}
        />
      </FormRow>
      <Button disabled={disabledInput} $size='large' $hoverEffect='simple'>
        Submit
      </Button>
    </StyledContactForm>
  )
}

export default ContactForm
