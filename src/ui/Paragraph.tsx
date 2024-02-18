import styled from 'styled-components'
import { device } from '../styles/media'

const Paragraph = styled.p`
  max-width: 30rem;

  @media ${device.md} {
    max-width: 40rem;
  }
`

export default Paragraph
