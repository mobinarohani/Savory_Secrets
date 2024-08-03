import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../img/video.mp4'
export default function VideoPlayer({playState,setPlayState}) {
    const player=useRef(null)

    const closePlayer=(e)=>{
        if(e.target===player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`videoPlayer ${playState ?'':'hide'}`} ref={player} onClick={(e)=>closePlayer(e)}>
        <video src={video} autoPlay muted controls ></video>
    </div>
  )
}
