import styled, { css } from 'styled-components'
import { device } from '../styles/media'

interface SubTitleProps {
  size?: 'small' | 'medium'
}

const sizes = {
  small: css`
    font-size: 0.7rem;
    letter-spacing: 3.5px;
    @media ${device.sm} {
      font-size: 0.8rem;
      letter-spacing: 4.5px;
    }
  `,
  medium: css`
    font-size: 1.2rem;
    letter-spacing: 4px;
  `,
}

const SubTitle = styled.p<SubTitleProps>`
  font-weight: 300;
  color: var(--color-accent-dark);
  text-align: center;
  ${props => sizes[props.size || 'medium']}
`

export default SubTitle
