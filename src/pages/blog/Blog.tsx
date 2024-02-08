import FullScreenBackground from '../../ui/FullScreenBackground'
import FunHeader from '../../ui/FunHeading'
import MainContainer from '../../ui/MainContainer'
import Rule from '../../ui/Rule'
import SubTitle from '../../ui/SubTitle'
import BlogCard from './BlogCard'

function Blog() {
  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        <FunHeader>Blog!</FunHeader>
        <SubTitle>where I write about things</SubTitle>
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
