import FullScreenBackground from '../../ui/FullScreenBackground'
import MainContainer from '../../ui/MainContainer'
import BlogCard from './BlogCard'

function Blog() {
  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        Blog
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </MainContainer>
    </FullScreenBackground>
  )
}

export default Blog
