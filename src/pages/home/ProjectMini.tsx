import styled from 'styled-components'
import FeaturedContainer from '../../ui/FeaturedContainer'
import FeaturedImg from '../../ui/FeaturedImg'
import FunHeader from '../../ui/FunHeading'
import CopyBox from '../../ui/CopyBox'
import ButtonBox from '../../ui/ButtonBox'
import Button from '../../ui/Button'
import SubTitle from '../../ui/SubTitle'
import { Link } from 'react-router-dom'
import { device } from '../../styles/media'

const ProjectDescription = styled.p`
  max-width: 40rem;
  color: var(--color-accent);

  @media ${device.md} {
    max-width: 30rem;
  }
`

function ProjectMini() {
  return (
    <FeaturedContainer>
      <CopyBox>
        <FunHeader>Project Spotlight</FunHeader>
        <SubTitle>Cronicle</SubTitle>
        <ProjectDescription>
          Cronicle is a system designed for gathering web articles, uploading them to the cloud, and
          generating curated emails using AI predictions. The project&apos;s workflow involves
          multiple stages: data collection with custom scrapers targeting selected websites; storage
          and preprocessing in the cloud; and finally, selection and delivery, with the option to
          drop in different NLP models for AI inference stage.
        </ProjectDescription>
        <ButtonBox>
          <a href='https://github.com/j-prt/cronicle' target='_blank' rel='noreferrer'>
            <Button $styleType='primary'>See on GitHub</Button>
          </a>
          <Link to='/projects'>
            <Button $styleType='secondary'>All Projects</Button>
          </Link>
        </ButtonBox>
      </CopyBox>
      <FeaturedImg side='right' brightness='medium' imgUrl='./public/laptop2.jpg' />
    </FeaturedContainer>
  )
}

export default ProjectMini
