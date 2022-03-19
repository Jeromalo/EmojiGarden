import React, { useState, useContext } from 'react';
import './App.css';
import GenerateGarden from "./component/GenerateGarden";
import ThemeContext, { themes } from "./ThemeContext"
import ThemeChoice from "./component/ThemeChoice"
import SpeedChoice from "./component/SpeedChoice"
import SpeedContext from "./SpeedContext"


function App() {

  // const [score, setScore] = useState(0, 0, 0)

  const [speed, setSpeed] = useState(2000);

  const [theme, setTheme] = useState(themes.plants)

  const contextValue = (value) => {
    setTheme(themes[value])
  }



return (
  <ThemeContext.Provider value={theme}>
    <SpeedContext.Provider value={speed}>
      <div className="App">
        <h1>My Emoji Garden</h1>
        <div className={theme}>
          <div>
            <ThemeChoice updateTheme={contextValue} />
            <SpeedChoice setSpeed={(value) => setSpeed(value)} />
          </div>
        </div>
        <GenerateGarden />
      </div>
    </SpeedContext.Provider>
  </ThemeContext.Provider>
);
}

export default App;
