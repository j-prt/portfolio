import styled from 'styled-components'
import BlogMini from './BlogMini'
import ProjectMini from './ProjectMini'

const StyledFeatured = styled.section`
  height: 120rem;
  background-image: linear-gradient(
    var(--color-accent-light),
    var(--color-blue) 15%,
    var(--color-blue) 85%,
    var(--color-accent-light)
  );
`

const FeatureBox = styled.div`
  max-width: 70rem;
  padding: 20rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`

const Rule = styled.div`
  margin: 4rem 2rem;
  border-bottom: 1px solid rgba(228, 240, 194, 0.7); // color-accent-light
  box-shadow: 0rem 0rem 2.5rem 0.2rem var(--color-accent);
`

// TODOS: build blogmini and projectmini components. I'm thinking
// they be styled as cards, side by side (vertical in mobile view)
// with a short summary of the featured blogposts and projects
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
