import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'

import Home from './pages/home/Home'
import AppLayout from './ui/AppLayout'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import About from './pages/About'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='blog' element={<Blog />} />
            <Route path='projects' element={<Projects />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
