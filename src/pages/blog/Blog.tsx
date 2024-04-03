import FullScreenBackground from '../../ui/FullScreenBackground'
import FunHeading from '../../ui/FunHeading'
import MainContainer from '../../ui/MainContainer'
import Rule from '../../ui/Rule'
import SubTitle from '../../ui/SubTitle'
import BlogCard from './BlogCard'
import ListContainer from '../../ui/ListContainer'
import { useBlogs } from '../../hooks/useBlogs'
import Loader from '../../ui/Loader'

function Blog() {
  const { isLoading, blogs } = useBlogs()

  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        <FunHeading>Blog!</FunHeading>
        <SubTitle>Some things I thought about</SubTitle>
        <Rule type='bold' />
        <ListContainer>
          {isLoading ? (
            <Loader />
          ) : (
            blogs?.map(blog => <BlogCard key={blog.id} blogData={blog} />)
          )}
        </ListContainer>
      </MainContainer>
    </FullScreenBackground>
  )
}

export default Blog
