import FullScreenBackground from '../../ui/FullScreenBackground'
import FunHeader from '../../ui/FunHeading'
import MainContainer from '../../ui/MainContainer'
import Rule from '../../ui/Rule'
import SubTitle from '../../ui/SubTitle'

function Projects() {
  return (
    <FullScreenBackground color='secondary'>
      <MainContainer>
        <FunHeader>Projects!</FunHeader>
        <SubTitle>the stuff I made</SubTitle>
        <Rule type='bold' />
      </MainContainer>
    </FullScreenBackground>
  )
}

export default Projects
