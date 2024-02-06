import styled, { css } from 'styled-components'

interface FSBProps {
  size?: 'normal' | 'long'
}

const sizes = {
  normal: css`
    height: 100vh;
  `,
  long: css`
    height: 140vh;
  `,
}

const FullScreenBackground = styled.main<FSBProps>`
  ${props => sizes[props.size || 'normal']};
  background-image: radial-gradient(
    farthest-corner at 5% 70%,
    var(--color-main-med),
    var(--color-main-dark),
    var(--color-main-med)
  );
`

export default FullScreenBackground
