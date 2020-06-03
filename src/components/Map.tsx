import React, { useState } from 'react';
import axios from "axios";
import classes from './Map.module.css';

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

const GOOGLE_API_KEY = process.env.GOOGLE_GEOCODING_API_KEY;

export default function Map() {
  const [address, setAddress] = useState('');

  const updateAddress = (event: any) => {
    setAddress(event.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const enteredAddress = address;

    axios
      .get<GoogleGeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
          enteredAddress
        )}&key=${GOOGLE_API_KEY}`
      )
      .then(response => {
        console.log(response);
        if (response.data.status !== "OK") {
          throw new Error("Could not fetch location!");
        }
        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map")!, {
          center: coordinates,
          zoom: 16
        });
  
        new google.maps.Marker({ position: coordinates, map: map });
      })
      .catch(err => {
        alert(err.message);
        console.log(err);
      });
  }

  return (
    <div>
      <div id="map" className={classes.map}>
        <p>Please enter an address!</p>
      </div>
      <form className={classes.form}  onSubmit={handleSubmit}>
        <input type="text" name="address" value={address} onChange={updateAddress} />
        <button type="submit">SEARCH ADDRESS</button>
      </form>
    </div>
  )
}
