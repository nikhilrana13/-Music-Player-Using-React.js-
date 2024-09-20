import React from 'react'

function SongCard({Songimg,albumname,titlename,artistname,playsong,Duration,Songid}) {
  return (
    <div className='Card'>
        <div className="Song__id">{Songid}</div>
        <div className='Song__image'>
            <img src={Songimg} alt="" />
        </div>
        <div className="Song__info">
            <span className='Song__album'>{albumname}</span>
            <h2 className="Song__title">{titlename}</h2>
            <p className="Song__artist">{artistname}</p>
        </div>
        <div className="Song__duration">
            <span className='duration'>{Duration}</span>
        </div>
        <button className="play-button" onClick={playsong}>
        <i className="fa fa-play" aria-hidden="true"></i> Play</button>
    </div>
  )
}

export default SongCard