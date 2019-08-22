//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [time, setTime] = useState('15:00')

  const handleChange = (team, score) => {
    if(team === 'home') return setHomeScore(homeScore+score)
    else return setAwayScore(awayScore+score)
  }

  const startGame = () => {
    let currentTime = 1500
    let timer = setInterval(() => {
      currentTime--
      let newTime = currentTime.toString().slice(0,2) + ':' + currentTime.toString().slice(2,4)
      setTime(newTime)
      console.log('counting : ', currentTime)
      if(currentTime === 0) {
        clearInterval(timer)
      }
    }, 1000)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{time}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <button onClick={() => startGame()}>Start Game</button>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => handleChange('home', 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => handleChange('home', 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => handleChange('away', 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => handleChange('away', 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
