import { useEffect, useState } from 'react'

const useChannelMovie = (API) => {
  const [ tvShows, setTvShows] = useState([])
  useEffect(() => {
      fetch(API)
      .then(response => response.json())
      .then(data => setTvShows(data))
  }, [])
  return tvShows
}

export default useChannelMovie