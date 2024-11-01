import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  const [newfilter, setFilter] = useState('')
  const [allCountries, setAllCountries] = useState(null)
  const [filtCountries, setFiltCountries] = useState(null)
  const [country, setCountry] = useState(null)


  useEffect(() => {
    if (filtCountries) {
      if (filtCountries.length === 1) {
        const newCountry = filtCountries[0]
        axios
          .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${newCountry}`)
          .then(response => {
            setCountry(response.data)
        })
      }
    } else {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          setAllCountries(response.data)
          setFiltCountries(response.data)
      })
    }
  }, [filtCountries])

  const handleSearch = (event) => {
    const filter = event.target.value
    setFilter(filter)
    setFiltCountries(allCountries.filter(nextCountry => nextCountry.name.common.toLowercase().includes(filter.toLowerCase())))
  }

  return (
    <div>
      <Filter filter={newfilter} handleFilter={handleSearch}/>
      <Countries countries={filtCountries}/>
      <Country country={country}/>
    </div>
  )
}

export default App
