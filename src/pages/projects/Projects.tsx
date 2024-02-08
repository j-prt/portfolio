import FullScreenBackground from '../../ui/FullScreenBackground'
import FunHeader from '../../ui/FunHeading'
import MainContainer from '../../ui/MainContainer'
import Rule from '../../ui/Rule'
import SubTitle from '../../ui/SubTitle'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        <FunHeader>Projects!</FunHeader>
        <SubTitle>the stuff I make</SubTitle>
        <Rule type='bold' />
        <ProjectCard />
      </MainContainer>
    </FullScreenBackground>
  )
}

export default Projects
