import { useState } from 'react'
import { RestaurantFinder } from '../apis/RestaurantFinder'

export const AddReview = ({ restaurantID, setReviews }) => {
  const [username, setUsername] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState(1)

  //   post new review to backend and update local review display
  const addReview = async (name, review, rating) => {
    try {
      console.log({ name, rating, review })
      // update backend with new reviews
      let newReview = await RestaurantFinder.post(
        `/${restaurantID}/addReview`,
        { restaurantID, name, review, rating }
      ).then((res) => res.data.data)

      // update frontend changes
      setReviews((prevReviews) =>
        prevReviews ? [...prevReviews, newReview] : [newReview]
      )
    } catch (err) {
      console.log('🚀 ~ file: AddReview.jsx:27 ~ addReview ~ err:', err)
    }
  }

  return (
    <div>
      <h1>Add a Review!</h1>
      <div>
        <label>Your name</label>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Review</label>
        <input
          type='text'
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Rating</label>
        <select
          defaultValue={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value={1}>$</option>
          <option value={2}>$$</option>
          <option value={3}>$$$</option>
          <option value={4}>$$$$</option>
          <option value={5}>$$$$$</option>
        </select>
      </div>

      {/* input new review for restaurant */}
      <button onClick={() => addReview(username, review, rating)}>
        Add Review
      </button>
    </div>
  )
}
