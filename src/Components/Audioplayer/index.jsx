import React, { useEffect,useRef } from 'react'
import './Audio.css'

function Audioplayer({Songpath}) {
    const audioRef = useRef(null);

    useEffect(()=>{
        if(audioRef.current){
            audioRef.current.load();
            audioRef.current.play();
        }
    },[Songpath])

  return (
    <>
    <div className='audio-player'>
            <h2>Audio Player</h2>
            <audio controls>
                <source src={Songpath} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
        </div>
    </>
  )
}

export default Audioplayer