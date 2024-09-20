import React, { useState } from 'react'
import SearchIcon from '../../assets/Icons/Search.png'

function Songsheader({handleinput}) {
  const[Input,SearchInput]= useState('')
  console.log(Input)

  const InputChange=(e)=>{
      SearchInput(e.target.value)
      handleinput(e.target.value)
  }


  return (
    <div className='Search-Input-box'>
    <div className="input-field">
        <img src={SearchIcon} alt="" />
        <input type="text" onChange={InputChange} value={Input} placeholder='Search'  />
    </div>
</div>
  )
}

export default Songsheader