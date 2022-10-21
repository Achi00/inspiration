import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Branding = ({ brand: { image, name, slug, } }) => {
  return (
    <div>
      <Link href={`/brand/${slug.current}`}>
        <div className='art-card'>
          <img 
          src={urlFor(image && image[0])} 
          width={350} 
          height={350} 
          className="art-image"
          />
          <p className='art-name'>{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default Branding