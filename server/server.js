// import express
import express from 'express'
import 'dotenv/config'
// give instance of express app
const app = express()
// make app listen at port
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log('Server is running on port:', port)
})

// Middleware = some function that is between the frontend request and the backend response  (It performs something with the request).... route handler is technically also middleware

/**
 * CRUD operations for Restaurants: api/v1/restaurants/:id
 * - get all restaurants
 * - get one restaurant :id
 * - create restaurant
 * - delete restaurant /:id
 * - update restaurant /:id
 */

// GET all restaurants
app.get('/api/v1/restaurants', (req, res) => {
  console.log('test')
  res.status(200).json({
    status: 'successs',
    data: {
      restaurants: ['Mcdonalds', 'testRestaurant', 'Pho quyen'],
    },
  })
})

// GET one restaurant
app.get('api/v1/restaurants/:id', (req, res) => {
  console.log(req.params)
  res.send('get one ')
})
