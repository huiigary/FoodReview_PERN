import react, { useState, createContext } from 'react'

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]) // context to pass to entire app
  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </RestaurantContext.Provider>
  )
}
