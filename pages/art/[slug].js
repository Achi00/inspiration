import React from 'react'
import { client, urlFor } from '../../lib/client'
import { Art } from '../../components'

const ArtDetails = ({ art, arts }) => {
    const { image, name, details, moreDetails, detailsImg } = art
  return (
    <div>
        <div className='art-detail-container'>
            <div className="cover-image-container">
                <img src={urlFor(image && image[0])} alt="" />
            </div>
            
            <div className='detail-container'>
                <div className='image-container'>
                    <img src={urlFor(image && image[0])} alt="" />
                </div>
            <h1 className='art-name'>
                {name}
            </h1>
            <p  className='art-main-details'>
                {moreDetails}
            </p>
                <div className='small-images-container'>
                    {detailsImg?.map((item, i) => (
                        <img src={urlFor(item)}
                        key={item._id}/>
                    ))}
                </div>
            </div>
        </div>
        <div className="maylike-art-wrapper">
            <h2>You May Olso Like</h2>
                <div className="maylike-art-container">
                    {arts.map((item, i) => (
                        <Art key={item._id}
                        art={item}
                        />
                    ))}
                </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query =`*[_type == 'art'] {
        slug {
            current
        }
    }`

    const arts = await client.fetch(query)
    const paths = arts.map((art) => ({
        params: {
            slug: art.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "art" && slug.current == '${slug}'][0]`;
    const artsQuery = '*[_type == "art"]'

    const art = await client.fetch(query);
    const arts = await client.fetch(artsQuery);
  
    return {
      props: { arts, art }
    }
  }

export default ArtDetails