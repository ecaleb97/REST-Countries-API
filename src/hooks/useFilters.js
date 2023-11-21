import { useLocalStorage } from './useLocalStorage'

export function useFilters () {
  const [filters, setFilters] = useLocalStorage('filters', {
    region: '',
    search: ''
  })

  const updateLocalStorage = state => {
    window.localStorage.setItem('filters', JSON.stringify(state))
  }

  const filterCountries = (countries) => {
    return (
      countries.filter(country => {
        const newCountries = (country.region === filters.region || filters.region === '') &&
        country.name.toLowerCase().includes(filters.search.toLowerCase())
        updateLocalStorage(filters)
        return newCountries
      })
    )
  }

  return { filters, filterCountries, setFilters }
}