import React from 'react'

function Artists({imgUrl,name,occ,}) {
  return (
    <>
   
      <div className='artist-info'>
        <div className="artist-img">
            <img src={imgUrl} alt="" />
        </div>

        <div className="artist-name">
            <p className='name'>{name}</p>
            <span className='artist-occ'>{occ}</span>
        </div>
      </div>

    </>
    
  )
}

export default Artists