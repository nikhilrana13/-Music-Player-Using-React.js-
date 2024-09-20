import React from 'react'
import { Link } from 'react-router-dom'



function BrowseCard({imgURI,title, bgColor,genrelink}){
    return(
        
        <Link to={genrelink || '#'}>
             <div className='w-64 h-36 rounded-lg relative overflow-hidden'
            style={{ background: bgColor }}>
            <span className='text-2xl text-[#fefefe] font-bold absolute top-2 left-2'>{title}</span>
            <img src={imgURI} alt=''
                className='w-24 h-24 absolute -bottom-2 -right-4 rotate-[30deg]'
            />
        </div>

        </Link>
       
    )

  
}

export default BrowseCard