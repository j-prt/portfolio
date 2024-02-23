import HeadingSimple from '../../ui/HeadingSimple'
import FullScreenBackground from '../../ui/FullScreenBackground'
import MainContainer from '../../ui/MainContainer'
import DateLine from '../../ui/DateLine'
import Paragraph from '../../ui/Paragraph'
import styled from 'styled-components'
import { IoMdArrowBack } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import { useBlogById } from './useBlogById'

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
// const blog: BlogData = {
//   date: new Date('2024/02/13'),
//   title: 'Initial Commit',
//   intro: '', // used in the /blog route
//   body: `Great title for an inaugural blogpost, right?
//   I like the idea of blogging, but I haven't decided on a structure or a framework. I have a loose set of goals, but no project requirements. Mainly, I wanted to practise designing pages and layouts — that's what got me to make this site. I expect most posts will be fairly short impressions on media or reflections on something I learned recently.
//   Thanks for dropping by.`,
//   id: 2342,
// }

// TODO
// URL slugs

function BlogDetail() {
  const { id } = useParams()
  const { isLoading, blog } = useBlogById(Number(id))

  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        <Back>
          <Link to='/blog'>
            <IoMdArrowBack />
          </Link>
        </Back>
        {isLoading || !blog ? (
          <div></div>
        ) : (
          <>
            <DateLine>
              {new Date(blog.date)
                .toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                })
                .toUpperCase()}
            </DateLine>
            <HeadingSimple>{blog.title}</HeadingSimple>
            <Content>
              {blog.body.split('\n').map((p, i) => (
                <Paragraph key={i}>{p}</Paragraph>
              ))}
            </Content>
          </>
        )}
      </MainContainer>
    </FullScreenBackground>
  )
}

export default BlogDetail
