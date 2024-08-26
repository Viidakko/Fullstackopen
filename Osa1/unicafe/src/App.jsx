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

const StatisticLine = ({text, value, percent}) => {
  if (percent) {
    return (
      <tr>
        <td>{text}:</td>
        <td>{value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if(all === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='Good' value={good} StatisticLine/>
        <StatisticLine text='Neutral' value={neutral} StatisticLine/>
        <StatisticLine text='Bad' value={bad} StatisticLine/>
        <StatisticLine text='All' value={all} StatisticLine/>
        <StatisticLine text='Average on scale from -1 to 1' value={average} StatisticLine/>
        <StatisticLine text='Positive' value={positive} percent={true} StatisticLine/>
      </tbody>
    </table>
  )
}
  
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