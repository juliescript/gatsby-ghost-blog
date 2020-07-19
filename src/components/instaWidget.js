import React, { useState, useEffect } from "react"
import { getInstagramFeed } from "../services/instagramService"
import "./instaWidget.css"

const showPicturePlaceholder = (picture, index) => {
  if (!picture) {
    return (
      <div className="instaPictureFrame" key={index}>
        <div className="emptyFrame" key={index}></div>
      </div>
    )
  }

  return (
    <div className="instaPictureFrame" key={picture.id}>
      <a
        className="instaPictureLink"
        href={picture.permalink}
        target="_blank"
        rel="noopener noreferrer"
        key={picture.id}
      >
        <img
          className="instaPicture"
          src={picture.media_url}
          alt={picture.caption}
        />
      </a>
    </div>
  )
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
  ])

  useEffect(() => {
    getInstagramFeed().then(data => {
      const firstEightPictures = data.data.data.slice(0, 8)
      setPictures(firstEightPictures)
    })
  }, [])

  return (
    <div className="instaPictures">
      {pictures.map((picture, index) => showPicturePlaceholder(picture, index))}
    </div>
  )
}

export default InstaWidget
