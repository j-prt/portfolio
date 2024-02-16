import React from 'react'
import styled from 'styled-components'
import { device } from '../styles/media'

interface FunHeaderProps {
  children: React.ReactNode
}

// const sides = {
//   right: css`
//     transform: translateY(5px) skew(-8deg, -1.5deg) scale(1.15);
//   `,
//   left: css`
//     transform: translateY(5px) skew(-8deg, -1.5deg) scale(1.15);
//   `,
// }

const FunHeading = styled.h1<FunHeaderProps>`
  color: var(--color-secondary-med);
  position: relative;
  font-size: 3.5rem;
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
    transform: translateY(5px) skew(-8deg, -1.5deg) scale(1.15);
  }

  @media ${device.md} {
    font-size: 3.5rem;
  }

  @media ${device.lg} {
    font-size: 4.5rem;
  }
`

export default FunHeading
