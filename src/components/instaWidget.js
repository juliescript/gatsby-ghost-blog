import React, { useState, useEffect } from 'react'
import './instaWidget.scss'
import { getInstagramFeed } from '../services/instagramService'

const showPicturePlaceholder = (picture) => {
  if (!picture) {
    return <div className="instaPictureFrame emptyFrame"></div>
  }

  return <div className="instaPictureFrame">
  <a className="instaPictureLink" href={picture.permalink} target="_blank" rel="noopener noreferrer" key={picture.id} >
    <img className="instaPicture" src={picture.media_url} alt={picture.caption} />
  </a>
</div>
}

const InstaWidget = () => {
  const [pictures, setPictures] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    getInstagramFeed().then(data => {
        const firstEightPictures = data.data.data.slice(0, 8)
        setPictures(firstEightPictures)
    })
  }, []);

  return (
    <div className="instaPictures">
      {pictures.map(picture => showPicturePlaceholder(picture))}
    </div>
  );

}

export default InstaWidget
