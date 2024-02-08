import styled from 'styled-components'

interface MCProps {
  gap?: number
}

const MainContainer = styled.div<MCProps>`
  padding: 6rem 2rem;
  margin: 0 auto;
  max-width: var(--home-max-width);
  display: flex;
  flex-direction: column;
  gap: ${props => (props.gap || 3) + 'rem'};
  align-items: center;
  color: var(--color-accent);
`

export default MainContainer
