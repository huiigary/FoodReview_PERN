import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { useEffect } from 'react'

// Display rating number as filled stars. Max is 5 stars.
export const StarRating = ({ rating }) => {
  const MIN_RATING = 0
  const MAX_RATING = 5
  let stars = []

  for (let i = 1; i <= MAX_RATING; i++) {
    if (i <= rating) {
      // full star
      stars.push(<StarIcon />)
      // half star = if rating is a decimal
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<StarHalfIcon />)
      // empty star
    } else {
      stars.push(<StarBorderIcon />)
    }
  }

  return <div>{stars}</div>
}
