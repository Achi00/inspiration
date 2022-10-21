import React from 'react'
import { client, urlFor } from '../../lib/client'
import { Web } from '../../components'

const WebDetails = ({ web, webs }) => {
    const { image, name, details, moreDetails, detailsImg } = web
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
                <div className='small-images-container'>
                    {detailsImg?.map((item, i) => (
                        <img
                        key={item._id} 
                         src={urlFor(item)}/>
                    ))}
                </div>
            </div>
        </div>
        <div className="maylike-art-wrapper">
            <h2>You May Olso Like</h2>
                <div className="maylike-art-container">
                    {webs.map((item, i) => (
                        <Web key={item._id}
                        web={item}
                        />
                    ))}
                </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query =`*[_type == 'web'] {
        slug {
            current
        }
    }`

    const webs = await client.fetch(query)
    const paths = webs.map((web) => ({
        params: {
            slug: web.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "web" && slug.current == '${slug}'][0]`;
    const artsQuery = '*[_type == "web"]'

    const web = await client.fetch(query);
    const webs = await client.fetch(artsQuery);
  
    return {
      props: { webs, web }
    }
  }

export default WebDetails