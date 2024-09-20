import React from 'react'

function Albumspopular({imgUrl,name,caption}) {
  return (
     <>
      <div className="album-info">
        <div className="album-img">
            <img src={imgUrl} alt="" />
        </div>
        <div className="album-name">
            <p className='name'>{name}</p>
            <span className='Caption'>{caption}</span>
        </div>
        </div>
     </>

  )
}

export default Albumspopular