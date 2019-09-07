//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [time, setTime] = useState('15:00')
  const [quarter, setQuarter] = useState(1)
  const [disabled, setDisabled] = useState(false)
  const [reset, setReset] = useState(true)

  const handleChange = (team, score) => {
    if(team === 'home') return setHomeScore(homeScore+score)
    else return setAwayScore(awayScore+score)
  }

  const startGame = () => {
    setDisabled(true)
    setReset(true)
    let currentTime = 1500
    let newQuarter = 1
    let timer = setInterval(() => {
      currentTime--
      let newTime = currentTime.toString().slice(0,2) + ':' + currentTime.toString().slice(2,4)
      setTime(newTime)
      if(newQuarter === 4 && currentTime === 1495) {
        setDisabled(false)
        setReset(false)
        clearInterval(timer)
      } else
      if(currentTime === 1495) {
        newQuarter++
        setQuarter(newQuarter)
        currentTime = 1501
        setTime(newTime)
      }
    }, 1000)
  }

  const resetGame = () => {
    setTime('15:00')
    setQuarter(1)
    setHomeScore(0)
    setAwayScore(0)
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
        <BottomRow quarter={quarter}/>
      </section>
      <section className="buttons">
        <button disabled={disabled} onClick={() => startGame()}>Start Game</button>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => handleChange('home', 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => handleChange('home', 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => handleChange('away', 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => handleChange('away', 3)}>Away Field Goal</button>
        </div>
        <button disabled={reset} onClick={() => resetGame()}>Reset Game</button>
      </section>
    </div>
  );
}

export default App;
