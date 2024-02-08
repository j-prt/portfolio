import styled from 'styled-components'

const StyledCarousel = styled.div`
  width: 45rem;
  height: 30rem;
  background-color: #999;

  border: 1px solid var(--color-accent);
  box-shadow: 0rem 0rem 0.4rem 0rem var(--color-accent);
  background-color: rgba(28, 21, 57, 0.3);
  border-radius: var(--border-radius-md);
`

const CarouselItem = styled.div``

function Carousel() {
  return <StyledCarousel>Carousel</StyledCarousel>
}

export default Carousel
