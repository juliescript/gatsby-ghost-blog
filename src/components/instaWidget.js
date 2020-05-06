import React, { useState, useEffect } from 'react'
import './instaWidget.scss'
import { getInstagramFeed } from '../services/instagramService'

const InstaWidget = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    getInstagramFeed().then(data => {
        const firstTwelvePictures = data.data.data.slice(0, 8)
        setPictures(firstTwelvePictures)
    })
  }, []);

  return (
    <div className="instaPictures">
      {pictures.map(picture => 
      <div className="instaPictureFrame">
        <a className="instaPictureLink" href={picture.permalink} target="_blank" key={picture.id} >
          <img className="instaPicture" src={picture.media_url} alt={picture.caption} />
        </a>
      </div>
        
        )}
    </div>
  );

}

export default InstaWidget
