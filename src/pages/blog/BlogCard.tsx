import styled from 'styled-components'
import DateSquare from '../../ui/DateSquare'
import HeadingSimple from '../../ui/HeadingSimple'
import { BlogData } from '../../types'
import { device } from '../../styles/media'

interface BlogCardProps {
  blogData: BlogData
}

const StyledBlogCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  text-align: center;
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

  @media ${device.sm} {
    flex-direction: row;
    gap: 2.5rem;
    text-align: left;
  }

  @media ${device.md} {
    gap: 4rem;
  }
`

const BlogCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${device.md} {
    gap: 1.5rem;
  }
`

const BlogIntro = styled.p`
  max-width: 35rem;
`

function BlogCard({ blogData }: BlogCardProps) {
  const dateStringRaw = new Date(blogData.date)
  const dateString = dateStringRaw.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  return (
    <StyledBlogCard>
      <DateSquare year={dateString.slice(-4)} monthday={dateString.slice(0, 5)} />
      <BlogCardBox>
        <HeadingSimple>{blogData.title}</HeadingSimple>
        <BlogIntro>{blogData.intro}</BlogIntro>
      </BlogCardBox>
    </StyledBlogCard>
  )
}

export default BlogCard
