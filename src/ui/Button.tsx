import styled, { css } from 'styled-components'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onPress: () => void
  styleType: 'primary' | 'secondary'
}

type StyleProps = {
  styleType: 'primary' | 'secondary'
}

const variations = {
  primary: css`
    background-color: var(--color-accent);
    color: var(--text-accent-dark);
  `,
  secondary: css`
    background-color: transparent;
    color: var(--color-accent);
  `,
}

const StyledButton = styled.button<StyleProps>`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-family: 'Chakra Petch', sans-serif;
  ${props => variations[props.styleType]}
`

function Button({ children, onPress, styleType }: ButtonProps) {
  return (
    <StyledButton onClick={onPress} styleType={styleType}>
      {children}
    </StyledButton>
  )
}

export default Button
