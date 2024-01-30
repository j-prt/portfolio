import styled from 'styled-components'
import Button from '../../ui/Button'
import ButtonBox from '../../ui/ButtonBox'
import FeaturedContainer from '../../ui/FeaturedContainer'

const BlogImg = styled.div`
  height: 26rem;
  width: 18rem;
  background-image: linear-gradient(rgba(40, 30, 81, 0.55), rgba(40, 30, 81, 0.55)),
    url('./public/notebook.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: 1rem -1rem 0rem var(--color-accent);
  border-radius: var(--border-radius-sm);
`

const CopyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

const H1 = styled.h1`
  color: var(--color-blue-med);
  position: relative;
  font-size: 4.5rem;
  font-family: 'Zilla Slab', serif;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.5px;
  line-height: 1.2;
  z-index: 1;
  margin-bottom: 1rem;

  // Background highlighter effect
  &::after {
    position: absolute;
    content: '';
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(var(--color-accent), var(--color-accent));
    transform: translateY(5px) skew(-8deg, -1.5deg) scale(1.15);
    border-radius: var(--border-radius-sm);
  }
`

const BlogTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 4px;
  color: var(--color-accent-dark);
`

const CopyText = styled.p`
  max-width: 30rem;
  border-left: 3px solid var(--color-accent-dark);
  background-color: rgba(28, 21, 57, 0.25);
  padding: 0.5rem 1rem;
  color: var(--color-accent);
`

function BlogMini() {
  return (
    <FeaturedContainer>
      <CopyBox>
        <H1>Featured Blog</H1>
        <BlogTitle>Title of blogpost featured</BlogTitle>
        <CopyText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem quod harum
          dolores nostrum sapiente quis asperiores aliquam non qui? Dolorum ipsum maxime facilis
          nulla, ex officiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          exercitationem quod harum dolores nostrum sapiente quis asperiores aliquam non qui?
          Dolorum ipsum maxime facilis nulla, ex officiis.
        </CopyText>
        <ButtonBox>
          <Button onPress={() => {}} $styleType='primary'>
            Read On
          </Button>
          <Button onPress={() => {}} $styleType='secondary'>
            All Posts
          </Button>
        </ButtonBox>
      </CopyBox>
      <BlogImg />
    </FeaturedContainer>
  )
}

export default BlogMini
