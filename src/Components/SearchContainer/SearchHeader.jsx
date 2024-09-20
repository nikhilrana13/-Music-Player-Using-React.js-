import React, { useState } from 'react'
import SearchIcon from '../../assets/Icons/Search.png'

function SearchHeader({handlesearch}) {
  const[input,setInput] = useState('')
  console.log(input)

  const handleInputChange =(e)=>{
    setInput(e.target.value)
    handlesearch(e.target.value)

  }
 

  return (
    <div className='Search-Input-box'>
        <div className="input-field">
            <img src={SearchIcon} alt="" />
            <input type="text" onChange={handleInputChange} value={input}  placeholder='Search'  />
        </div>
    </div>
  )
}

export default SearchHeader