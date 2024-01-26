import styled from 'styled-components'
import BlogMini from './BlogMini'
import ProjectMini from './ProjectMini'

const StyledFeatured = styled.div``

// TODOS: build blogmini and projectmini components. I'm thinking
// they be styled as cards, side by side (vertical in mobile view)
// with a short summary of the featured blogposts and projects
function Featured() {
  return (
    <StyledFeatured>
      <BlogMini />
      <ProjectMini />
    </StyledFeatured>
  )
}

export default Featured
