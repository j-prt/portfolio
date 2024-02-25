import { useRef } from 'react'
import ContactMini from './ContactMini'
import Featured from './Featured'
import Hero from './Hero'

function Home() {
  const contactRef = useRef(null)
  return (
    <div>
      <Hero contactRef={contactRef} />
      <Featured />
      <ContactMini ref={contactRef} />
    </div>
  )
}

export default Home
