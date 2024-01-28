import styled from 'styled-components'
import BlogMini from './BlogMini'
import ProjectMini from './ProjectMini'

const StyledFeatured = styled.section`
  height: 50rem;
  /* background-color: var(--color-secondary); */
  background-image: linear-gradient(
    var(--color-main-dark) 5%,
    var(--color-secondary-med) 10%,
    var(--color-secondary-lighter) 50%,
    var(--color-secondary-med),
    var(--color-main-dark) 95%
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
