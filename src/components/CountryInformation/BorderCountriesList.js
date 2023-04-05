import { useState, useEffect } from "react"
import CountryService from "../../services/countries"

const BorderCountriesList = (borderCountries) => {
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

  if (loading) {
    return null
  }

  return (
    <div>
      {borderCountryData.map((country, idx) => {
        return (
          <button key={idx}>
            {country.name.common}
          </button>
        )
      })}
    </div>
  )
}

export default BorderCountriesList