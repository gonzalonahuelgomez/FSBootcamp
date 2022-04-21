import Weather from "./Weather"

const Country = ({country}) => {
  return (
    <div>            
        <h2>{country.name.common}</h2>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h4>languages:</h4>
        {/* {Object.values(country.languages).map(language => <li key={language}>{language}</li>)} */}
        {Object.entries(country.languages).map(([key,language]) => <li key={key}>{language}</li>)}
        <img src={country.flags.png} alt={`${country.name.common} flag`}/>
        <Weather capital={country.capital} /*lat={country.capitalInfo.latlng[0]} lng={country.capitalInfo.latlng[1]}*//>
    </div>
  )
}

export default Country