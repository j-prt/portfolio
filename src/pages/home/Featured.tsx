import styled from 'styled-components'
import BlogMini from './BlogMini'
import ProjectMini from './ProjectMini'

const StyledFeatured = styled.section`
  background-color: var(--color-blue);
`

const FeatureBox = styled.div`
  max-width: 70rem;
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`

const Rule = styled.div`
  margin: 6rem 6rem;
  border-bottom: 1px solid rgba(228, 240, 194, 0.7); // color-accent-light
  box-shadow: 0rem 0rem 2.5rem 0.2rem var(--color-accent);
`

function Featured() {
  return (
    <StyledFeatured>
      <FeatureBox>
        <BlogMini />
        <Rule />
        <ProjectMini />
      </FeatureBox>
    </StyledFeatured>
  )
}

export default Featured
