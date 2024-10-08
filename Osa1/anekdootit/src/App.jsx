import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>
    {text}
  </button>
  )
}
const Anecdote = ({anecdote, votes}) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [currentsVotes, setVotes] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  const [best, setBest] = useState()

  const handleNewClick = () => {
    const current = Math.floor(Math.random() * anecdotes.length)
    setSelected(current)
    const votes = points[current]
    setVotes(votes)
  }
  const handleVoteClick = () => {
    const copy = points
    copy[selected] += 1
    const update = copy[selected]
    setVotes(update)
    setPoints(copy)
    if (update > mostVotes) {
      setMostVotes(update)
      setBest(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={currentsVotes} Anecdote/>
      <Button handleClick={handleNewClick} text={'Next anecdote'} Button/>
      <Button handleClick={handleVoteClick} text={'Vote'} Button/>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[best]} votes={mostVotes} Anecdote/>
    </div>
  )
}

export default App