import HeadingSimple from '../../ui/HeadingSimple'
import FullScreenBackground from '../../ui/FullScreenBackground'
import MainContainer from '../../ui/MainContainer'
import DateLine from '../../ui/DateLine'
import Paragraph from '../../ui/Paragraph'
import styled from 'styled-components'
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Back = styled.div`
  width: 100%;
  max-width: 55rem;
  position: sticky;
  margin-left: 2rem;
  top: 8rem;

  font-size: 2rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

// TODO: write blogs. Also data will be served from backend
// as json, so the entire logic here needs to be implemented.
function BlogDetail() {
  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        <Back>
          <Link to='/blog'>
            <IoMdArrowBack />
          </Link>
        </Back>
        <DateLine>FEB 13 2024</DateLine>
        <HeadingSimple>Initial Commit</HeadingSimple>
        <Content>
          <Paragraph>Great title for an inaugural blogpost, right?</Paragraph>
          <Paragraph>
            I like the idea of blogging, but I haven&apos;t decided on a structure or a framework. I
            have a loose set of goals, but no project requirements. Mainly, I wanted to practise
            designing pages and layouts — that&apos;s what got me this far. I expect most posts will
            be fairly short impressions on media or reflections on something I learned recently.
          </Paragraph>
          <Paragraph>Thanks for dropping by.</Paragraph>
        </Content>
      </MainContainer>
    </FullScreenBackground>
  )
}

export default BlogDetail
