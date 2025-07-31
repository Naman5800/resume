import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'

const RightSider = () => {
  return (
    <div className='fixed top-0 left-0 h-screen align-middle'>
      <FaInstagram />
      <FaGit />
    </div>
  )
}

export default RightSider
