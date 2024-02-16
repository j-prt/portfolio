import styled, { css } from 'styled-components'

interface FSBProps {
  size?: 'normal' | 'long'
  color?: 'main' | 'secondary'
}

const sizes = {
  normal: css`
    min-height: 100vh;
    display: flex;
  `,
  long: css`
    min-height: 80rem;
  `,
  double: css`
    min-height: 120rem;
  `,
}

const colors = {
  main: css`
    background-image: radial-gradient(
      farthest-corner at 5% 70%,
      var(--color-main-med),
      var(--color-main-dark),
      var(--color-main-med)
    );
  `,
  secondary: css`
    background-color: var(--color-secondary);
  `,
}

const FullScreenBackground = styled.main<FSBProps>`
  ${props => sizes[props.size || 'normal']};
  ${props => colors[props.color || 'main']};
`

export default FullScreenBackground
