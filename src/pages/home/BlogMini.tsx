import styled from 'styled-components'
import Button from '../../ui/Button'
import ButtonBox from '../../ui/ButtonBox'

const StyledBlogMini = styled.div`
  height: 35rem;
  padding: 0 4rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // dashed border
  /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23D8E9A8FF' stroke-width='4' stroke-dasharray='15%2c 15%2c 1' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"); */
`

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
  max-width: 20rem;
  color: var(--color-accent);
`

function BlogMini() {
  return (
    <StyledBlogMini>
      <CopyBox>
        <H1>Featured Blog</H1>
        <BlogTitle>Title of blogpost featured</BlogTitle>
        <CopyText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem quod harum
          dolores nostrum sapiente quis asperiores aliquam non qui? Dolorum ipsum maxime facilis
          nulla, ex officiis.
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
    </StyledBlogMini>
  )
}

export default BlogMini
