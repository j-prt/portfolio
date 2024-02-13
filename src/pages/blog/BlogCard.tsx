import styled from 'styled-components'
import DateSquare from '../../ui/DateSquare'
import HeadingSimple from '../../ui/HeadingSimple'
import { BlogData } from '../../types'

interface BlogCardProps {
  blogdata: BlogData
}

const StyledBlogCard = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  padding-bottom: 5rem;

  &:not(:last-child) {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 10%;
      bottom: 0;
      width: 80%;
      border-bottom: 0.5px solid var(--color-accent-light);
    }
  }
`

const BlogCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const BlogIntro = styled.p`
  max-width: 35rem;
`

function BlogCard({ blogdata }: BlogCardProps) {
  return (
    <StyledBlogCard>
      <DateSquare year={blogdata.year} monthday={blogdata.monthday} />
      <BlogCardBox>
        <HeadingSimple>{blogdata.title}</HeadingSimple>
        <BlogIntro>{blogdata.intro}</BlogIntro>
      </BlogCardBox>
    </StyledBlogCard>
  )
}

export default BlogCard
