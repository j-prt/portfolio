import styled, { css } from 'styled-components'
import { device } from '../styles/media'
import FadeInElement from './FadeInElement'

interface SFIProps {
  $side: 'right' | 'left'
  $brightness: 'medium' | 'dark'
  src: string
}

const sides = {
  right: css`
    box-shadow: 1rem -1rem 0rem var(--color-accent);
  `,

  left: css`
    box-shadow: -1rem -1rem 0rem var(--color-accent);
  `,
}

const levels = {
  dark: 'rgba(40, 30, 81, 0.55), rgba(40, 30, 81, 0.55)',
  medium: 'rgba(40, 30, 81, 0.45), rgba(40, 30, 81, 0.45)',
}

const FeaturedImg = styled(FadeInElement)<SFIProps>`
  height: 26rem;
  width: 18rem;
  background-image: linear-gradient(${props => levels[props.$brightness]}),
    url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-sm);
  ${props => sides[props.$side]}
  display: none;

  @media ${device.md} {
    display: block;
  }
`

export default FeaturedImg
