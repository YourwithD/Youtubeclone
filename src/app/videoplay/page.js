import React from 'react';

const VideoPlay = () => {
  return (
    <div>
      
      <video width="900" height="660" controls className='rounded-2xl '>
        <source src="/video.mp4" type="video/mp4"  />
        
      </video>
    </div>
  );
};

export default VideoPlay;