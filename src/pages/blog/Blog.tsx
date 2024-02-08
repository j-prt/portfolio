import FullScreenBackground from '../../ui/FullScreenBackground'
import FunHeader from '../../ui/FunHeader'
import MainContainer from '../../ui/MainContainer'
import Rule from '../../ui/Rule'
import BlogCard from './BlogCard'

function Blog() {
  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        <FunHeader>Blog!</FunHeader>
        <Rule type='bold' />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </MainContainer>
    </FullScreenBackground>
  )
}

export default Blog
