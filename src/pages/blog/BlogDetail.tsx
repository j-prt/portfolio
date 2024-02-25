import HeadingSimple from '../../ui/HeadingSimple'
import FullScreenBackground from '../../ui/FullScreenBackground'
import MainContainer from '../../ui/MainContainer'
import DateLine from '../../ui/DateLine'
import Paragraph from '../../ui/Paragraph'
import styled from 'styled-components'
import { IoMdArrowBack } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import { useBlogById } from '../../hooks/useBlogById'

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
