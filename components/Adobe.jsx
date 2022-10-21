import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Adobe = ({ product: { image, name, slug, description } }) => {
  return (
    <div>
      <Link href={`/adobe_products/${slug.current}`}>
      <div className='product-card'>
          <img 
          src={urlFor(image && image[0])} 
          className="product-image"
          />
          <p className='product-name'>{name}</p>
          <p className='product-desc'>{description}</p>
          <button>Buy Now</button>
        </div>
      </Link>
    </div>
  )
}

export default Adobe