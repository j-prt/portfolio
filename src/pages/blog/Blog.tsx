import FullScreenBackground from '../../ui/FullScreenBackground'
import FunHeading from '../../ui/FunHeading'
import MainContainer from '../../ui/MainContainer'
import Rule from '../../ui/Rule'
import SubTitle from '../../ui/SubTitle'
import BlogCard from './BlogCard'
import ListContainer from '../../ui/ListContainer'
import { useBlogs } from './useBlogs'
import Loader from '../../ui/Loader'

// const blogs: BlogData[] = [
//   {
//     date: new Date('2024/02/13'),
//     title: 'Initial Commit',
//     intro: 'The first blog post, the christening event without the champagne.',
//     body: '', // used in blog detail
//   },
//   {
//     date: new Date('2024/02/07'),
//     title: 'Not a real blogpost',
//     intro: 'The closest thing to lorem ipsum without being lorem ipsum',
//     body: '',
//   },
// ]

function Blog() {
  const { isLoading, blogs, error } = useBlogs()

  console.log(isLoading, error)
  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        <FunHeading>Blog!</FunHeading>
        <SubTitle>A rest stop for passing thoughts</SubTitle>
        <Rule type='bold' />
        <ListContainer>
          {isLoading ? <Loader /> : blogs?.map(blog => <BlogCard key={blog.id} blogData={blog} />)}
        </ListContainer>
      </MainContainer>
    </FullScreenBackground>
  )
}

export default Blog
