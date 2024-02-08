import styled, { css } from 'styled-components'

interface RuleProps {
  type?: 'light' | 'bold'
}

const types = {
  bold: css`
    margin-bottom: 6rem;
    width: 85%;
    border-bottom: 1px solid var(--color-accent); // rgba(228, 240, 194, 0.7); // color-accent-light
    box-shadow: 0rem 0rem 2rem 0.05rem var(--color-accent);
  `,
  light: css`
    margin: 6rem 6rem;
    border-bottom: 1px solid rgba(228, 240, 194, 0.7); // color-accent-light
    box-shadow: 0rem 0rem 3rem 0.15rem var(--color-accent);
  `,
}

const Rule = styled.div<RuleProps>`
  ${props => types[props.type || 'light']}
`

export default Rule
