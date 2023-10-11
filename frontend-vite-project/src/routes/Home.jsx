import react, { useState, useEffect, useContext } from 'react'
import '../styles/Home.css'
import { Header } from '../components/Header'
import { AddRestaurant } from '../components/AddRestaurant'
import { RestaurantsList } from '../components/RestaurantsList'

export const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantsList />
    </div>
  )
}
