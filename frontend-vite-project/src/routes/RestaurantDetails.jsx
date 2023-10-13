import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RestaurantFinder } from '../apis/RestaurantFinder'
import { StarRating } from '../components/StarRating'

export const RestaurantDetails = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPriceRange] = useState('')

  // On mount, get the restaurant details
  useEffect(() => {
    try {
      const fetchData = async () => {
        const restaurant = await RestaurantFinder.get(`/${id}`).then(
          (res) => res.data.data
        )
        console.log({ restaurant })
        setName(restaurant.name)
        setLocation(restaurant.location)
        setPriceRange(restaurant.price_range)
      }
      // execute function
      fetchData()
    } catch (err) {
      console.log({ err })
    }
  }, [])

  return (
    <div>
      <h1>Details for : {name}</h1>
      {/* Display restaurabt detai: Name, Location, PriceRange */}
      <div>Name</div>
      <div>Location</div>
      <div>Price Range</div>

      {/* input new review for restaurant */}
      <button>Add Review</button>
      <StarRating rating={2.5} />
    </div>
  )
}
