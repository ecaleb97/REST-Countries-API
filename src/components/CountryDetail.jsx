/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";
import './CountryDetail.css'
import { BackArrowIcon } from "./Icon";

export function CountryDetail ({ countries }) {
  const { countryName } = useParams()
  const country = countries.find(country => country.name === countryName)

  console.log(country)

  return (
    <div className="details-container">
      <Link className="back" to={`/`}>
        <BackArrowIcon />
        <span>Back</span>
      </Link>
      <div className="country-details">
        <div className="image-container">
          <img src={country.flag} alt="" loading="lazy" />
        </div>
        <section className="info-container">
          <h2>{country.name}</h2>
          <div className="info">
            <div className="first-column">
              <p><strong>Native Name: </strong>{country.nativeName}</p>
              <p><strong>Population: </strong>{Intl.NumberFormat("en-US").format(country.population)}</p>
              <p><strong>Region: </strong>{country.region}</p>
              <p><strong>Sub Region: </strong>{country.subregion}</p>
              <p><strong>Capital: </strong>{country.capital}</p>
              
            </div>
            <div>
              <p><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
              <p><strong>Currencies: </strong>{country.currencies?.map(currency => currency.name).join(', ')}</p>
              <p><strong>Languages: </strong>{country.languages?.map(language => language.name).join(', ')} </p>
            </div>
          </div>
          <div className="border-countries">
            <strong>Border Countries: </strong>
            <ul>
              {
                country.borders?.map(border => {
                  const borderCountry = countries.find(country => country.alpha3Code === border)
                  return (
                    <li key={borderCountry.name}>
                      {borderCountry ? borderCountry.name : border}
                    </li>
                  )
                })
              }
                </ul>
              </div>
        </section>
      </div>
    </div>
    
  )
}