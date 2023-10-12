import react, { useState, useEffect, useContext } from 'react'
import { RestaurantContext } from '../RestaurantContextProvider'
import { RestaurantFinder } from '../apis/RestaurantFinder'

export const RestaurantsList = ({ restaurants }) => {
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
            <tr
              key={index}
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              <td
                style={{
                  width: '100%',
                }}
              >
                {restaurant.name}
              </td>
              <td
                style={{
                  width: '100%',
                }}
              >
                {restaurant.location}
              </td>
              <td
                style={{
                  width: '100%',
                }}
              >
                {restaurant.price_range}
              </td>
              <td
                style={{
                  width: '100%',
                }}
              >
                reviews
              </td>
              <td style={{ width: '100%' }}>
                <button style={{}}>Edit</button>
              </td>
              <td style={{ width: '100%' }}>
                <button style={{}}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
