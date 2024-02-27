import { useEffect, useState } from 'react'

function useLoadImg(src: string) {
  const [imgIsLoading, setImgIsLoading] = useState<boolean>(true)
  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setImgIsLoading(false)
  }, [src])

  return imgIsLoading
}

export default useLoadImg
