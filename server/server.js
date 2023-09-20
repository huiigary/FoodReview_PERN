import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
const app = express()

// Middleware = some function that is between the frontend request and the backend response  (It performs something with the request).... route handler is technically also middleware
app.use(morgan('dev')) // morgan for useful logging
app.use(express.json()) // !! Middleware express.json is useful  enabling "req.body" to return a

/**
 * CRUD operations for Restaurants: api/v1/restaurants/:restaurantId
 * - get all restaurants
 * - get one restaurant :restaurantId
 * - create restaurant
 * - delete restaurant /:restaurantId
 * - update restaurant /:restaurantId
 */

// make app listen at port
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log('Server is running on port:', port)
})

// GET one restaurant
app.get('/api/v1/restaurants/:restaurantId', (req, res) => {
  console.log('get one')
})

// GET all restaurants
app.get('/api/v1/restaurants', (req, res) => {
  res.status(200).json({
    status: 'successs',
    data: {
      restaurants: ['Mcdonalds', 'testRestaurant', 'Pho quyen'],
    },
  })
})

// CREATE a restaurant
app.post('/api/v1/restaurants', (req, res) => {
  console.log('create rest')
  res.send('create ')
})

// DELETE a restaurant
app.delete('/api/v1/restaurants/:restaurantId', (req, res) => {
  // find restaurant with id
  // if found --> delete
  console.log('delete')
  res.send('delete')
})
