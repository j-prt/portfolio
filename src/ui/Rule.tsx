import styled, { css } from 'styled-components'
import { device } from '../styles/media'

interface RuleProps {
  type?: 'light' | 'bold'
}

const types = {
  bold: css`
    margin-bottom: 4rem;
    width: 85%;
    border-bottom: 1px solid var(--color-accent); // rgba(228, 240, 194, 0.7); // color-accent-light
    box-shadow: 0rem 0rem 2rem 0.05rem var(--color-accent);
  `,
  light: css`
    margin: 6rem 2rem;
    border-bottom: 1px solid rgba(228, 240, 194, 0.7); // color-accent-light
    box-shadow: 0rem 0rem 3rem 0.15rem var(--color-accent);

    @media ${device.md} {
      margin: 6rem 6rem;
    }
  `,
}

const Rule = styled.div<RuleProps>`
  ${props => types[props.type || 'light']}
`

export default Rule
