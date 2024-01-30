import styled, { css } from 'styled-components'

interface SFIProps {
  side: 'right' | 'left'
  imgUrl: string
}

const sides = {
  right: css`
    box-shadow: 1rem -1rem 0rem var(--color-accent);
  `,

  left: css`
    box-shadow: -1rem -1rem 0rem var(--color-accent);
  `,
}

const FeaturedImg = styled.div<SFIProps>`
  height: 26rem;
  width: 18rem;
  background-image: linear-gradient(rgba(40, 30, 81, 0.55), rgba(40, 30, 81, 0.55)),
    url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-sm);
  ${props => sides[props.side]}
`

export default FeaturedImg
