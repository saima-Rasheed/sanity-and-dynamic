import React from 'react'

import { client } from '@/sanity/lib/client'
import Hero from './components/Hero'
import { blog } from '@/sanity/schemaTypes/blog'

const Homepage = async () => {
  const query =  `*[_type == 'blog']{
  Title,
  Paragraph,
  image,
  "slug": slug.current
}`

const data:Blog[] = await client.fetch(query)

  return (
    <div className='grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3'>
     { data.map((data:Blog)=>( 
      <Hero data={data} key={data.slug} />
      ))
      }
     
    
 
      </div>
  
  )
  
}

export default Homepage

