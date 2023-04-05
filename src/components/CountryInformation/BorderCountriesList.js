import { useState, useEffect } from "react"
import CountryService from "../../services/countries"
import { useNavigate } from "react-router-dom"

const BorderCountriesList = (borderCountries) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [borderCountryData, setBorderCountryData] = useState()

  useEffect(() => {
    const borderCountriesArr = Object.values(borderCountries)[0]
    CountryService.getCountryNamesByCode(borderCountriesArr)
      .then((response) => {
        setBorderCountryData(response.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }, [borderCountries])

  const handleBorderCountryButtonClick = (countryName) => {
    navigate(`/${countryName}`)
  }

  if (loading) {
    return null
  }

  return (
    <div>
      {borderCountryData.map((country, idx) => {
        return (
          <button key={idx} className='border-country-button' onClick={() => { handleBorderCountryButtonClick(country.name.common)}}>
            {country.name.common}
          </button>
        )
      })}
    </div>
  )
}

export default BorderCountriesList