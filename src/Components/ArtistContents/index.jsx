import React from 'react'
import Artists from '../Artists'
import { popularArtists } from '../../assets/data/data'
import { popularAlbums } from '../../assets/data/data'
import Albumspopular from './popularalbums'


function ArtistContent() {
  return (
    <div className='Artist-Content'>
         <div className='heading'>
             <h3>Popular Artists</h3>
            <span className='show-all'>Show all</span>
             </div>
        <div className="popular-artists">
            {popularArtists.map((data,index) => (
                <Artists imgUrl={data.imguri} name={data.name} occ={data.type} key={index} />
            ))}
            </div>

        <div className="popular-albums-box">
            <h3>Popular Albums</h3>
            <div className="popular-albums">
                {
                    popularAlbums.map((data,index)=>{
                        return(
                         <Albumspopular imgUrl={data.imguri} name={data.name} caption={data.caption} key={index} />
                        )

                    })

                }
            </div>
        </div>


        </div>
  )
}

export default ArtistContent