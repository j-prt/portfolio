import styled from 'styled-components'
import DateLine from '../../ui/DateLine'
import HeadingSimple from '../../ui/HeadingSimple'
import SubTitle from '../../ui/SubTitle'
import Paragraph from '../../ui/Paragraph'
import Button from '../../ui/Button'
import FlexColumn from '../../ui/FlexColumn'

const StyledProjectCard = styled(FlexColumn)`
  gap: 2rem;
`

const ProjectCardHeader = styled(HeadingSimple)`
  transform: translateY(-5px);
`

function ProjectCard() {
  return (
    <StyledProjectCard>
      <FlexColumn>
        <DateLine>FEB 6 2024</DateLine>
        <ProjectCardHeader>Project Card</ProjectCardHeader>
        <SubTitle size='small'>TECH | OTHER | LANGUAGE | PARADIGM</SubTitle>
      </FlexColumn>
      <div>
        <p>Carousel goes here</p>
      </div>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro aspernatur ex odio
        illum animi quae, officia beatae, facere iusto error soluta reiciendis explicabo, officiis
        eveniet totam. Soluta, maxime maiores!
      </Paragraph>
      <Button onPress={() => {}} $styleType='primary'>
        Try It Out
      </Button>
    </StyledProjectCard>
  )
}

export default ProjectCard
