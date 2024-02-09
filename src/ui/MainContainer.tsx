import styled from 'styled-components'

interface MCProps {
  gap?: number
  relative?: boolean
}

const MainContainer = styled.div<MCProps>`
  padding: 6rem 2rem;
  margin: 0 auto;
  max-width: var(--home-max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-accent);

  ${props => (props.relative ? 'position: relative' : '')};
  gap: ${props => (props.gap || 3) + 'rem'};
`

export default MainContainer
