const Countries = ({countries}) => {
    if (countries) {
        if (countries.length > 10) {
            return null
        }
        return (
            countries.map(country =>
            <p>{country.commmon}</p>)
        )
    }
    return null
    
    
}

export default Countries