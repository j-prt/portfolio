import styled, { css } from 'styled-components'
import React from 'react'

interface StyleProps {
  styleType: 'primary' | 'secondary'
}

interface ButtonProps extends StyleProps {
  children: React.ReactNode
  onPress: () => void
}

const variations = {
  primary: css`
    background-color: var(--color-accent);
    color: var(--text-accent-dark);
  `,
  secondary: css`
    background-color: transparent;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
  `,
}

const StyledButton = styled.button<StyleProps>`
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-family: 'Chakra Petch', sans-serif;
  border-radius: var(--border-radius-sm);
  border: none;
  transition: all 0.3s;
  ${props => variations[props.styleType]};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0rem 0rem 0.5rem var(--color-accent);
  }
`

function Button({ children, onPress, styleType }: ButtonProps) {
  return (
    <StyledButton onClick={onPress} styleType={styleType}>
      {children}
    </StyledButton>
  )
}

export default Button
