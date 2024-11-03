import Country from "./Country"

const Countries = ({countries, showCountry}) => {

    if (countries) {
        if (countries.length === 1) {
            return (
                <Country country={countries[0]}/>
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