import HeadingSimple from '../../ui/HeadingSimple'
import FullScreenBackground from '../../ui/FullScreenBackground'
import MainContainer from '../../ui/MainContainer'
import DateLine from '../../ui/DateLine'
import Paragraph from '../../ui/Paragraph'
import styled from 'styled-components'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useBlogById } from '../../hooks/useBlogById'

const Back = styled.div`
  width: 100%;
  max-width: 55rem;
  position: sticky;
  margin-left: 2rem;
  top: 8rem;

  font-size: 2rem;
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const SectionHeader = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: -0.75rem;
`

function BlogDetail() {
  const location = useLocation()
  const { id } = useParams()
  const { isLoading, blog } = useBlogById(Number(id))
  const navigate = useNavigate()

  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        <Back onClick={() => (location.key !== 'default' ? navigate(-1) : navigate('/blog'))}>
          <IoMdArrowBack />
        </Back>
        {isLoading ? (
          <div></div>
        ) : blog ? (
          <>
            <DateLine>
              {new Date(blog.date.replace(/-/g, '/'))
                .toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                })
                .toUpperCase()}
            </DateLine>
            <HeadingSimple>{blog.title}</HeadingSimple>
            <Content>
              {blog.body
                .split('\n\n')
                .map((p, i) =>
                  p.startsWith('##') ? (
                    <SectionHeader key={i}>{p.slice(2)}</SectionHeader>
                  ) : (
                    <Paragraph key={i}>{p}</Paragraph>
                  )
                )}
            </Content>
          </>
        ) : (
          'No blog here. How did you even find this page?'
        )}
      </MainContainer>
    </FullScreenBackground>
  )
}

export default BlogDetail
