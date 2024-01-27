import styled from 'styled-components'

interface IconProps {
  portal: 'github' | 'linkedin'
}

const StyledIconButton = styled.a``

function IconButton({ portal }: IconProps) {
  return (
    <StyledIconButton>
      {portal == 'github' && 'github'}
      {portal == 'linkedin' && 'linkedin'}
    </StyledIconButton>
  )
}

export default IconButton
