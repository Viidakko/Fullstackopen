import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [newfilter, setFilter] = useState('')
  const [allCountries, setAllCountries] = useState(null)
  const [filtCountries, setFiltCountries] = useState(null)


  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setAllCountries(response.data)
        setFiltCountries(response.data)
    }) 
  },[])

  const handleSearch = (event) => {
    const filter = event.target.value
    setFilter(filter)
    setFiltCountries(allCountries.filter(nextCountry => nextCountry.name.common.toLowerCase().includes(filter.toLowerCase())))
  }

  return (
    <div>
      <Filter filter={newfilter} handleFilter={handleSearch}/>
      <Countries countries={filtCountries} />
    </div>
  )
}

export default App
