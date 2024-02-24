import styled from 'styled-components'
import ContactForm from '../../ui/ContactForm'
import { device } from '../../styles/media'
import React, { forwardRef } from 'react'
import ExternalLink from '../../ui/ExternalLink'
import FlexColumn from '../../ui/FlexColumn'

const StyledContactMini = styled.section`
  height: 70rem;
  background-image: radial-gradient(
    farthest-corner at 25% 5%,
    var(--color-main-med),
    var(--color-main-dark),
    var(--color-main-med)
  );
`

const ContactContainer = styled(FlexColumn)`
  max-width: var(--home-max-width);
  margin: 0 auto;
  gap: 1.5rem;
  justify-content: space-around;
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

const ContactMini = forwardRef(function ContactMini(
  _props: unknown,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <StyledContactMini ref={ref}>
      <ContactContainer>
        <ContactInfoBox>
          <ContactHeader>Contact</ContactHeader>
          <ContactAbout>
            Want to get in touch? Use the form and I&apos;ll get back to you at the email you
            provide. Alternatively, you can email me&nbsp;
            <ExternalLink href='mailto:joe.peart.dev@gmail.co'>directly.</ExternalLink>
          </ContactAbout>
        </ContactInfoBox>
        <ContactForm />
      </ContactContainer>
    </StyledContactMini>
  )
})

export default ContactMini
