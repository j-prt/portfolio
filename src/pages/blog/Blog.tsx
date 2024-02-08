import FullScreenBackground from '../../ui/FullScreenBackground'
import MainContainer from '../../ui/MainContainer'
import Rule from '../../ui/Rule'
import BlogCard from './BlogCard'

function Blog() {
  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        Blog
        <Rule type='bold' />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </MainContainer>
    </FullScreenBackground>
  )
}

export default Blog
