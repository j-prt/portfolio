import styled from 'styled-components'
import BlogMini from './BlogMini'
import ProjectMini from './ProjectMini'

const StyledFeatured = styled.section`
  height: 100rem;
  background-image: linear-gradient(
    var(--color-accent-light),
    var(--color-blue) 20%,
    var(--color-blue) 80%,
    var(--color-accent-light)
  );
`

const FeatureBox = styled.div`
  max-width: 70rem;
  padding: 2rem 4rem;
  display: flex;
`

// TODOS: build blogmini and projectmini components. I'm thinking
// they be styled as cards, side by side (vertical in mobile view)
// with a short summary of the featured blogposts and projects
function Featured() {
  return (
    <StyledFeatured>
      <FeatureBox>
        <BlogMini />
        <ProjectMini />
      </FeatureBox>
    </StyledFeatured>
  )
}

export default Featured
