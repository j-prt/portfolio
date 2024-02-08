import styled from 'styled-components'
import FullScreenBackground from '../../ui/FullScreenBackground'
import MainContainer from '../../ui/MainContainer'
import BlogCard from './BlogCard'

const Rule = styled.div`
  margin-bottom: 6rem;
  width: 85%;
  border-bottom: 1px solid var(--color-accent); // rgba(228, 240, 194, 0.7); // color-accent-light
  box-shadow: 0rem 0rem 2rem 0.05rem var(--color-accent);
`

function Blog() {
  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        Blog
        <Rule />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </MainContainer>
    </FullScreenBackground>
  )
}

export default Blog
