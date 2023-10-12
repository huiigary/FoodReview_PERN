import react, { useState, useEffect, useContext } from 'react'
import '../styles/Home.css'
import { Header } from '../components/Header'
import { AddRestaurant } from '../components/AddRestaurant'
import { RestaurantsList } from '../components/RestaurantsList'
import { RestaurantContext } from '../RestaurantContextProvider'
import { RestaurantFinder } from '../apis/RestaurantFinder'

export const Home = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext)

  // On mount, get list of restaurants
  useEffect(() => {
    const fetchRestaurants = async () => {
      let allRestaurants = await RestaurantFinder.get().then(
        (res) => res.data.data.restaurants
      )
      setRestaurants(allRestaurants)
    }
    fetchRestaurants()
  }, [])

  return (
    <div>
      <Header />
      <AddRestaurant
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />
      <RestaurantsList
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />
    </div>
  )
}
