import React from 'react'
import { client, urlFor } from '../../lib/client'
import { Art } from '../../components'
import Adobe from '../../components/Adobe'

const ProductDetails = ({ products, product }) => {
    const { image, image1, image2, image3, gif, name, details, description, coverImg, detailsImg, heading1, heading2, heading3 } = product
  return (
    <div>
        <div className='art-detail-container'>
            <div className="cover-image-container">
                <img src={urlFor(image && coverImg[0])} alt="" />
            </div>
            
            <div className='product-detail-container'>
                <div className='image-container'>
                    <img src={urlFor(image && image[0])} width="250px" alt="" />
                </div>
            <h1 className='art-name'>
                {name}
            </h1>
            <p  className='art-main-details'>
                {details}
            </p>
            <div className="info">
                <img className='info-img1 img' src={urlFor(image && image1[0])} width="550px" alt="" />
                <p className="heading1">{heading1}</p>
                <img className='info-img2 img' src={urlFor(image && image2[0])} width="550px" alt="" />
                <p className="heading2">{heading2}</p>
                <img className='info-img3 img' src={urlFor(image && image3[0])} width="550px" alt="" />
                <p className="heading3">{heading3}</p>
                <img className='info-img2' src={urlFor(image && gif[0])} width="550px" alt="" />
                </div>
            </div>
        </div>
        <div className="maylike-art-wrapper">
            <h2>You May Also Like</h2>
                <div className="maylike-art-container">
                    {products.map((item, i) => (
                        <Adobe key={item._id}
                        product={item}
                        />
                    ))}
                </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query =`*[_type == 'product'] {
        slug {
            current
        }
    }`

    const products = await client.fetch(query)
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const artsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(artsQuery);
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails