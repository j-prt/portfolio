import ContactMini from './ContactMini'
import Featured from './Featured'
import Hero from './Hero'

// TODO: Media queries, adjust X padding levels on container elements
// and look at tweaking the Y padding (gap, marg bottoms) within elements

function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <ContactMini />
    </div>
  )
}

export default Home
