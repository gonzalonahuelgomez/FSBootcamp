import Boton from "./Boton"
import Country from "./Country"

const Countries = ({countries, filter}) => {
    let filterCountry = countries.filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase())) //country.name.common.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    const handleClick = (country) =>{<Country key={country.name.common} country={country} /> 
        }
    if(filterCountry.length > 10) return <p>Too many matches, specify another filter</p>
    else if(filterCountry.length > 1) return filterCountry.map((filteredCountry, i) => <li key={i}>{filteredCountry.name.common}<Boton text={"show"} handleClick={()=>handleClick(filteredCountry)} /></li>)
    else return filterCountry.map((filteredCountry, i) => <Country key={i} country={filteredCountry} />)
}

export default Countries