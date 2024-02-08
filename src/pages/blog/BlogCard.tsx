import styled from 'styled-components'
import DateSquare from '../../ui/DateSquare'
import HeadingSimple from '../../ui/HeadingSimple'

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

const BlogIntro = styled.p`
  max-width: 35rem;
`

function BlogCard() {
  return (
    <StyledBlogCard>
      <DateSquare year='2024' monthday='02/07' />
      <BlogCardBox>
        <HeadingSimple>Title of the Post!</HeadingSimple>
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
