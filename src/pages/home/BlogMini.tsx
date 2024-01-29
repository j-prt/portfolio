import styled from 'styled-components'

const StyledBlogMini = styled.div`
  height: 35rem;
  /* box-shadow: 0.3rem 0.3rem 0rem 0.3rem var(--color-accent),
    -0.3rem -0.3rem 0rem 0.3rem var(--color-accent); */
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &::before {
    /* content: '';
    position: absolute;
    inset: 0px;
    border: 0.8rem solid;
    border-image: linear-gradient(-25deg, var(--color-accent) 20%, #0000 80%, var(--color-accent) 0)
      10; */

    /* content: '';
    position: absolute;
    inset: -10px;
    border: 0.8rem solid #0000;
    border-image: linear-gradient(
        -45deg,
        var(--color-accent) 20%,
        #0000 0 80%,
        var(--color-accent) 0
      )
      10; */
  }

  &::after {
  }

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
  height: 10rem;
`

const H1 = styled.h1`
  grid-column: 2 / 4;
  font-size: 4.5rem;
  font-family: 'Zilla Slab', serif;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 3.5px;
  line-height: 0.8;
  color: var(--color-accent);
  text-shadow: 0 2.4rem 3.2rem rgba(255, 255, 255, 0.25);
  z-index: 1;
`

function BlogMini() {
  return (
    <StyledBlogMini>
      <CopyBox>
        <H1>
          Featured
          <br />
          Blog
        </H1>
      </CopyBox>
      <BlogImg />
    </StyledBlogMini>
  )
}

export default BlogMini
