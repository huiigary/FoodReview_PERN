import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RestaurantFinder } from '../apis/RestaurantFinder'
import { StarRating } from '../components/StarRating'
import { Reviews } from '../components/Reviews'
import { AddReview } from '../components/AddReview'

export const RestaurantDetails = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPriceRange] = useState('')
  const [reviews, setReviews] = useState([]) // reviews of restaurant

  // On mount, get the restaurant details (info and reviews)
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { restaurant, reviews } = await RestaurantFinder.get(
          `/${id}`
        ).then((res) => {
          return {
            restaurant: res.data.data.restaurant,
            reviews: res.data.data.reviews,
          }
        })
        console.log({ restaurant, reviews })
        //  restaurant info
        setName(restaurant.name)
        setLocation(restaurant.location)
        setPriceRange(restaurant.price_range)
        // restaurant reviews
        setReviews(reviews)
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
      <Reviews reviews={reviews} />
      <AddReview restaurantID={id} setReviews={setReviews} />
    </div>
  )
}
