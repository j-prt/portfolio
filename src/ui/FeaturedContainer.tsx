import React from 'react'
import styled from 'styled-components'

interface SFCProps {
  children: React.ReactNode
}

const StyledFeaturedContainer = styled.div`
  height: 35rem;
  padding: 0 4rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // dashed border
  /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23D8E9A8FF' stroke-width='4' stroke-dasharray='15%2c 15%2c 1' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"); */
`

function FeaturedContainer({ children }: SFCProps) {
  return <StyledFeaturedContainer>{children}</StyledFeaturedContainer>
}

export default FeaturedContainer
