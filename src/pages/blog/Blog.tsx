import styled from 'styled-components'
import { BlogData } from '../../types'
import FullScreenBackground from '../../ui/FullScreenBackground'
import FunHeader from '../../ui/FunHeading'
import MainContainer from '../../ui/MainContainer'
import Rule from '../../ui/Rule'
import SubTitle from '../../ui/SubTitle'
import BlogCard from './BlogCard'

const blogs: BlogData[] = [
  {
    year: '2024',
    monthday: '02/13',
    title: 'Initial Commit',
    intro: 'The first blog post, the christening event without the champagne.',
  },
  {
    year: '2024',
    monthday: '02/07',
    title: 'Not a real blogpost',
    intro: 'The closest thing to lorem ipsum without being lorem ipsum',
  },
]

const BlogPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`

function Blog() {
  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        <FunHeader>Blog!</FunHeader>
        <SubTitle>A rest stop for passing thoughts</SubTitle>
        <Rule type='bold' />
        <BlogPosts>
          <BlogCard blogdata={blogs[0]} />
          <BlogCard blogdata={blogs[1]} />
        </BlogPosts>
      </MainContainer>
    </FullScreenBackground>
  )
}

export default Blog
