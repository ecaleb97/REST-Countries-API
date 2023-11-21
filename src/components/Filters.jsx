/* eslint-disable react/prop-types */
import { IconSearch } from "./Icon";
import './Filters.css'
import { useId } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function Filters ({ onChange }) {
  const regionFilterId = useId()
  const searchFilterId = useId()

  const [region, setRegion] = useLocalStorage('region', 'All countries')

  const handleChangeRegion = (e) => {
    onChange(prevState => ({
      ...prevState,
      region: e.target.value
    }))
    setRegion(e.target.value)
  }

  const handleChangeSearch = (e) => {
    onChange(prevState => ({
      ...prevState,
      search: e.target.value
    }))
  }

  const options = [
    { value: 'all', label: 'All countries' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
  ]

  return (
    <section className="filters">
      <div className="input">
        <IconSearch />
        <input 
          id={searchFilterId}
          type="text"
          placeholder="Search for a country..."
          onChange={handleChangeSearch}
        />
      </div>
      <div className="select-container">
        <select 
          id={regionFilterId} 
          onChange={handleChangeRegion}
          value={region}
        >
          {
            options.map(option => {
              return (
                <option 
                  key={option.value} 
                  value={option.value}
                >
                  {option.label}
                </option>
              )
            })
          }
        </select>
      </div>
    </section> 
  )
}