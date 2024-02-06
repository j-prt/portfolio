import React from 'react'
import styled, { css } from 'styled-components'

interface FunHeaderProps {
  children: React.ReactNode
  side: 'right' | 'left'
}

const sides = {
  right: css`
    transform: translateY(5px) skew(-8deg, -1.5deg) scale(1.15);
  `,
  left: css`
    transform: translateY(5px) skew(-8deg, -1.5deg) scale(1.15);
  `,
}

const StyledFunHeader = styled.h1<FunHeaderProps>`
  color: var(--color-secondary-med);
  position: relative;
  font-size: 4.5rem;
  font-family: 'Zilla Slab', serif;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.5px;
  line-height: 1.2;
  z-index: 1;
  margin-bottom: 1rem;

  // Background highlighter effect
  &::after {
    position: absolute;
    content: '';
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(var(--color-accent), var(--color-accent));
    border-radius: var(--border-radius-sm);
    ${props => sides[props.side]}
  }
`

function FunHeader({ children, side }: FunHeaderProps) {
  return <StyledFunHeader side={side}>{children}</StyledFunHeader>
}

export default FunHeader
