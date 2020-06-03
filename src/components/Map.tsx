import React from 'react';

export default function Map() {
  return (
    <div>
      <div id="map">
      <p>Please enter an address!</p>
      </div>
      <form>
        <input type="text" id="address" />
        <button type="submit">SEARCH ADDRESS</button>
      </form>
    </div>
  )
}

// const form = {
//   textAlign: 'center',
//   margin: '2rem auto',
// };