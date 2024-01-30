import styled from 'styled-components'
import Button from '../../ui/Button'
import ButtonBox from '../../ui/ButtonBox'
import FeaturedContainer from '../../ui/FeaturedContainer'
import FeaturedImg from '../../ui/FeaturedImg'
import CopyBox from '../../ui/CopyBox'
import FunHeader from '../../ui/FunHeader'

const BlogTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 4px;
  color: var(--color-accent-dark);
`

const CopyText = styled.p`
  max-width: 30rem;
  border-left: 3px solid var(--color-accent-dark);
  background-color: rgba(28, 21, 57, 0.25);
  padding: 0.5rem 1rem;
  color: var(--color-accent);
`

function BlogMini() {
  return (
    <FeaturedContainer>
      <CopyBox>
        <FunHeader side='left'>Featured Blog</FunHeader>
        <BlogTitle>Title of blogpost featured</BlogTitle>
        <CopyText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem quod harum
          dolores nostrum sapiente quis asperiores aliquam non qui? Dolorum ipsum maxime facilis
          nulla, ex officiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          exercitationem quod harum dolores nostrum sapiente quis asperiores aliquam non qui?
          Dolorum ipsum maxime facilis nulla, ex officiis.
        </CopyText>
        <ButtonBox>
          <Button onPress={() => {}} $styleType='primary'>
            Read On
          </Button>
          <Button onPress={() => {}} $styleType='secondary'>
            All Posts
          </Button>
        </ButtonBox>
      </CopyBox>
      <FeaturedImg side='right' imgUrl='./public/notebook.jpg' />
    </FeaturedContainer>
  )
}

export default BlogMini
