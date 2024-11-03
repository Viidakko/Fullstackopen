const Country = ({country}) => {
    if (country) {
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital[0]}</p>
                <p>Area: {country.area}</p>
                <h4>Languages:</h4>
                <ul>
                    {Object.values(country.languages).map(language =>
                        <li key={language}>
                            {language}
                        </li>
                    )}
                </ul>
                <picture>
                    <img src={country.flags.png}></img>
                </picture>
            </div>
        )
    }
    return null
    
}
export default Country