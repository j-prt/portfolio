import React from 'react'
import styled from 'styled-components'

interface CopyBoxProps {
  children: React.ReactNode
}

const StyledCopyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

function CopyBox({ children }: CopyBoxProps) {
  return <StyledCopyBox>{children}</StyledCopyBox>
}

export default CopyBox
