import react, { useState, useEffect, useContext } from 'react'
import { RestaurantContext } from '../RestaurantContextProvider'
import { RestaurantFinder } from '../apis/RestaurantFinder'

export const RestaurantsList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext)

  // On mount, get list of restaurants
  useEffect(() => {
    const fetchRestaurants = async () => {
      let allRestaurants = await RestaurantFinder.get().then(
        (res) => res.data.data.restaurants
      )
      setRestaurants(allRestaurants)
      console.log({ allRestaurants })
    }
    fetchRestaurants()
  }, [])

  return (
    <table>
      {/* Table header: name, location, price, review, rating */}
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Price</th>
          <th>Reviews</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      {/* List of restaurant rows  */}
      <tbody>
        {restaurants &&
          restaurants.map((restaurant, index) => (
            <tr key={index}>
              <td
                style={{
                  width: '100%',
                  backgroundColor: 'red',
                }}
              >
                {restaurant.name}
              </td>
              <td
                style={{
                  width: '100%',
                  backgroundColor: 'red',
                }}
              >
                {restaurant.location}
              </td>
              <td
                style={{
                  width: '100%',
                  backgroundColor: 'red',
                }}
              >
                {restaurant.price_range}
              </td>
              <td
                style={{
                  width: '100%',
                  backgroundColor: 'red',
                }}
              >
                reviews
              </td>
              <td style={{ width: '100%', backgroundColor: 'red' }}>
                <button style={{}}>Edit</button>
              </td>
              <td style={{ width: '100%', mbackgroundColor: 'red' }}>
                <button style={{}}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
