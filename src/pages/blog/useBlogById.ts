import { useQueryClient } from '@tanstack/react-query'
import { BlogData } from '../../types'
import { getOneBlog } from '../../utils/supabase'
import { useEffect, useState } from 'react'

export function useBlogById(id: number) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [blog, setBlog] = useState<BlogData>()
  const queryClient = useQueryClient()
  const allBlogs: BlogData[] | undefined = queryClient.getQueryData(['blogs'])
  const cachedBlog = allBlogs?.find(blog => blog.id === id)

  useEffect(() => {
    async function fetchOneBlog() {
      const newBlog = await getOneBlog(id)
      setIsLoading(false)
      setBlog(newBlog)
    }
    if (cachedBlog) {
      setIsLoading(false)
      setBlog(cachedBlog)
    } else {
      fetchOneBlog()
    }
  }, [id, cachedBlog])

  return { isLoading, blog }
}

// export function useBlogById(id: number) {
//     const queryClient = useQueryClient()
//     const allBlogs: BlogData[] | undefined = queryClient.getQueryData(['blogs'])
//     const blog = allBlogs?.find(blog => blog.id === id)
//     if (blog) return blog

//     return getOneBlog(id)
//   }

// function useGetOneBlog() {
//     const {
//       isLoading,
//       data: blog,
//       error,
//     } = useQuery({
//       queryKey: ['blogs'],
//       queryFn: () => getOneBlog(id),
//     })

//     return { isLoading, error, blog }
// }
