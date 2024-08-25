import { useState } from 'react'

const Header = ({text}) => (
    <h1>
      {text}
    </h1>
)

const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>
    {text}
  </button>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => (
  <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>All: {all}</p>
    <p>Average on scale from -1 to 1: {average}</p>
    <p>Positive: {positive} %</p>
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedTotal = updatedGood + neutral + bad
    setTotal(updatedTotal)
    setAverage((updatedGood - bad) / updatedTotal)
    setPositive(updatedGood / updatedTotal * 100)
  }
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedTotal = updatedNeutral + good + bad
    setTotal(updatedTotal)
    setAverage((good - bad) / updatedTotal)
    setPositive(good / updatedTotal * 100)
  }
  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedTotal = updatedBad + neutral + good
    setTotal(updatedTotal)
    setAverage((good - updatedBad) / updatedTotal)
    setPositive(good / updatedTotal * 100)
  }


  return (
    <div>
      <Header text='Give feedback please :)' Header/>
      <Button handleClick={handleGood} text='Good' />
      <Button handleClick={handleNeutral} text='Neutral' />
      <Button handleClick={handleBad} text='Bad' />
      <Header text='Statistics' Header/>
      <Statistics
        good={good} 
        neutral={neutral} 
        bad={bad}
        all={total}
        average={average}
        positive={positive}
      Statistics/>
    </div>
  )
}

export default App