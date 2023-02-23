// This is a functional component that will be used to display the cards in the app
import React from 'react'

import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ( _id, name, prompt, photo ) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img 
        className="w-full h-auto object-cover rounded-xl"
          src={photo}
          alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[]"
    </div>
  )
}

export default Card