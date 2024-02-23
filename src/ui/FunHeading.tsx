import React from 'react'
import styled, { css } from 'styled-components'
import { device } from '../styles/media'

interface FunHeadingProps {
  children: React.ReactNode
  width?: 'shared' | 'solo'
}

const widths = {
  shared: css`
    @media ${device.xs} {
    }

    @media ${device.sm} {
      font-size: 4.5rem;
      width: max-content;
      line-height: 1.2;
      letter-spacing: 0.5px;
    }

    @media ${device.md} {
      font-size: 3.75rem;
    }

    @media ${device.lg} {
      font-size: 4.5rem;
    }
  `,
  solo: css`
    @media ${device.sm} {
      font-size: 5rem;
    }
  `,
}

const FunHeading = styled.h1<FunHeadingProps>`
  color: var(--color-secondary-med);
  width: min-content;
  position: relative;
  font-size: 4rem;
  font-family: 'Zilla Slab', serif;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 2.5px;
  line-height: 0.9;
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
    width: 100%;
    transform: translateY(6px) skew(-8deg, -1.5deg) scale(1.15, 1.2);
  }

  ${props => widths[props.width || 'solo']}
`

export default FunHeading
