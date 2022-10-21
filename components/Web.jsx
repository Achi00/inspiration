import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Web = ({ web: { image, name, slug, details, detailsImg} }) => {
  return (
    <div>
      <Link href={`/web/${slug.current}`}>
        <div className='art-card'>
          <img 
          src={urlFor(image && image[0])} 
          width={350} 
          height={350} 
          className="art-image"
          />
          <p className='art-name'>{name}</p>
          <p className='art-details'>{details}</p>
        </div>
      </Link>
    </div>
  )
}

export default Web