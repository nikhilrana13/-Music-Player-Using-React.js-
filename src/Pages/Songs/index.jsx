import React, { useEffect, useState } from 'react'
import Navigation from '../../Components/Navigation/index'
import Songsheader from '../../Components/SongsContainer/Songsheader'
import './Songs.css'
import { SongsList } from '../../assets/data/data'
import SongCard from '../../Components/SongsContainer/SongCard'
import Audioplayer from '../../Components/Audioplayer'


function Songs() {
    const[currentsong,setCurrentsong] = useState(null);
    const [searchInput,setSearchInput] = useState('')
    const [filteredsongs,setfilteredsongs] = useState(SongsList)

    const handlesearch = (Input)=>{
        setSearchInput(Input)
    }
   

    const handlefilter = () => {
        if(!searchInput){
              console.log("Current search:", searchInput);
            return SongsList
        }

        const results = SongsList.filter((data)=>{
            return data.name.toLowerCase().includes(searchInput.toLowerCase())
        })

        return results;
    }

    useEffect(()=>{
        setfilteredsongs(handlefilter(SongsList))
    },[searchInput])





    const handleSongSelect = (songpath)=>{
        setCurrentsong(songpath);
        // console.log('Current song:', songpath);
    }


  return (
    <div className='Home-container'>
        <div className="side-bar">
                    <Navigation />
                </div>
         <div className="main-body">
            <Songsheader handleinput={handlesearch}/>
            <div className="Songs-cards">
                <h3>Your Playlist</h3>
                <div className="all-Songs-cards-box">
                {
                    filteredsongs.map((data,index) => {
                        return(
                            <SongCard
                            Songid={data.id}
                            Songimg={data.imguri}
                            albumname={data.album}
                            titlename={data.artist}
                            artistname={data.artist}
                            Duration={data.time}
                            key={index}
                            playsong={() => handleSongSelect(data.songpath)}
                        />
                        )
                           
                    })
                }

                </div>
            </div>
            
                      <div div className="audio-player-card">
                      {currentsong && (
                        <Audioplayer 
                            Songpath={currentsong} key={currentsong}
                        />
                    )}
          
                      </div>
         </div>     
               
    </div>
  )
}

export default Songs