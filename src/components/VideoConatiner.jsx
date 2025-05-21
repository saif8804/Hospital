import React from 'react'

const VideoConatiner = () => {
  return (
   <div >
     <video
        className="w-screen aspect-video"
        src="https://www.apollohospitals.com/sites/default/files/2025-01/Banner_Loop_x_ver_5x720.mp4"
        autoPlay
        muted
        loop
        controls={false}
      />
    </div>
  )
}

export default VideoConatiner