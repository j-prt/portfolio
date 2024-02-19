import { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { device } from '../styles/media'

interface ImgProps {
  url: string
}

interface ArrowProps {
  side: 'left' | 'right'
}

const StyledCarousel = styled.div`
  position: relative;
  width: 100%;
  max-width: 35rem;
  aspect-ratio: 35/24;
  padding: 1rem 1rem;

  border: 0.5px solid var(--color-accent);
  box-shadow: 0rem 0rem 0.4rem 0rem var(--color-accent);
  background-color: rgba(var(--color-secondary-med-rgb), 0.3);
  border-radius: var(--border-radius-md);

  @media ${device.sm} {
    width: 35rem;
    height: 24rem;
    padding: 2rem 2rem;
  }

  @media ${device.md} {
    max-width: 45rem;
    width: 45rem;
    height: 30rem;
  }
`

const CarouselImg = styled.div<ImgProps>`
  position: relative;
  /* height: 26rem; */
  /* width: 40rem; */
  height: 100%;
  width: 98%;
  margin: auto;
  ${props => `background-image: url(${props.url})`};

  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-sm);
  transition: background-image 0.3s;

  &:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: linear-gradient(
      rgba(var(--color-secondary-med-rgb), 0.2),
      rgba(var(--color-secondary-med-rgb), 0.2)
    );
  }
  /* background-repeat: no-repeat; */
  /* flex: 1 0 100%; */
`

const Arrow = styled.p<ArrowProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scaleY(1.5);
  font-size: 1rem;
  color: var(--color-accent);
  cursor: pointer;

  ${props => (props.side == 'left' ? 'left: 2px' : 'right: 2px')};

  @media ${device.sm} {
    font-size: 2rem;
    transform: translateY(-50%) scaleY(1);
  }
`

const imgs = ['public/getrecd1.jpg', 'public/getrecd2.jpg']

function Carousel() {
  const [urlIndex, setUrlIndex] = useState(0)

  function handleClickBack() {
    if (urlIndex === 0) {
      setUrlIndex(imgs.length - 1)
    } else {
      setUrlIndex(index => index - 1)
    }
  }

  function handleClickForward() {
    if (urlIndex === imgs.length - 1) {
      setUrlIndex(0)
    } else {
      setUrlIndex(index => index + 1)
    }
  }

  return (
    <StyledCarousel>
      <Arrow side='left' onClick={handleClickBack}>
        <IoIosArrowBack />
      </Arrow>
      <Arrow side='right' onClick={handleClickForward}>
        <IoIosArrowForward />
      </Arrow>
      <CarouselImg url={imgs[urlIndex]} />
      {/* <CarouselImg style={{ backgroundImage: `url(${imgs[urlIndex]})` }} /> */}
    </StyledCarousel>
  )
}

export default Carousel
