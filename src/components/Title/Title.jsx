import React from 'react'
import './Title.css'
export default function Title({subTitle}) {
  return (
    <div className='title container'>
        <p>{subTitle}</p>
    </div>
  )
}
