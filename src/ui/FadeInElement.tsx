import styled from 'styled-components'
import useLoadImg from '../hooks/useLoadImg'

interface FadeInProps {
  src: string
  children?: React.ReactNode
}

const StyledFadeInElement = styled.div<{ $loading: boolean }>`
  opacity: 0;
  transition: opacity 0.5s ease-in;
  ${props => !props.$loading && 'opacity: 1;'};
`

function FadeInElement({ src, children, ...rest }: FadeInProps) {
  const imgIsLoading = useLoadImg(src)
  return (
    <StyledFadeInElement $loading={imgIsLoading} {...rest}>
      {children}
    </StyledFadeInElement>
  )
}

export default FadeInElement
