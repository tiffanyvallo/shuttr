import React, { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react'

export default function Home() {
  const[imageIds, setImageIds] = useState();

  const loadImages = async () => {
    try {
      const res = await fetch('/images')
      const data = await res.json()
      console.log(data)
      setImageIds(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadImages()
  }, [])

  return (
    <div>
      <h1>Your Feed</h1>
      {imageIds && imageIds.map((imageId, index) => (
          <Image 
            key={index}
            cloudName="dryaxqxie"
            publicId={imageId}
            width="1000"
            crop="scale"
          />
      ))}
    </div>
  )
}