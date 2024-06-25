import React, {useState, useEffect} from "react";
import './Hotel.css'
import {Avatar, Button} from "@mui/material"


const BASE_URL = 'http://localhost:8000/'        //> Base URL for server endpoint


//> Block 1: difining Hotel function (v116)

function Hotel({ hotel }) {

  const [imageUrl, setImageUrl] = useState('')
  const [comments, setComments] = useState([])

  useEffect(() => {
      if (hotel.image_url_type === 'absolute') {
          setImageUrl(hotel.image_url)
      } else {
          setImageUrl(BASE_URL + hotel.image_url)
      }
  }, [hotel.image_url_type, hotel.image_url])

  useEffect(() => {
    setComments(hotel.comments)
  }, []
  )

  return (
    <div className="hotel">
      <img
        alt="This is the hotel"
        className="hotel_image"
        src={imageUrl}
      />

      <h4 className="image_caption">{hotel.caption}</h4>

      <div className="hotel_comments">
        {
          comments.map((comments) => (
            <p>
              <strong>{comments.username}:</strong> {comments.text}
            </p>
          ))
        }
      </div>
    </div>
  )
}

export default Hotel

