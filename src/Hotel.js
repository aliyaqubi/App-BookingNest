import React, {useState, useEffect} from "react";
import './Hotel.css'
const BASE_URL = 'http://localhost:8000/'        //> Base URL for server endpoint


//> Block 1: difining Hotel function

function Hotel({ hotel }) {

    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        if (hotel.image_url_type === 'absolute') {
            setImageUrl(hotel.image_url)
        } else {
            setImageUrl(BASE_URL + hotel.image_url)
        }
    }, [hotel.image_url_type, hotel.image_url])

    return (
        <div className="hotel">
            <img
            alt="This is the hotel"
            className="hotel_image"
            src={imageUrl}
            />
        </div>
    )
}

export default Hotel