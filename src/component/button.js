import React from 'react'

const Button = ({primary, title}) => {
  return (
    <>
        <button className='bg-red-600 text-white hover:bg-black px-6 py-2 tracking-wider font-bold mt-4 w-55 h-10 mx-80'>{title}</button>      
    </>
  )
}

export default Button