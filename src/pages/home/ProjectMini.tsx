import styled from 'styled-components'

const StyledProjectMini = styled.div`
  height: 35rem;
  box-shadow: 0.3rem 0.3rem 0rem 0.3rem var(--color-accent),
    -0.3rem -0.3rem 0rem 0.3rem var(--color-accent);
`

function ProjectMini() {
  return <StyledProjectMini>ProjectMini</StyledProjectMini>
}

export default ProjectMini
