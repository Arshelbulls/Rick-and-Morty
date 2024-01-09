import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './assets/hooks/useFetch'
import getRandomNumber from './assets/utils/getRandomNumber'
import LocationCard from './assets/components/LocationCard'
import ResidentCard from './assets/components/ResidentCard'
import "./assets/components/styles/Form.css"

function App() {

  const locationId = getRandomNumber(126)
  const [inputValue, setInputValue] = useState(locationId)
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputLocation.current.value)
  }

  return (

    <div>
      <img src="/fondo.png" alt="" />
      <form  className="div__form" onSubmit={handleSubmit}>
        <input className='div__input' ref={inputLocation} type="text" />
        <button className='div__btn'>Search</button>
      </form>
      {
        hasError
          ? <h2>❌Hey! you must provide an id from 1 to 126😕</h2>
          : (
            <>
              <LocationCard
                location={location}
              />
              <div className='resident__container'>
                {
                  location?.residents.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          )
      }

    </div>
  )
}

export default App
