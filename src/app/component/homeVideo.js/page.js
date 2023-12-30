
import { getPopularVideos } from '@/app/redux/actions/video.action'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'


const HomeVideo = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getPopularVideos())
  }, [dispatch])
  return (
    <div>
        homevideo hare to start back to back start
        
    </div>
  )
}

export default HomeVideo






