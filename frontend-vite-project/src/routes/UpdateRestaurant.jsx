import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RestaurantFinder } from '../apis/RestaurantFinder'
import { RestaurantContext } from '../RestaurantContextProvider'

export const UpdateRestaurant = () => {
  const { id } = useParams() // gets parameter passed into browser
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPriceRange] = useState('')

  // On mount, get the restaurant with id then set all fields for display
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

  // update existing restaurant with new values
  const updateRestaurant = async (id, name, location, price_range) => {
    try {
      // update backend
      let updatedRestaurant = await RestaurantFinder.patch(`/${id}`, {
        name,
        location,
        price_range,
      })
      // navigate to home page "/"
      navigate('/')
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <div>
      <h1>Update Restaurant {id}</h1>
      {/* name， location , price_range drop down*/}
      <form onSubmit={() => console.log('submiting')}>
        <div>
          <label>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          <label>Price Range</label>
          <input
            type='text'
            value={price}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
      </form>

      <div>
        <button
          style={{ margin: 10 }}
          onClick={() => updateRestaurant(id, name, location, price)}
        >
          Submit
        </button>
        <button
          style={{ backgroundColor: 'red', margin: 10 }}
          onClick={() => navigate('/')}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
