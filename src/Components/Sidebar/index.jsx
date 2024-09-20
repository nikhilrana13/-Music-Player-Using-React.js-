import React from 'react'
import Logo from '../../assets/Icons/Medea Full Logo.png'
import LibraryIcon from '../../assets/Icons/View grid.png'
import SearchIcon from '../../assets/Icons/Search.png'
import HomeIcon from '../../assets/Icons/Icon.png'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <>
     <div className='side-barbox'>
        <div className="logo">
            <img src={Logo} alt="Logo" />
        </div>
        <div className='Contents'>
            <div className="Home-box">
            <img src={SearchIcon} alt="Search" />
            <Link to='/Search'>
              <input type='Search' placeholder='Search'></input>
            </Link>
            </div>
            <div className="Library-box">
            <img src={HomeIcon} alt="library " />
            <Link to="/">Home</Link>
            </div>
            <div className="Songs-box">
            <i class="fa-solid fa-music"></i>
            <Link to='/Songs'>Your Songs</Link>
            </div>


        </div>
        <hr></hr>
    </div>
       <div className="welcome-box">
              <div className="welcome-content">
              <Link to="/"><img src={HomeIcon} alt="" /></Link>
              <span>Welcome to Medea!</span>
              </div>
              
       </div>

    </>
   
  )
}

export default Sidebar