import Button from '../../ui/Button'
import ButtonBox from '../../ui/ButtonBox'
import FeaturedContainer from '../../ui/FeaturedContainer'
import FeaturedImg from '../../ui/FeaturedImg'
import CopyBox from '../../ui/CopyBox'
import FunHeading from '../../ui/FunHeading'
import TextQuote from '../../ui/TextQuote'
import SubTitle from '../../ui/SubTitle'
import { Link } from 'react-router-dom'

function BlogMini() {
  return (
    <FeaturedContainer>
      <FeaturedImg $side='left' $brightness='dark' $imgUrl='./public/notebook.jpg' />
      <CopyBox>
        <FunHeading width='shared'>Featured Blog</FunHeading>
        <SubTitle>Title of blogpost featured</SubTitle>
        <TextQuote $colorPalette='blue'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem quod harum
          dolores nostrum sapiente quis asperiores aliquam non qui? Dolorum ipsum maxime facilis
          nulla, ex officiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </TextQuote>
        <ButtonBox>
          <Button $styleType='primary'>Read On</Button>
          <Link to='/blog'>
            <Button $styleType='secondary'>All Posts</Button>
          </Link>
        </ButtonBox>
      </CopyBox>
    </FeaturedContainer>
  )
}

export default BlogMini
