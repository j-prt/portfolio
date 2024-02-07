import styled from 'styled-components'

interface DateSquareProps {
  year: string
  monthday: string
}

const StyledDateSquare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`

const Year = styled.p`
  font-family: 'Zilla Slab', serif;
  font-family: 'Train One';
  font-family: 'PT Serif', serif;
  font-weight: 700;
  font-style: italic;
  font-size: 3.5rem;
  line-height: 0.8;
  letter-spacing: -3px;
  transform: scale(1.1, 1.3);
`
const MonthDay = styled.p`
  font-family: 'Zilla Slab', serif;
  font-family: 'Train One';
  font-family: 'PT Serif', serif;
  font-weight: 700;
  font-style: italic;
  font-size: 3.2rem;
  line-height: 1.1;
  letter-spacing: -3.5px;
  transform: scaleX(1.1);
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
