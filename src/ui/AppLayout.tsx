import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const StyledAppLayout = styled.div`
  position: relative;
`

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledAppLayout>
  )
}

export default AppLayout
