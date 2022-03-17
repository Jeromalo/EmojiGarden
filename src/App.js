import React, { useState, useContext } from 'react';
import './App.css';
import GenerateGarden from "./component/GenerateGarden";
import ThemeContext, { themes } from "./ThemeContext"
import ThemeChoice from "./component/ThemeChoice"
import SpeedChoice from "./component/SpeedChoice"
import SpeedContext from "./SpeedContext"
import ScoreContext from "./ScoreContext"


function App() {

  const [score, setScore] = useState[0, 0, 0]

  const [speed, setSpeed] = useState(2000);

  const [theme, setTheme] = useState(themes.plants)

  const contextValue = (value) => {
    setTheme(themes[value])
  }

  const calculScore = (myScore) => {
    let copy = [...myScore]
    score
    setScore(copy)
  }
}


return (
  <ThemeContext.Provider value={theme}>
    <SpeedContext.Provider value={speed}>
      <ScoreContext.Provider value={calculScore}>
        <div className="App">
          <h1>My Emoji Garden</h1>
          <div className={theme}>
            <div>
              <ThemeChoice updateTheme={contextValue} />

              <SpeedChoice setSpeed={(value) => setSpeed(value)} />
              <div className="cards">
              <p>1 :{score[0]}</p>
              <p>2 :{score[1]}</p>
              <p>3 :{score[2]}</p>
              </div>
            </div>
          </div>
          <GenerateGarden />
        </div>
      </ScoreContext.Provider>
    </SpeedContext.Provider>
  </ThemeContext.Provider>
);
}

export default App;
