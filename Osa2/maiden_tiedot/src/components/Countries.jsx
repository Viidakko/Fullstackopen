const Countries = ({countries}) => {
    if (countries) {
        if ( countries.length < 2) {
            return null
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
                    </li>
                )}
                </ul>
            </div>
        )
    }
    return null
    
    
}

export default Countries