import '../styles/Home.css'
import react, { useState, setState } from 'react'
import { RestaurantFinder } from '../apis/RestaurantFinder'
export const AddRestaurant = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('')

  // add new restaurant to the database
  const handleAddRestaurant = async () => {
    // create new restaurant in backend
    if (name && location && priceRange) {
      let newRestaurant = await RestaurantFinder.post('/', {
        name,
        location,
        price_range: priceRange,
      })
    } else {
      console.log('cannot make new restaurant!', { name, location, priceRange })
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}
    >
      <form>
        <span>
          {/* <label>Name</label> */}
          <input
            placeholder='Name'
            type='search'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </span>
        <span>
          {/* <label>Location</label> */}
          <input
            placeholder='Location'
            type='search'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </span>
        <span>
          {/* <label>Price</label> */}
          <select
            defaultValue={priceRange}
            placeholder='price'
            className='inputRow'
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option disabled>Price Range</option>
            <option value='1'>$</option>
            <option value='2'>$$</option>
            <option value='3'>$$$</option>
            <option value='4'>$$$</option>
            <option value='5'>$$$</option>
          </select>
        </span>
        <button type='button' onClick={() => handleAddRestaurant()}>
          Add
        </button>
      </form>
    </div>
  )
}
