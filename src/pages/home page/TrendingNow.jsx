import React from 'react'

export default function TrendingNow({image,title,Category,afterPrice}) {
  return (
    <div className='TrendingNow'>
        <img src={image} />
        <p>{title}</p>
        <p>{Category}</p>
        <p>{afterPrice}</p>
    </div>
  )
}
