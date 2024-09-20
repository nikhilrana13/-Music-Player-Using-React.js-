import React from 'react'
import Navigation from '../../Components/Navigation/index'
import './Style.css'
import Header from '../../Components/Header'
import ArtistContent from '../../Components/ArtistContents'




function Home() {
  return (
    <div className='Home-container'>
        <div className="side-bar">
            <Navigation />
        </div>
        <div className="main-body">
            <Header />
            <ArtistContent />
        </div>
    </div>
  )
}

export default Home
