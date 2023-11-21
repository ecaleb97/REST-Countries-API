import './App.css'
import { useState } from 'react'
import { IconMoon, IconSun } from './components/Icon'
import { countries as initialCountries } from './mocks/countries'
import { Countries } from './components/Countries'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CountryDetail } from './components/CountryDetail'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [countries] = useState(initialCountries)
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const { setFilters, filterCountries } = useFilters()
  const filteredCountries = filterCountries(countries)

  const handleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <BrowserRouter>
      <div className={theme}>
        <Header 
          title={'Where in the World?'} 
          {...(theme === 'light'
              ? { iconMode: <IconSun />, mode: 'Light Mode', handleMode: handleMode } 
              : { iconMode: <IconMoon />, mode: 'Dark Mode', handleMode: handleMode } 
            )
          }
        />
        <Routes>
          <Route path="/" element={<Countries countries={filteredCountries} changeFilters={setFilters} />} />
          <Route path="details/:countryName" element={<CountryDetail countries={countries} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
