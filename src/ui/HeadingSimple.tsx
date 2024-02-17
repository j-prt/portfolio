import styled from 'styled-components'
import { device } from '../styles/media'

const HeadingSimple = styled.p`
  font-size: 2.5rem;
  font-family: 'Zilla Slab', serif;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.5px;

  @media ${device.sm} {
    font-size: 3rem;
    letter-spacing: 1px;
  }
`

export default HeadingSimple
