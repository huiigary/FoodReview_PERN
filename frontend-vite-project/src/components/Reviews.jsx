import { Card, CardContent, CardHeader } from '@mui/material'
import { StarRating } from './StarRating'

// display list of review cards
export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h1>Reviews</h1>
      {/* List of review cards containing: username, rating-stars, review-text */}

      {reviews &&
        reviews.map((review, index) => (
          <Card key={index} variant='outlined' sx={{ margin: 2 }}>
            <CardContent>
              <div>ID:{review.id}</div>
              <div>rest_ID:{review.restaurant_id}</div>
              <div>name:{review.name}</div>
              <div>review:{review.review}</div>
              <div>rating:{review.rating}</div>
              <StarRating rating={review.rating} />
            </CardContent>
          </Card>
        ))}
    </div>
  )
}
