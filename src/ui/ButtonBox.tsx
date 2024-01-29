import React from 'react'
import styled from 'styled-components'

interface ButtonBoxProps {
  children: React.ReactNode
}

const StyledButtonBox = styled.div`
  display: flex;
  gap: 0.8rem;
`

function ButtonBox({ children }: ButtonBoxProps) {
  return <StyledButtonBox>{children}</StyledButtonBox>
}

export default ButtonBox
