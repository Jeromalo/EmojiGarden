import React, { useState, useContext } from 'react';
import SpeedContext from '../SpeedContext'

export default function SpeedChoice(props) {

  const speed = useContext(SpeedContext);

  const handleChange = event => {
    const value = event.currentTarget.value;
    props.setSpeed(value);
  }
  return (
    <div>
      Enter a speed (500-10000) : <br></br>
      <input type="number" id="speed" name="speed"
        min="500" max="10000" defaultValue={500} onChange={handleChange}/>
    </div>
  )
}