import React from 'react'
import { lazy } from 'react'

const SinglePhoto = ({url, id, alt_description}) => {
  return ( 
    <img key={id} src={url} loading={lazy} alt={alt_description} width={'400px'} height={'300px'} />
  )
}

export default SinglePhoto