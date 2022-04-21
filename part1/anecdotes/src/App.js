import './App.css';
import { useState } from 'react';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Display = ({votes}) => {
  return(
    <div>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
      <p>has {Math.max(...votes)} votes</p>
    </div>
  )
}


const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text='next' />
      <Button handleClick={() => setVotes(votes.map((vote, index) => index === selected ? vote + 1 : vote))} text='vote' />
      <h1>Anecdote with most votes</h1>
      <Display votes={votes} />
    </div>
  )
}

export default App;