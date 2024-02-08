import styled from 'styled-components'
import DateSquare from '../../ui/DateSquare'

const StyledBlogCard = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  padding-bottom: 3rem;

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

const BlogTitle = styled.p`
  font-size: 3rem;
  font-family: 'Zilla Slab', serif;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 1px;
`

const BlogIntro = styled.p`
  width: 35rem;
`

function BlogCard() {
  return (
    <StyledBlogCard>
      <DateSquare year='2024' monthday='02/07' />
      <BlogCardBox>
        <BlogTitle>Title of the Post!</BlogTitle>
        <BlogIntro>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consectetur ad illo.
          Veniam quod recusandae sunt dolore, ab sint esse deserunt ex odit aperiam rerum, debitis
          suscipit, tempore magnam dicta!
        </BlogIntro>
      </BlogCardBox>
    </StyledBlogCard>
  )
}

export default BlogCard
