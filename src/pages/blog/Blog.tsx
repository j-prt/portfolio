import DateSquare from '../../ui/DateSquare'
import FullScreenBackground from '../../ui/FullScreenBackground'
import MainContainer from '../../ui/MainContainer'

function Blog() {
  return (
    <FullScreenBackground color='secondary'>
      <MainContainer>
        Blog
        <DateSquare year='2024' monthday='02/07' />
      </MainContainer>
    </FullScreenBackground>
  )
}

export default Blog
