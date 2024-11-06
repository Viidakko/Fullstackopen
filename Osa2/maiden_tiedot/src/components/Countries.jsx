import { useState, useEffect} from 'react'
import Country from './Country'

const Countries = ({countries}) => {
    const [country, setCountry] = useState(null)
  
    useEffect(() => {
        if (country) {
            setCountry(null)
        }
    }, [countries])
    const showCountry = (name) => {
      setCountry(countries.find(c => c.name.official === name))
    }
  
    if (countries) {
        if (countries.length === 1) {
          return (
              <Country country={countries[0]}/>
          )
        } else if (country) {
            return (
              <Country country={country}/>
            )
        } else if (countries.length > 10) {
            return (
                <p>Too many matches, specify another filter</p>
            )
        } 
        return (
            <div>
                <ul>
                {countries.map(country =>
                    <li key={country.name.official}>
                        {country.name.common}
                        <button onClick={() => showCountry(country.name.official)}>show</button>
                    </li>
                )}
                </ul>
            </div>
        )
    }
    return null
    
    
}

export default Countries