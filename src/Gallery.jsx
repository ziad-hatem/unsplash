import React, { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { UseGlobalContext } from './UseGlobalContext'
import SinglePhoto from './SinglePhoto'
const Gallery = () => {
    const {url, key, content} = UseGlobalContext()
    const {isLoading, isError, data} = useQuery({
        queryKey: ['images', content],
        queryFn: async () => {
            const response = await axios.get(`${url}&query=${content}`)
            return response.data
        }
    })
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>not Exsest</div>
    }

  return (
      <section>
          {
              data.results.map((ele) => {
              const url = ele?.urls?.regular;
              return <SinglePhoto alt_description={ ele.alt_description } url={url} />
          })}
    </section>
  )
}

export default Gallery