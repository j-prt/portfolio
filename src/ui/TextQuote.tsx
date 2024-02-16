import React from 'react'
import styled, { css } from 'styled-components'
import { device } from '../styles/media'

interface TQProps {
  children: React.ReactNode
  colorPalette: 'blue' | 'green'
}

const colorPalettes = {
  blue: css`
    background-color: rgba(28, 21, 57, 0.35);
  `,
  green: css`
    background-color: rgba(18, 49, 24, 0.35);
  `,
}

const TextQuote = styled.p<TQProps>`
  max-width: 25rem;
  border-left: 3px solid var(--color-accent-dark);
  padding: 0.5rem 1rem;
  color: var(--color-accent);
  border-radius: var(--border-radius-xs);
  ${props => colorPalettes[props.colorPalette]}

  @media ${device.sm} {
    max-width: 35rem;
  }

  @media ${device.md} {
    max-width: 30rem;
  }
`

export default TextQuote
