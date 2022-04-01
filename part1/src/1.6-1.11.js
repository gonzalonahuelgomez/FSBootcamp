import './App.css';
import { useState } from 'react';

const Button = ({ handleClick, text }) => <button onClick={ handleClick }>{ text }</button>

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad, all}) => {
  const average = (good - bad) / all;
  const positive = good / all * 100;
  return (
    <div>
      <h2>Statistics</h2>
      { all === 0 ? <p>No feedback given</p> : 
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
      }
      
    </div>
  )
  }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const handleClickGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
    setPositive(positive + 1)
  }
 const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleClickBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
    setPositive(positive - 1)
  }
  
  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text='good' />
      <Button handleClick={handleClickNeutral} text='neutral' />
      <Button handleClick={handleClickBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </>
  )

}

export default App;
