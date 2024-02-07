import styled from 'styled-components'

interface DateSquareProps {
  year: string
  monthday: string
}

const StyledDateSquare = styled.div``

const Year = styled.p`
  font-family: 'Chakra Petch', sans-serif;
`
const MonthDay = styled.p`
  font-family: 'Chakra Petch', sans-serif;
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
