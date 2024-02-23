import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'

import Home from './pages/home/Home'
import AppLayout from './ui/AppLayout'
import Projects from './pages/projects/Projects'
import Blog from './pages/blog/Blog'
import About from './pages/About'
import BlogDetail from './pages/blog/BlogDetail'
import ScrollToTop from './utils/ScrollToTop'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='blog' element={<Blog />} />
            <Route path='blog/:id' element={<BlogDetail />} />
            <Route path='projects' element={<Projects />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
