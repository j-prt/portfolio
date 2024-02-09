import styled from 'styled-components'
import DateLine from '../../ui/DateLine'
import HeadingSimple from '../../ui/HeadingSimple'
import SubTitle from '../../ui/SubTitle'
import Paragraph from '../../ui/Paragraph'
import Button from '../../ui/Button'
import FlexColumn from '../../ui/FlexColumn'
import ButtonBox from '../../ui/ButtonBox'
import Carousel from '../../ui/Carousel'

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
        <DateLine>FEB 2024</DateLine>
        <ProjectCardHeader>Project Card</ProjectCardHeader>
        <SubTitle size='small'>TECH | OTHER | LANGUAGE | PARADIGM</SubTitle>
      </FlexColumn>
      <Carousel />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro aspernatur ex odio
        illum animi quae, officia beatae, facere iusto error soluta reiciendis explicabo, officiis
        eveniet totam. Soluta, maxime maiores! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Unde amet dolor laborum natus obcaecati labore asperiores magni pariatur sunt maiores,
        beatae doloremque debitis enim fuga in repellendus?
      </Paragraph>
      <ButtonBox>
        <Button onPress={() => {}} $styleType='primary'>
          Try It Out
        </Button>
        <Button onPress={() => {}} $styleType='secondary'>
          See Source
        </Button>
      </ButtonBox>
    </StyledProjectCard>
  )
}

export default ProjectCard
