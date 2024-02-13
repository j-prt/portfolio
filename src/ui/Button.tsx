import styled, { css } from 'styled-components'
import React from 'react'

interface StyleProps {
  $styleType?: 'primary' | 'secondary'
  hoverEffect?: 'glow' | 'simple'
  size?: 'medium' | 'large'
}

interface ButtonProps extends StyleProps {
  children: React.ReactNode
  onPress?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const variations = {
  primary: css`
    background-color: var(--color-accent);
    color: var(--color-accent-darkest);
  `,
  secondary: css`
    background-color: transparent;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
  `,
}

const hoverEffect = {
  glow: css`
    transform: scale(1.05);
    box-shadow: 0rem 0rem 0.5rem var(--color-accent);
  `,
  simple: css`
    box-shadow: 0rem 0rem 0.4rem var(--color-accent);
  `,
}

const sizes = {
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
  `,
  large: css`
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
    font-weight: 500;
    width: 50%;
    align-self: center;
  `,
}

const StyledButton = styled.button<StyleProps>`
  border-radius: var(--border-radius-sm);
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  ${props => sizes[props.size || 'medium']};
  ${props => variations[props.$styleType || 'primary']};
  &:hover {
    ${props => hoverEffect[props.hoverEffect || 'glow']};
  }
`

function Button({ children, onPress, $styleType, hoverEffect, size }: ButtonProps) {
  return (
    <StyledButton onClick={onPress} $styleType={$styleType} hoverEffect={hoverEffect} size={size}>
      {children}
    </StyledButton>
  )
}

export default Button
