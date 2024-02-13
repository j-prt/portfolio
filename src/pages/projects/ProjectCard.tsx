import styled from 'styled-components'
import DateLine from '../../ui/DateLine'
import HeadingSimple from '../../ui/HeadingSimple'
import SubTitle from '../../ui/SubTitle'
import Paragraph from '../../ui/Paragraph'
import Button from '../../ui/Button'
import FlexColumn from '../../ui/FlexColumn'
import ButtonBox from '../../ui/ButtonBox'
import Carousel from '../../ui/Carousel'
import { ProjectData } from '../../types'

const StyledProjectCard = styled(FlexColumn)`
  gap: 2rem;
  padding-bottom: 5rem;

  &:not(:last-child) {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 10%;
      bottom: 0;
      width: 80%;
      border-bottom: 0.5px solid var(--color-accent-light);
    }
  }
`

const ProjectCardHeader = styled(HeadingSimple)`
  transform: translateY(-5px);
`

interface ProjectCardProps {
  projectData: ProjectData
}

function ProjectCard({ projectData }: ProjectCardProps) {
  return (
    <StyledProjectCard>
      <FlexColumn>
        <DateLine>{projectData.date}</DateLine>
        <ProjectCardHeader>{projectData.title}</ProjectCardHeader>
        <SubTitle size='small'>
          {projectData.tags.reduce(
            (current, tag) => current.toUpperCase() + ' | ' + tag.toUpperCase()
          )}
        </SubTitle>
      </FlexColumn>
      <Carousel />
      <Paragraph>{projectData.description}</Paragraph>
      <ButtonBox>
        {projectData.liveLink && (
          <a href={projectData.liveLink}>
            <Button $styleType='primary'>Try It Out</Button>
          </a>
        )}
        {projectData.sourceLink && (
          <a href={projectData.sourceLink}>
            <Button $styleType='secondary'>See Source</Button>
          </a>
        )}
      </ButtonBox>
    </StyledProjectCard>
  )
}

export default ProjectCard
