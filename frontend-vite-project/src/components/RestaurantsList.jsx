import React, { useState, setState } from 'react'
import { Modal, Box, Typography, Button } from '@mui/material'
import { RestaurantFinder } from '../apis/RestaurantFinder'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20%',
  bgcolor: 'red',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const RestaurantsList = ({ restaurants, setRestaurants }) => {
  const [open, setOpen] = useState(false)
  const [selectedRestaurant, setSelectedRestaurant] = useState({})

  // remove from backend then locally
  const deleteRestaurant = async (id) => {
    try {
      let deleted = await RestaurantFinder.delete(`/${id}`).then(
        (res) => res.data.data
      )
      if (deleted) {
        let filteredList = restaurants.filter(
          (restaurant) => restaurant.id != id
        )
        setRestaurants(filteredList)
      }
    } catch (err) {}
  }

  // open delete modal and pass restaurant to modify
  const openDeleteModal = (restaurant) => {
    setOpen(true)
    setSelectedRestaurant(restaurant)
  }

  return (
    <div>
      {/* Modal: delete prompt */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant='h6' component='h2'>
            Delete Restaurant: {selectedRestaurant.name}?
          </Typography>

          <Button
            onClick={() => {
              deleteRestaurant(selectedRestaurant.id), setOpen(false)
            }}
          >
            Yes
          </Button>
          <Button onClick={() => setOpen(false)}>No</Button>
        </Box>
      </Modal>

      <table>
        {/* Table header: name, location, price, review, rating */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>Reviews</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {/* List of restaurant rows  */}
        <tbody>
          {restaurants &&
            restaurants.map((restaurant, index) => (
              <tr
                key={index}
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                <td
                  style={{
                    width: '100%',
                  }}
                >
                  {restaurant.name}
                </td>
                <td
                  style={{
                    width: '100%',
                  }}
                >
                  {restaurant.location}
                </td>
                <td
                  style={{
                    width: '100%',
                  }}
                >
                  {restaurant.price_range}
                </td>
                <td
                  style={{
                    width: '100%',
                  }}
                >
                  reviews
                </td>
                <td style={{ width: '100%' }}>
                  <button style={{}}>Edit</button>
                </td>
                <td style={{ width: '100%' }}>
                  <button
                    onClick={() => openDeleteModal(restaurant)}
                    style={{}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
