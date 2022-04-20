const Countries = ({countries, filter}) => {
    let filterCountry = countries.filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase()) //country.name.common.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    )
    return(
        filterCountry.length > 10 ? <p>Too many matches, specify another filter</p> :
        filterCountry.length > 1 ? filterCountry.map((filteredCountry) => <li key={filteredCountry.name.common}>{filteredCountry.name.common}</li>) :
        filterCountry.map((filteredCountry) => 
        <div key={filteredCountry.name.common}>            
            <h2>{filteredCountry.name.common}</h2>
            <p>capital {filteredCountry.capital}</p>
            <p>area {filteredCountry.area}</p>
            <h5>languages:</h5>
            {/* {Object.values(filteredCountry.languages).map(language => <li key={language}>{language}</li>)} */}
            {Object.entries(filteredCountry.languages).map(([key,language]) => <li key={key}>{language}</li>)}
            <img src={filteredCountry.flags.png} alt={`${filteredCountry.name.common} flag`}/>
        </div>
        
        )
    )
}

export default Countries