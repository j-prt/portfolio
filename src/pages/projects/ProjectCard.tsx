import styled from 'styled-components'
import DateLine from '../../ui/DateLine'
import HeadingSimple from '../../ui/HeadingSimple'

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function ProjectCard() {
  return (
    <StyledProjectCard>
      <DateLine>FEB 6 2024</DateLine>
      <HeadingSimple>Project Card</HeadingSimple>
    </StyledProjectCard>
  )
}

export default ProjectCard
