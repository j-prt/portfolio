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
      <FeaturedImg $side='left' $brightness='dark' src='/notebook.webp' />
      <CopyBox>
        <FunHeading width='shared'>Featured Blog</FunHeading>
        <SubTitle>Metablog: Making This Site</SubTitle>
        <TextQuote $colorPalette='blue'>
          It feels like making a personal website is something that was on my to-do list forever.
          Since before I learned to code, even. Having ‘my own space’ on the internet appealed to me
          back in my teen years, on some site whose name we’ve probably all forgotten.
        </TextQuote>
        <ButtonBox>
          <Link to='/blog/4'>
            <Button $styleType='primary'>Read On</Button>
          </Link>
          <Link to='/blog'>
            <Button $styleType='secondary'>All Posts</Button>
          </Link>
        </ButtonBox>
      </CopyBox>
    </FeaturedContainer>
  )
}

export default BlogMini
