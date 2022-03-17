import React, { useState, useContext } from 'react';
import ThemeContext from "../ThemeContext"

export default function ThemeChoice(props) {

  const { theme, updateTheme } = useContext(ThemeContext);

  const handleChange = event => {
    const value = event.currentTarget.value;
    props.updateTheme(value);
  }
  return (
    <div>
      Choose a theme : <br></br>
    <select name="theme" defaultValue={theme} onChange={handleChange}>
      <option value="plants">Plants(défault)</option>
      <option value="emoticones">Emoticones</option>
      <option value="wtf">Wtf</option>
    </select>
    </div>

  )
}