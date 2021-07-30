import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

const GOOGLE_API_KEY = process.env.GOOGLE_GEOCODING_API_KEY;

export default function Map() {
  const [address, setAddress] = useState('');

  const updateAddress = (event: any) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const enteredAddress = address;

    axios
      .get<GoogleGeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
          enteredAddress,
        )}&key=${GOOGLE_API_KEY}`,
      )
      .then((response) => {
        console.log(response);
        if (response.data.status !== 'OK') {
          throw new Error('Could not fetch location!');
        }
        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById('map')!, {
          center: coordinates,
          zoom: 16,
        });

        new google.maps.Marker({ position: coordinates, map: map });
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  return (
    <Container>
      <MapStyled id="map">
        <p>Please enter an address!</p>
      </MapStyled>
      <FormStyled onSubmit={handleSubmit}>
        <input
          type="text"
          name="address"
          value={address}
          onChange={updateAddress}
        />
        <button type="submit">SEARCH ADDRESS</button>
      </FormStyled>
    </Container>
  );
}

const MapStyled = styled.div`
  width: 90%;
  height: 20rem;
  border: 1px solid #ccc;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FormStyled = styled.form`
  text-align: center;
  margin: 2rem auto;

  input {
    width: 50%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.25rem;
    margin-right: 0.5rem;
  }
`;
