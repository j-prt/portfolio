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
  width: min-content;
  position: relative;
  font-size: 4rem;
  font-family: 'Zilla Slab', serif;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.5px;
  line-height: 1.2;
  z-index: 1;
  margin-bottom: 1rem;
  text-align: center;
  display: inline;

  // Background highlighter effect
  &::after {
    position: absolute;
    content: '';
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    background-image: linear-gradient(var(--color-accent), var(--color-accent));
    border-radius: var(--border-radius-sm);
    /* width: 80%;
    transform: translateY(5px) translateX(12%) skew(-8deg, -1.5deg) scale(1.15); */
    width: 100%;
    transform: translateY(5px) skew(-8deg, -1.5deg) scale(1.15);

    /* @media (min-width: 395px) {
      width: 100%;
      transform: translateY(5px) skew(-8deg, -1.5deg) scale(1.15);
    } */
  }

  @media ${device.xs} {
  }

  @media ${device.sm} {
    font-size: 4.5rem;
    width: max-content;
  }

  @media ${device.md} {
    font-size: 3.75rem;
  }

  @media ${device.lg} {
    font-size: 4.5rem;
  }
`

export default FunHeading
