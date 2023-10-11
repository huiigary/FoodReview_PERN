const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const db = require('./db')
const cors = require('cors')
const app = express()
// Middleware = some function that is between the frontend request and the backend response  (It performs something with the request).... route handler is technically also middleware
app.use(morgan('dev')) // morgan for useful logging
app.use(express.json()) // !! Middleware express.json is useful  enabling "req.body" so the backend can get the body request
app.use(cors())

/**
 * CRUD operations for Restaurants: api/v1/restaurants/:id
 * - get all restaurants
 * - get one restaurant :id
 * - create restaurant
 * - delete restaurant /:id
 * - update restaurant /:id
 */

// make app listen at port
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log('Server is running on port:', port)
})

// GET one restaurant
app.get('/api/v1/restaurants/:id', async (req, res) => {
  try {
    console.log('get one', req.params)
    let { id } = req.params
    let results = await db.query('select * from restaurants where id = $1', [
      id,
    ])
    let restaurant = results.rows.length > 0 ? results.rows[0] : null
    console.log({ id }, results.rows[0])
    res.status(200).json({
      data: restaurant,
    })
  } catch (err) {
    console.log('Error get one', { err })
    res.status(400).send(String(err))
  }
})

// GET all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
  try {
    let results = await db.query('select * from restaurants')
    let restaurants = results.rows
    console.log('Get all restaurants:', results.rows)
    res.status(200).json({
      data: {
        restaurants: restaurants,
      },
    })
  } catch (err) {
    console.log('Error get ALL', { err })
    res.status(400).send(String(err))
  }
})

// CREATE a restaurant
app.post('/api/v1/restaurants', async (req, res) => {
  try {
    console.log('create rest', req.body)
    // if restaurant already exists --> return
    // if not existing --> create new restaurant
    let { name, location, price_range } = req.body
    let results = await db.query(
      'INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *', // ...returning * will give the row created
      [name, location, price_range]
    )
    let newRestaurant = results.rows.length > 0 ? results.rows[0] : null
    res.status(200).json({
      data: newRestaurant,
    })
  } catch (err) {
    console.log('Error creating', { err })
    res.status(400).send(String(err))
  }
})

// DELETE a restaurant
app.delete('/api/v1/restaurants/:id', async (req, res) => {
  try {
    let { id } = req.params
    let results = await db.query(
      'DELETE from restaurants WHERE id = $1 returning *',
      [id]
    )
    let deleted = results.rows.length > 0 ? results.rows[0] : null
    res.status(200).json({
      data: deleted,
    })
  } catch (err) {
    console.log('Error deleting', { err })
    res.status(400).send(String(err))
  }
})

// UPDATE a restaurant with id
app.patch('/api/v1/restaurants/:id', async (req, res) => {
  try {
    let { id } = req.params
    let { name, location, price_range } = req?.body
    let results = await db.query(
      'UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id=$4 returning *',
      [name, location, price_range, id]
    )
    let updatedRestaurant = results.rows.length > 0 ? results.rows[0] : null
    res.status(200).json({
      data: updatedRestaurant,
    })
  } catch (err) {
    console.log('Error updating', { err })
    res.status(400).send(String(err))
  }
})
