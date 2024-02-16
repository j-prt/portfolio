import styled from 'styled-components'
import BlogMini from './BlogMini'
import ProjectMini from './ProjectMini'
import Rule from '../../ui/Rule'
import { device } from '../../styles/media'

const StyledFeatured = styled.section`
  background-color: var(--color-secondary);
`

const FeatureBox = styled.div`
  max-width: var(--home-max-width);
  padding: 10rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;

  @media ${device.md} {
    padding: 10rem 2rem;
  }
`

function Featured() {
  return (
    <StyledFeatured>
      <FeatureBox>
        <ProjectMini />
        <Rule type='light' />
        <BlogMini />
      </FeatureBox>
    </StyledFeatured>
  )
}

export default Featured
