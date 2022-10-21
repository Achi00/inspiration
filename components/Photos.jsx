import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Photos = ({ photo: { image } }) => {
  return (
    <div>
      <h1>photos</h1>
      <div className='gallery-card'>
          {image?.map((item, i) => (
                        <img src={urlFor(item)}/>
                    ))}

        </div>
    </div>
  )
}

export default Photos