import React from 'react'
import Link from 'next/link'
import { Adobe, Art, Branding, Header } from '../components'
import Product from './product'
import ArtTHREE from '../components/animated_Bg/Art_THREE'
import WebTHREE from '../components/animated_Bg/Web_THREE'
import BrandingTHREE from '../components/animated_Bg/Branding_THREE'
import { client } from '../lib/client'
import Web from '../components/Web'

const Home = ({ arts, webs, brands, products }) => {
  return (
    <>
      <Header />
      <div className='art-heading'>
        <h1>Find Your Inspiration</h1>
        <p>Choose Inspiration Type</p>
        <div className="three-banner-art">
          <ArtTHREE />
        </div>
      </div>

      <div className='art-container'>
      <h1>Art</h1>
        {arts?.map(art => <Art key={art._id} art={art}/>)}
      </div>
      <div className="three-banner-web">
          <WebTHREE />
        </div>
      <div className='art-container'>
      <h1>Web</h1>
        {webs?.map(web => <Web key={web._id} web={web}/>)}
      </div>
      <div className="three-banner-web">
          <BrandingTHREE />
        </div>
      <div className='art-container'>
      <h1>Branding</h1>
        {brands?.map(brand => <Branding key={brand._id} brand={brand}/>)}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "art"]';
  const arts = await client.fetch(query);

  const webQuery = '*[_type == "web"]';
  const webs = await client.fetch(webQuery);

  const brandQuery = '*[_type == "branding"]';
  const brands = await client.fetch(brandQuery);

  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  return {
    props: { arts, webs, brands, products }
  }
}

export default Home