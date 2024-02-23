import styled from 'styled-components'

const ExternalLink = styled.a`
  color: var(--color-link);

  &:visited,
  &:hover,
  &:active,
  &:link {
    color: var(--color-link);
  }
`

export default ExternalLink
