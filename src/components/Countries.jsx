/* eslint-disable react/prop-types */
import './Countries.css'
import { Filters } from './Filters'
import { Link } from 'react-router-dom'

export function Countries ({ countries, changeFilters }) {
  return (
    <main className="countries">
      <Filters onChange={changeFilters} />
      <ul>
        {
          countries?.map(country => {
            return (
              <li key={country.name}>
                <Link to={`/details/${country.name}`}>
                  <img 
                    src={country.flag} 
                    alt={`Flag of ${country.name}`} 
                    loading="lazy" 
                  />
                  <section className='countries-info'>
                    <h1>{country.name}</h1>
                    <p><strong>Population: </strong>{Intl.NumberFormat("en-US").format(country.population)}</p>
                    <p><strong>Region: </strong>{country.region}</p>
                    <p><strong>Capital: </strong>{country.capital}</p>
                  </section>
                </Link>
                
              </li>
            )
          })
        }
      </ul>
      
    </main>
  )
}