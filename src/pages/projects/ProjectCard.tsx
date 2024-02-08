import styled from 'styled-components'
import DateLine from '../../ui/DateLine'
import HeadingSimple from '../../ui/HeadingSimple'
import SubTitle from '../../ui/SubTitle'

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
      <SubTitle size='small'>TECH | OTHER | LANGUAGE | PARADIGM</SubTitle>
    </StyledProjectCard>
  )
}

export default ProjectCard
