import React from 'react'
import { Adobe } from '../components'
import { urlFor } from '../lib/client'
import { client } from '../lib/client'
import ProductPageTHREE from '../components/animated_Bg/Product_Page_THREE'

const Product = ({ products }) => {
  return (
    <div className='product-container'>
      <div className="product-three-container">
        <ProductPageTHREE />
      </div>
      {products?.map(product => 
        <Adobe key={product._id} product={product}/>
        )}
    </div>
  )
}

export async function getServerSideProps() {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  return { props: { products } }
}


export default Product