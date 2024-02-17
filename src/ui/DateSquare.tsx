import styled from 'styled-components'
import { device } from '../styles/media'

interface DateSquareProps {
  year: string
  monthday: string
}

const StyledDateSquare = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-family: 'PT Serif', serif;
  font-style: italic;
  font-weight: 700;

  @media ${device.sm} {
    flex-direction: column;
    gap: 0;
  }
`

const Year = styled.p`
  font-size: 1.8rem;
  letter-spacing: -2px;

  @media ${device.sm} {
    font-size: 2.9rem;
    line-height: 0.8;
    letter-spacing: -3px;
    transform: scale(1.1, 1.3);
  }

  @media ${device.md} {
    font-size: 3.5rem;
    line-height: 0.8;
    letter-spacing: -3px;
  }
`
const MonthDay = styled.p`
  font-size: 1.8rem;
  letter-spacing: -2px;

  @media ${device.sm} {
    font-size: 2.6rem;
    line-height: 1.1;
    letter-spacing: -3.5px;
    transform: scaleX(1.1);
  }

  @media ${device.md} {
    font-size: 3.2rem;
    line-height: 0.8;
    letter-spacing: -3px;
  }
`

function DateSquare({ year, monthday }: DateSquareProps) {
  return (
    <StyledDateSquare>
      <Year>{year}</Year>
      <MonthDay>{monthday}</MonthDay>
    </StyledDateSquare>
  )
}

export default DateSquare
