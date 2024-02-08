import styled from 'styled-components'
import FeaturedContainer from '../../ui/FeaturedContainer'
import FeaturedImg from '../../ui/FeaturedImg'
import FunHeader from '../../ui/FunHeading'
import CopyBox from '../../ui/CopyBox'
import ButtonBox from '../../ui/ButtonBox'
import Button from '../../ui/Button'
import SubTitle from '../../ui/SubTitle'

const ProjectDescription = styled.p`
  max-width: 30rem;
  color: var(--color-accent);
`

function ProjectMini() {
  return (
    <FeaturedContainer>
      <FeaturedImg side='left' brightness='medium' imgUrl='./public/laptop2.jpg' />
      <CopyBox>
        <FunHeader side='right'>Project Spotlight</FunHeader>
        <SubTitle>Title of the project featured</SubTitle>
        <ProjectDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis eaque laudantium
          distinctio perferendis maxime ex blanditiis suscipit, molestiae dignissimos officia nam
          consequatur dolores exercitationem esse saepe corrupti hic iusto quo! Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Magni nesciunt quia repudiandae distinctio omnis
          modi facere quis voluptates quibusdam nihil! Vel iste obcaecati quia. Dolores eaque fugiat
          quasi incidunt consequatur!
        </ProjectDescription>
        <ButtonBox>
          <Button onPress={() => {}} $styleType='primary'>
            Try It Out
          </Button>
          <Button onPress={() => {}} $styleType='secondary'>
            All Projects
          </Button>
        </ButtonBox>
      </CopyBox>
    </FeaturedContainer>
  )
}

export default ProjectMini
